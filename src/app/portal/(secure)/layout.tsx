"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  Briefcase, 
  FileText, 
  Calendar, 
  MessageSquare, 
  User, 
  Bell, 
  LogOut,
  Menu,
  X
} from 'lucide-react';
import styles from './PortalLayout.module.css';
import portalApiClient from '@/utils/portalApiClient';
import Cookies from 'js-cookie';

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [unreadNotifications, setUnreadNotifications] = useState(0);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await portalApiClient.get('/portal/me');
        setUser(data.data);
      } catch (err) {
        console.error('Failed to fetch profile', err);
        // Will be handled by interceptor (redirect to login)
      }
    };

    const fetchNotifications = async () => {
      try {
        const { data } = await portalApiClient.get('/portal/notifications');
        const unread = data.data.filter((n: any) => !n.isRead).length;
        setUnreadNotifications(unread);
      } catch (err) {
        console.error('Failed to fetch notifications', err);
      }
    };

    fetchProfile();
    fetchNotifications();
  }, []);

  const handleLogout = async () => {
    try {
      const refreshToken = Cookies.get('ducex_refresh_token');
      if (refreshToken) {
        await portalApiClient.post('/auth/logout', { refreshToken });
      }
    } catch (err) {
      console.error(err);
    } finally {
      Cookies.remove('ducex_access_token');
      Cookies.remove('ducex_refresh_token');
      router.push('/portal/login');
    }
  };

  const navItems = [
    { name: 'Dashboard', href: '/portal/dashboard', icon: LayoutDashboard },
    { name: 'My Matters', href: '/portal/matters', icon: Briefcase },
    { name: 'Documents', href: '/portal/documents', icon: FileText },
    { name: 'Appointments', href: '/portal/appointments', icon: Calendar },
    { name: 'Messages', href: '/portal/messages', icon: MessageSquare },
    { name: 'Profile', href: '/portal/profile', icon: User },
  ];

  return (
    <div className={styles.layout}>
      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.logoContainer}>
          <Link href="/portal/dashboard" style={{ position: 'relative', width: '150px', height: '30px', display: 'block' }}>
            <Image src="/images/logo.png" alt="Ducex Solicitors" fill style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
          </Link>
        </div>

        <nav className={styles.nav}>
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link 
                key={item.name} 
                href={item.href} 
                className={`${styles.navItem} ${isActive ? styles.activeNavItem : ''}`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <item.icon size={20} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className={styles.userProfile}>
          <div className={styles.avatar}>
            {user?.firstName?.[0] || 'C'}
          </div>
          <div className={styles.userInfo}>
            <span className={styles.userName}>{user ? `${user.firstName} ${user.lastName}` : 'Loading...'}</span>
            <span className={styles.userRole}>Client</span>
          </div>
          <button onClick={handleLogout} className={styles.iconButton} style={{ color: 'rgba(255,255,255,0.7)', marginLeft: 'auto' }} title="Logout">
            <LogOut size={18} />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.main}>
        <header className={styles.header}>
          <button className={styles.mobileMenuBtn} onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <h1 className={styles.headerTitle}>
            {navItems.find(i => pathname.startsWith(i.href))?.name || 'Portal'}
          </h1>
          
          <div className={styles.headerActions}>
            <button className={styles.iconButton}>
              <Bell size={20} />
              {unreadNotifications > 0 && <span className={styles.badge}>{unreadNotifications}</span>}
            </button>
          </div>
        </header>

        <div className={styles.content}>
          {children}
        </div>
      </main>
    </div>
  );
}
