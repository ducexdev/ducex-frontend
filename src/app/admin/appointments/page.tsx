'use client';

import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  Video,
  Phone,
  Users,
  MoreHorizontal,
  CheckCircle,
  XCircle,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Plus,
} from 'lucide-react';
import styles from './appointments.module.css';

/* ─── Types ──────────────────────────────────────────────────────────────── */
type AppointmentType = 'IN_PERSON' | 'VIRTUAL' | 'PHONE';
type AppointmentStatus = 'CONFIRMED' | 'PENDING' | 'CANCELLED' | 'COMPLETED';

interface Appointment {
  id: string;
  client: string;
  lawyer: string;
  date: string; // ISO date string
  time: string; // e.g. "10:00"
  type: AppointmentType;
  status: AppointmentStatus;
  matter: string;
}

/* ─── Mock Data ──────────────────────────────────────────────────────────── */
const MOCK_APPOINTMENTS: Appointment[] = [
  {
    id: 'APT-001',
    client: 'Adaeze Okafor',
    lawyer: 'Mr. Chukwudi Eze',
    date: '2026-07-28',
    time: '10:00',
    type: 'IN_PERSON',
    status: 'CONFIRMED',
    matter: 'Property Transfer — 14 Maple Ave',
  },
  {
    id: 'APT-002',
    client: 'Emeka Nwosu',
    lawyer: 'Mrs. Funke Adeyemi',
    date: '2026-07-28',
    time: '14:30',
    type: 'VIRTUAL',
    status: 'CONFIRMED',
    matter: 'Corporate Restructuring — NovaTech Ltd',
  },
  {
    id: 'APT-003',
    client: 'Tunde Adesanya',
    lawyer: 'Mr. Chukwudi Eze',
    date: '2026-07-29',
    time: '09:00',
    type: 'PHONE',
    status: 'PENDING',
    matter: 'Employment Dispute — Adesanya v Pinnacle',
  },
  {
    id: 'APT-004',
    client: 'Chidinma Eze',
    lawyer: 'Dr. Bisi Okonkwo',
    date: '2026-07-30',
    time: '11:00',
    type: 'IN_PERSON',
    status: 'COMPLETED',
    matter: 'Family Law — Custody Arrangement',
  },
  {
    id: 'APT-005',
    client: 'Seun Fashola',
    lawyer: 'Mrs. Funke Adeyemi',
    date: '2026-07-31',
    time: '15:00',
    type: 'VIRTUAL',
    status: 'CANCELLED',
    matter: 'Immigration — Tier 2 Visa Appeal',
  },
];

/* ─── Config ─────────────────────────────────────────────────────────────── */
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const HOURS = Array.from({ length: 11 }, (_, i) => i + 8); // 8–18

const TYPE_CONFIG: Record<AppointmentType, { label: string; color: string; bg: string; Icon: React.ElementType }> = {
  IN_PERSON: { label: 'In Person', color: '#2d8a4e', bg: 'rgba(45,138,78,0.12)', Icon: MapPin },
  VIRTUAL: { label: 'Virtual', color: '#3b82f6', bg: 'rgba(59,130,246,0.12)', Icon: Video },
  PHONE: { label: 'Phone', color: '#8b5cf6', bg: 'rgba(139,92,246,0.12)', Icon: Phone },
};

const STATUS_CONFIG: Record<AppointmentStatus, { label: string; color: string; bg: string }> = {
  CONFIRMED: { label: 'Confirmed', color: '#2d8a4e', bg: 'rgba(45,138,78,0.1)' },
  PENDING: { label: 'Pending', color: '#d4a843', bg: 'rgba(212,168,67,0.1)' },
  CANCELLED: { label: 'Cancelled', color: '#e55555', bg: 'rgba(229,85,85,0.1)' },
  COMPLETED: { label: 'Completed', color: '#6b7280', bg: 'rgba(107,114,128,0.1)' },
};

