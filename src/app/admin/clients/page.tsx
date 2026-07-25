'use client';

import React from 'react';
import { Search, Filter, Eye } from 'lucide-react';
import styles from './clients.module.css';

const MOCK_CLIENTS = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+234 800 000 0000', type: 'INDIVIDUAL', matters: 2, joined: '2025-01-10' },
  { id: 2, name: 'Tech Solutions Ltd', email: 'legal@techsolutions.com', phone: '+234 811 111 1111', type: 'CORPORATE', matters: 5, joined: '2024-11-20' },
  { id: 3, name: 'Jane Smith', email: 'jane@example.com', phone: '+234 822 222 2222', type: 'INDIVIDUAL', matters: 1, joined: '2026-03-15' },
];

export default function ClientsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Clients</h1>
        <div className={styles.actions}>
          <div className={styles.searchBox}>
            <Search size={16} />
            <input type="text" placeholder="Search clients..." />
          </div>
          <button className={styles.filterBtn}><Filter size={16}/> Filter</button>
        </div>
      </div>
      
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Type</th>
              <th>Matters</th>
              <th>Joined Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_CLIENTS.map(client => (
              <tr key={client.id}>
                <td className={styles.name}>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.phone}</td>
                <td>
                  <span className={`${styles.badge} ${styles['badge' + client.type]}`}>{client.type}</span>
                </td>
                <td>{client.matters} active</td>
                <td>{client.joined}</td>
                <td>
                  <button className={styles.actionBtn}><Eye size={16}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
