import { useEffect } from 'react';
import { logEvent } from 'firebase/analytics';
import { analytics } from '@/lib/firebase';

export const usePageView = (pageName: string) => {
  useEffect(() => {
    if (analytics) {
      // console.log("Logging page view for:", pageName);
      logEvent(analytics, 'page_view', {
        page_title: pageName,
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
      // console.log("Page view logged for:", pageName);
    }
  }, [pageName]);
};

export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (analytics) {
    // console.log("Logging event:", eventName, eventParams);
    logEvent(analytics, eventName, eventParams);
    // console.log("Event logged:", eventName, eventParams);
  }
};

export const trackClick = (elementName: string, elementType?: string) => {
  trackEvent(elementName, {
    element_prop: elementType || 'button',
  });
};

export const trackScroll = (section: string) => {
  trackEvent('scroll_to_section', {
    section_name: section,
  });
};