/* ─── Helpers ─────────────────────────────────────────────────────────────── */
function getWeekDates(baseDate: Date): Date[] {
  const day = baseDate.getDay(); // 0=Sun, 1=Mon … 6=Sat
  const diffToMon = day === 0 ? -6 : 1 - day;
  const monday = new Date(baseDate);
  monday.setDate(baseDate.getDate() + diffToMon);
  return Array.from({ length: 5 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d;
  });
}

function isoDate(d: Date): string {
  return d.toISOString().split('T')[0];
}

function formatHour(h: number): string {
  return h < 12 ? `${h}AM` : h === 12 ? '12PM' : `${h - 12}PM`;
}

function appointmentToSlot(apt: Appointment): { col: number; row: number } | null {
  const weekDates = getWeekDates(new Date('2026-07-28'));
  const colIdx = weekDates.findIndex((d) => isoDate(d) === apt.date);
  if (colIdx === -1) return null;
  const hour = parseInt(apt.time.split(':')[0], 10);
  const rowIdx = HOURS.indexOf(hour);
  if (rowIdx === -1) return null;
  return { col: colIdx, row: rowIdx };
}

/* ─── Component ──────────────────────────────────────────────────────────── */
export default function AppointmentsPage() {
  const [weekOffset, setWeekOffset] = useState(0);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const baseDate = new Date('2026-07-28');
  baseDate.setDate(baseDate.getDate() + weekOffset * 7);
  const weekDates = getWeekDates(baseDate);

  const weekStart = weekDates[0].toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  const weekEnd = weekDates[4].toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

  // Map appointments onto calendar grid cells
  const calendarMap: Record<string, Appointment[]> = {};
  MOCK_APPOINTMENTS.forEach((apt) => {
    const slot = appointmentToSlot(apt);
    if (slot) {
      const key = `${slot.col}-${slot.row}`;
      if (!calendarMap[key]) calendarMap[key] = [];
      calendarMap[key].push(apt);
    }
  });

  return (
    <div className={styles.page}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Appointments</h1>
          <p className={styles.pageSubtitle}>Manage all scheduled client consultations and meetings.</p>
        </div>
        <button className={styles.addBtn}>
          <Plus size={16} />
          New Appointment
        </button>
      </div>

      {/* ─── Weekly Calendar ──────────────────────────────────────────────── */}
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>
            <Calendar size={18} style={{ marginRight: 8, verticalAlign: 'middle', color: '#d4a843' }} />
            Weekly View
          </h2>
          <div className={styles.weekNav}>
            <button className={styles.weekNavBtn} onClick={() => setWeekOffset((o) => o - 1)}>
              <ChevronLeft size={16} />
            </button>
            <span className={styles.weekRange}>
              {weekStart} – {weekEnd}
            </span>
            <button className={styles.weekNavBtn} onClick={() => setWeekOffset((o) => o + 1)}>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className={styles.calendarWrapper}>
          {/* Time column */}
          <div className={styles.timeColumn}>
            <div className={styles.timeColumnHeader} />
            {HOURS.map((h) => (
              <div key={h} className={styles.timeCell}>
                {formatHour(h)}
              </div>
            ))}
          </div>

          {/* Day columns */}
          {DAYS.map((day, colIdx) => {
            const dateObj = weekDates[colIdx];
            const isToday = isoDate(dateObj) === isoDate(new Date());
            return (
              <div key={day} className={styles.dayColumn}>
                <div className={`${styles.dayHeader} ${isToday ? styles.dayHeaderToday : ''}`}>
                  <span className={styles.dayName}>{day}</span>
                  <span className={`${styles.dayNum} ${isToday ? styles.dayNumToday : ''}`}>
                    {dateObj.getDate()}
                  </span>
                </div>
                {HOURS.map((_, rowIdx) => {
                  const key = `${colIdx}-${rowIdx}`;
                  const apts = calendarMap[key] || [];
                  return (
                    <div key={rowIdx} className={styles.calCell}>
                      {apts.map((apt) => {
                        const tc = TYPE_CONFIG[apt.type];
                        return (
                          <div
                            key={apt.id}
                            className={styles.calEvent}
                            style={{ background: tc.bg, borderLeft: `3px solid ${tc.color}` }}
                            title={`${apt.client} — ${apt.matter}`}
                          >
                            <span className={styles.calEventTime}>{apt.time}</span>
                            <span className={styles.calEventClient}>{apt.client.split(' ')[0]}</span>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── Appointments Table ───────────────────────────────────────────── */}
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>
            <Clock size={18} style={{ marginRight: 8, verticalAlign: 'middle', color: '#d4a843' }} />
            Upcoming Appointments
          </h2>
          <span className={styles.countBadge}>{MOCK_APPOINTMENTS.length} total</span>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Client</th>
                <th>Lawyer</th>
                <th>Date &amp; Time</th>
                <th>Type</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_APPOINTMENTS.map((apt) => {
                const tc = TYPE_CONFIG[apt.type];
                const sc = STATUS_CONFIG[apt.status];
                const dateDisplay = new Date(apt.date).toLocaleDateString('en-GB', {
                  weekday: 'short',
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                });
                return (
                  <tr key={apt.id} className={styles.tableRow}>
                    {/* Client */}
                    <td>
                      <div className={styles.clientCell}>
                        <div className={styles.clientAvatar}>{apt.client.charAt(0)}</div>
                        <div>
                          <div className={styles.clientName}>{apt.client}</div>
                          <div className={styles.clientMatter}>{apt.matter}</div>
                        </div>
                      </div>
                    </td>

                    {/* Lawyer */}
                    <td>
                      <div className={styles.lawyerCell}>
                        <Users size={14} className={styles.lawyerIcon} />
                        {apt.lawyer}
                      </div>
                    </td>

                    {/* Date & Time */}
                    <td>
                      <div className={styles.dateCell}>
                        <span className={styles.dateText}>{dateDisplay}</span>
                        <span className={styles.timeText}>
                          <Clock size={12} style={{ marginRight: 4 }} />
                          {apt.time}
                        </span>
                      </div>
                    </td>

                    {/* Type Badge */}
                    <td>
                      <span
                        className={styles.typeBadge}
                        style={{ color: tc.color, background: tc.bg }}
                      >
                        <tc.Icon size={12} />
                        {tc.label}
                      </span>
                    </td>

                    {/* Status Badge */}
                    <td>
                      <span
                        className={styles.statusBadge}
                        style={{ color: sc.color, background: sc.bg }}
                      >
                        {sc.label}
                      </span>
                    </td>

                    {/* Actions */}
                    <td>
                      <div className={styles.actions}>
                        <button
                          className={styles.actionBtn}
                          title="Confirm"
                          style={{ color: '#2d8a4e' }}
                        >
                          <CheckCircle size={16} />
                        </button>
                        <button
                          className={styles.actionBtn}
                          title="Cancel"
                          style={{ color: '#e55555' }}
                        >
                          <XCircle size={16} />
                        </button>
                        <div className={styles.menuWrapper}>
                          <button
                            className={styles.actionBtn}
                            title="More options"
                            onClick={() =>
                              setActiveMenu(activeMenu === apt.id ? null : apt.id)
                            }
                          >
                            <MoreHorizontal size={16} />
                          </button>
                          {activeMenu === apt.id && (
                            <div className={styles.dropdownMenu}>
                              <button className={styles.dropdownItem} onClick={() => setActiveMenu(null)}>
                                View Details
                              </button>
                              <button className={styles.dropdownItem} onClick={() => setActiveMenu(null)}>
                                Edit
                              </button>
                              <button
                                className={`${styles.dropdownItem} ${styles.dropdownItemDanger}`}
                                onClick={() => setActiveMenu(null)}
                              >
                                Delete
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
