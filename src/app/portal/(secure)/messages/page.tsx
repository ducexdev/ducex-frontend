"use client";
import React, { useEffect, useState, useRef } from 'react';
import { Send, Search } from 'lucide-react';
import styles from './Messages.module.css';
import portalApiClient from '@/utils/portalApiClient';

export default function MessagesPage() {
  const [matters, setMatters] = useState<any[]>([]);
  const [activeMatter, setActiveMatter] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [userId, setUserId] = useState<bigint | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = async () => {
      try {
        const [profileRes, mattersRes] = await Promise.all([
          portalApiClient.get('/portal/me'),
          portalApiClient.get('/portal/matters')
        ]);
        
        setUserId(profileRes.data.data.id);
        setMatters(mattersRes.data.data);
      } catch (err) {
        console.error('Failed to load initial data', err);
      } finally {
        setIsLoading(false);
      }
    };
    init();
  }, []);

  useEffect(() => {
    if (activeMatter) {
      loadMessages(activeMatter.uuid);
    }
  }, [activeMatter]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const loadMessages = async (matterUuid: string) => {
    try {
      const { data } = await portalApiClient.get(`/portal/matters/${matterUuid}/messages`);
      setMessages(data.data);
    } catch (err) {
      console.error('Failed to load messages', err);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !activeMatter || isSending) return;

    setIsSending(true);
    try {
      const { data } = await portalApiClient.post(`/portal/matters/${activeMatter.uuid}/messages`, {
        content: newMessage.trim()
      });
      setMessages(prev => [...prev, data.data]);
      setNewMessage('');
    } catch (err) {
      console.error('Failed to send message', err);
    } finally {
      setIsSending(false);
    }
  };

  const filteredMatters = matters.filter(m => 
    m.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    m.referenceNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return <div>Loading messages...</div>;
  }

  return (
    <div className={styles.container}>
      {/* Sidebar - Matter List */}
      <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h2 className={styles.sidebarTitle}>Conversations</h2>
          <div style={{ position: 'relative' }}>
            <Search size={16} color="var(--color-text-light)" style={{ position: 'absolute', left: '10px', top: '10px' }} />
            <input 
              type="text" 
              placeholder="Search matters..." 
              className={styles.searchInput}
              style={{ paddingLeft: '32px' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.mattersList}>
          {filteredMatters.length === 0 ? (
            <div style={{ padding: '1rem', textAlign: 'center', color: 'var(--color-text-light)' }}>No matters found.</div>
          ) : (
            filteredMatters.map(matter => (
              <div 
                key={matter.id} 
                className={`${styles.matterItem} ${activeMatter?.id === matter.id ? styles.matterItemActive : ''}`}
                onClick={() => setActiveMatter(matter)}
              >
                <div className={styles.matterTitle}>{matter.title}</div>
                <div className={styles.matterRef}>{matter.referenceNumber}</div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className={styles.chatArea}>
        {activeMatter ? (
          <>
            <div className={styles.chatHeader}>
              <h2 className={styles.chatTitle}>{activeMatter.title}</h2>
              <span style={{ fontSize: '0.875rem', color: 'var(--color-text-light)' }}>
                {activeMatter.lawyer ? `${activeMatter.lawyer.user.firstName} ${activeMatter.lawyer.user.lastName}` : 'Unassigned'}
              </span>
            </div>

            <div className={styles.messagesList}>
              {messages.length === 0 ? (
                <div className={styles.emptyState}>No messages in this conversation yet.</div>
              ) : (
                messages.map((msg, index) => {
                  // Determine if the message is from the logged-in client or the lawyer
                  // Note: userId is BigInt but from API it comes as string/number usually. We use loosely equal.
                  const isClient = msg.sender.id == userId;
                  
                  return (
                    <div 
                      key={msg.id || index} 
                      className={`${styles.messageWrapper} ${isClient ? styles.messageWrapperClient : styles.messageWrapperLawyer}`}
                    >
                      <span className={styles.messageSender}>
                        {isClient ? 'You' : `${msg.sender.firstName} ${msg.sender.lastName}`}
                      </span>
                      <div className={`${styles.messageBubble} ${isClient ? styles.messageBubbleClient : styles.messageBubbleLawyer}`}>
                        {msg.content}
                      </div>
                      <span className={styles.messageTime}>
                        {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  );
                })
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className={styles.messageInputArea}>
              <form onSubmit={handleSend} className={styles.inputForm}>
                <input 
                  type="text" 
                  placeholder="Type your message..." 
                  className={styles.messageInput}
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  disabled={isSending}
                />
                <button type="submit" className={styles.sendBtn} disabled={!newMessage.trim() || isSending}>
                  <Send size={20} />
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className={styles.emptyState}>
            Select a matter from the list to view messages.
          </div>
        )}
      </div>
    </div>
  );
}
