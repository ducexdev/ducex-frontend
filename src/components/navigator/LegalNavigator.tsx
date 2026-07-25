"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Users, HeartCrack, Home, Briefcase, Building2, Shield, 
  Calculator, FileText, Scale, HelpCircle,
  ArrowLeft, RotateCcw, Lock, CheckCircle2
} from 'lucide-react';
import { Question, NavigatorResult, Answer } from '../../data/navigator';
import { team } from '../../data/team';
import { Button } from '../ui/Button';
import styles from './LegalNavigator.module.css';

interface LegalNavigatorProps {
  questions: Record<string, Question>;
  results: Record<string, NavigatorResult>;
  initialQuestionId?: string;
}

const IconMap: Record<string, React.ReactNode> = {
  Users: <Users size={24} />,
  HeartCrack: <HeartCrack size={24} />,
  Home: <Home size={24} />,
  Briefcase: <Briefcase size={24} />,
  Building2: <Building2 size={24} />,
  Shield: <Shield size={24} />,
  Calculator: <Calculator size={24} />,
  FileText: <FileText size={24} />,
  Scale: <Scale size={24} />,
  HelpCircle: <HelpCircle size={24} />
};

export const LegalNavigator: React.FC<LegalNavigatorProps> = ({ 
  questions, 
  results, 
  initialQuestionId = 'q_start'
}) => {
  const [step, setStep] = useState(1); // 1: Issue, 2: Details, 3: Recommendation
  const [history, setHistory] = useState<string[]>([initialQuestionId]);
  const [currentResultId, setCurrentResultId] = useState<string | null>(null);
  
  // Dummy form state for step 2
  const [details, setDetails] = useState({ name: '', email: '', phone: '' });

  const currentQuestionId = history[history.length - 1];
  const currentQuestion = questions[currentQuestionId];
  const currentResult = currentResultId ? results[currentResultId] : null;

  const handleAnswerClick = (answer: Answer) => {
    if (answer.resultId) {
      setCurrentResultId(answer.resultId);
      setStep(2); // Move to Details step
    } else if (answer.nextId) {
      setHistory([...history, answer.nextId]);
    }
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3); // Move to Recommendations
  };

  const handleBack = () => {
    if (step === 3) {
      setStep(2);
    } else if (step === 2) {
      setStep(1);
      setCurrentResultId(null);
    } else if (history.length > 1) {
      setHistory(history.slice(0, -1));
    }
  };

  const handleRestart = () => {
    setStep(1);
    setCurrentResultId(null);
    setHistory([initialQuestionId]);
    setDetails({ name: '', email: '', phone: '' });
  };

  // Find a matching team member based on serviceSlug
  const getMatchedAttorney = () => {
    if (!currentResult) return null;
    // Simple logic: pick the first team member whose practices include the result's serviceSlug (loosely matched)
    const match = team.find(member => 
      member.practices.some(p => p.toLowerCase().includes(currentResult.title.split(' ')[0].toLowerCase())) ||
      member.role.includes('Partner')
    );
    return match || team[0]; // fallback to first member
  };

  const matchedAttorney = getMatchedAttorney();

  return (
    <div className={styles.wizardContainer}>
      
      {/* Progress Bar */}
      <div className={styles.progressContainer}>
        <div className={styles.progressStep}>
          <div className={`${styles.stepCircle} ${step >= 1 ? styles.stepCircleActive : ''}`}>1</div>
          <span className={`${styles.stepText} ${step >= 1 ? styles.stepTextActive : ''}`}>Your Issue</span>
        </div>
        <div className={styles.progressLine}></div>
        
        <div className={styles.progressStep}>
          <div className={`${styles.stepCircle} ${step >= 2 ? styles.stepCircleActive : ''}`}>2</div>
          <span className={`${styles.stepText} ${step >= 2 ? styles.stepTextActive : ''}`}>Your Details</span>
        </div>
        <div className={styles.progressLine}></div>
        
        <div className={styles.progressStep}>
          <div className={`${styles.stepCircle} ${step === 3 ? styles.stepCircleActive : ''}`}>3</div>
          <span className={`${styles.stepText} ${step === 3 ? styles.stepTextActive : ''}`}>Recommendations</span>
        </div>
      </div>

      <div className={styles.navActions}>
        <button onClick={handleBack} disabled={step === 1 && history.length === 1} className={styles.navBtn}>
          <ArrowLeft size={16} color="var(--color-brass)" /> Back
        </button>
        <button onClick={handleRestart} className={styles.navBtn}>
          Restart <RotateCcw size={16} />
        </button>
      </div>

      {/* Step 1: Legal Issue Grid */}
      {step === 1 && (
        <div style={{ animation: 'fadeIn 0.3s ease-out' }}>
          <div className={styles.questionHeader}>
            <h2 className={styles.questionTitle}>{currentQuestion.title}</h2>
            {currentQuestion.subtitle && <p className={styles.questionSubtitle}>{currentQuestion.subtitle}</p>}
          </div>

          <div className={styles.optionsGrid}>
            {currentQuestion.answers.map((answer: Answer) => (
              <button key={answer.id} className={styles.optionCard} onClick={() => handleAnswerClick(answer)}>
                {answer.icon && IconMap[answer.icon] && (
                  <div className={styles.optionIcon}>{IconMap[answer.icon]}</div>
                )}
                <div className={styles.optionContent}>
                  <span className={styles.optionTitle}>{answer.label}</span>
                  {answer.description && <span className={styles.optionDesc}>{answer.description}</span>}
                </div>
              </button>
            ))}
          </div>

          <div className={styles.secureBadge}>
            <Lock className={styles.secureIcon} size={24} />
            <div className={styles.secureText}>
              <span className={styles.secureTitle}>Your information is secure</span>
              <span className={styles.secureDesc}>We value your privacy. All information provided is confidential and protected.</span>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Details Form */}
      {step === 2 && (
        <div style={{ animation: 'fadeIn 0.3s ease-out' }}>
          <div className={styles.questionHeader}>
            <h2 className={styles.questionTitle}>Just a few more details.</h2>
            <p className={styles.questionSubtitle}>So our experts can prepare for your consultation.</p>
          </div>
          
          <form className={styles.formContainer} onSubmit={handleDetailsSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Full Name</label>
              <input type="text" required className={styles.input} value={details.name} onChange={e => setDetails({...details, name: e.target.value})} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Email Address</label>
              <input type="email" required className={styles.input} value={details.email} onChange={e => setDetails({...details, email: e.target.value})} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Phone Number (Optional)</label>
              <input type="tel" className={styles.input} value={details.phone} onChange={e => setDetails({...details, phone: e.target.value})} />
            </div>
            <Button type="submit" variant="accent" fullWidth style={{ marginTop: 'var(--space-4)' }}>View My Recommendations</Button>
          </form>
        </div>
      )}

      {/* Step 3: Recommendation */}
      {step === 3 && currentResult && (
        <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
          <div className={styles.recommendationCard}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
              <CheckCircle2 color="var(--color-brass)" size={32} />
              <h2 style={{ fontSize: 'var(--text-3xl)', color: 'var(--color-ink)', margin: 0 }}>
                {currentResult.title}
              </h2>
            </div>
            
            <p style={{ fontSize: 'var(--text-lg)', lineHeight: 'var(--lh-relaxed)', color: 'var(--color-slate)', marginBottom: 'var(--space-8)' }}>
              {currentResult.description}
            </p>

            <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-4)', color: 'var(--color-ink)' }}>Suggested Next Steps</h3>
            <ul style={{ paddingLeft: 'var(--space-6)', marginBottom: 'var(--space-8)', color: 'var(--color-slate)', lineHeight: 'var(--lh-relaxed)' }}>
              {currentResult.suggestedSteps.map((s: string, idx: number) => (
                <li key={idx} style={{ marginBottom: 'var(--space-2)' }}>{s}</li>
              ))}
            </ul>

            {matchedAttorney && (
              <div className={styles.teamMatch}>
                <div className={styles.teamImage}>
                  <Image src={matchedAttorney.image} alt={matchedAttorney.name} fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
                </div>
                <div className={styles.teamInfo}>
                  <p style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--font-bold)', color: 'var(--color-slate)', textTransform: 'uppercase', marginBottom: 'var(--space-1)' }}>Expert Matched For You</p>
                  <h4 className={styles.teamName}>{matchedAttorney.name}</h4>
                  <p className={styles.teamRole}>{matchedAttorney.role}</p>
                </div>
                <Link href={`/team/${matchedAttorney.slug}`}>
                  <Button variant="ghost">View Profile</Button>
                </Link>
              </div>
            )}

            <div style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-8)' }}>
              <Link href={`/services/${currentResult.serviceSlug}`} style={{ flex: 1 }}>
                <Button variant="secondary" fullWidth>Learn More</Button>
              </Link>
              <Link href="/contact" style={{ flex: 1 }}>
                <Button variant="accent" fullWidth>Book Consultation</Button>
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
