
import React, { useRef, useEffect } from 'react';

declare global {
  interface Window {
    turnstile: {
      render: (container: string | HTMLElement, options: {
        sitekey: string;
        callback?: (token: string) => void;
        'expired-callback'?: () => void;
        'error-callback'?: () => void;
      }) => string | undefined;
      reset: (widgetId?: string) => void;
    };
  }
}

interface TurnstileProps {
  onTokenChange: (token: string | null) => void;
}

// Real Cloudflare Turnstile site key
const TURNSTILE_SITE_KEY = '0x4AAAAAABhGQW78wAB2BaBS';

const Turnstile: React.FC<TurnstileProps> = ({ onTokenChange }) => {
  const ref = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const renderTurnstile = () => {
      if (window.turnstile && ref.current) {
        const id = window.turnstile.render(ref.current, {
          sitekey: TURNSTILE_SITE_KEY,
          callback: (token) => {
            onTokenChange(token);
          },
          'expired-callback': () => {
            onTokenChange(null);
          },
          'error-callback': () => {
            onTokenChange(null);
            console.error('Cloudflare Turnstile error.');
          }
        });
        if(id) widgetId.current = id;
      }
    };
    
    const tryRender = () => {
      if (window.turnstile) {
        renderTurnstile();
        return true;
      }
      return false;
    }

    if (tryRender()) {
      return;
    }

    const intervalId = setInterval(() => {
      if (tryRender()) {
        clearInterval(intervalId);
      }
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, [onTokenChange]);

  return <div ref={ref} />;
};

export default Turnstile;
