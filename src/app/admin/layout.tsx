/* Admin layout - sidebar + header shell */
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard, Users, Briefcase, Calendar, FileText,
  Scale, BookOpen, HelpCircle, Star, UserCog, ClipboardList,
  Settings, ChevronLeft, ChevronRight, LogOut, Bell, Menu
} from 'lucide-react';
import styles from './admin.module.css';

const NAV_ITEMS = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Leads', href: '/admin/leads', icon: ClipboardList },
  { label: 'Clients', href: '/admin/clients', icon: Users },
  { label: 'Matters', href: '/admin/matters', icon: Briefcase },
  { label: 'Consultations', href: '/admin/consultations', icon: Scale },
  { label: 'Appointments', href: '/admin/appointments', icon: Calendar },
  { label: 'Documents', href: '/admin/documents', icon: FileText },
  { label: 'Lawyers', href: '/admin/lawyers', icon: UserCog },
  { label: 'Services', href: '/admin/services', icon: Scale },
  { label: 'Blog', href: '/admin/blog', icon: BookOpen },
  { label: 'FAQs', href: '/admin/faqs', icon: HelpCircle },
  { label: 'Testimonials', href: '/admin/testimonials', icon: Star },
  { label: 'Users', href: '/admin/users', icon: Users },
  { label: 'Audit Logs', href: '/admin/audit-logs', icon: ClipboardList },
  { label: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className={styles.adminRoot}>
      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${collapsed ? styles.sidebarCollapsed : ''} ${mobileSidebarOpen ? styles.sidebarMobileOpen : ''}`}>
        <div className={styles.sidebarHeader}>
          {!collapsed && (
            <div className={styles.brand}>
              <span className={styles.brandLogo}>D</span>
              <div className={styles.brandText}>
                <strong>Ducex</strong>
                <span>Admin</span>
              </div>
            </div>
          )}
          <button
            className={styles.collapseBtn}
            onClick={() => setCollapsed(!collapsed)}
            aria-label="Toggle sidebar"
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>

        <nav className={styles.sidebarNav}>
          {NAV_ITEMS.map(({ label, href, icon: Icon }) => {
            const active = pathname === href || (href !== '/admin' && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`${styles.navItem} ${active ? styles.navItemActive : ''}`}
                title={collapsed ? label : undefined}
                onClick={() => setMobileSidebarOpen(false)}
              >
                <Icon size={18} className={styles.navIcon} />
                {!collapsed && <span className={styles.navLabel}>{label}</span>}
                {active && !collapsed && <div className={styles.navActiveBar} />}
              </Link>
            );
          })}
        </nav>

        <div className={styles.sidebarFooter}>
          <button className={`${styles.navItem} ${styles.logoutBtn}`}>
            <LogOut size={18} className={styles.navIcon} />
            {!collapsed && <span>Log out</span>}
          </button>
        </div>
      </aside>

      {/* Mobile overlay */}
      {mobileSidebarOpen && (
        <div className={styles.mobileOverlay} onClick={() => setMobileSidebarOpen(false)} />
      )}

      {/* Main content area */}
      <div className={styles.mainArea}>
        {/* Top Header */}
        <header className={styles.topBar}>
          <button
            className={styles.mobileMenuBtn}
            onClick={() => setMobileSidebarOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
          <div className={styles.topBarRight}>
            <button className={styles.topBarIconBtn} aria-label="Notifications">
              <Bell size={18} />
              <span className={styles.notificationBadge}>3</span>
            </button>
            <div className={styles.adminAvatar}>
              <span>A</span>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className={styles.pageContent}>
          {children}
        </main>
      </div>
    </div>
  );
}
