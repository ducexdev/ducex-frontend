'use client';

import { useCallback } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type EventParams = Record<string, string | number | boolean | undefined>;

// Central analytics hook — wraps GA4 gtag safely
// IMPORTANT: Never pass confidential legal matter details, client names,
// document contents, or sensitive personal data to any of these events.
export function useAnalytics() {
  const track = useCallback((eventName: string, params?: EventParams) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, {
        ...params,
        send_to: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
      });
    }
  }, []);

  return {
    // Page and navigation
    trackPageView: (pagePath: string, pageTitle: string) =>
      track('page_view', { page_path: pagePath, page_title: pageTitle }),

    // Service interactions
    trackServiceView: (serviceSlug: string, serviceTitle: string) =>
      track('service_view', { service_slug: serviceSlug, service_title: serviceTitle }),

    // Legal Navigator
    trackLegalNavigatorStarted: () =>
      track('legal_navigator_started'),
    trackLegalNavigatorCompleted: (practiceArea?: string) =>
      track('legal_navigator_completed', { practice_area: practiceArea }),

    // Consultation
    trackConsultationStarted: (source?: string) =>
      track('consultation_started', { source }),
    trackConsultationSubmitted: (source?: string) =>
      track('consultation_submitted', { source }),

    // Contact interactions
    trackPhoneClicked: () => track('phone_clicked'),
    trackEmailClicked: () => track('email_clicked'),
    trackWhatsAppClicked: () => track('whatsapp_clicked'),
    trackContactFormSubmitted: () => track('contact_form_submitted'),

    // Content
    trackArticleRead: (articleSlug: string, articleTitle: string, category?: string) =>
      track('article_read', {
        article_slug: articleSlug,
        article_title: articleTitle,
        article_category: category,
      }),
    trackLawyerProfileViewed: (lawyerName: string) =>
      track('lawyer_profile_viewed', { lawyer_name: lawyerName }),
  };
}
