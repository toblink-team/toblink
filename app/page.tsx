'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { toblinkMarkup } from './toblink-markup';
import { supabase } from '../lib/supabase';

export default function Home() {
  useEffect(() => {
    async function loadUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
(window as any).__TOBLINK_SUPABASE__ = supabase;
      (window as any).__TOBLINK_USER__ = user;

      window.dispatchEvent(
        new CustomEvent('toblink-auth', {
          detail: { user },
        })
      );
    }

    loadUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      const user = session?.user ?? null;

      (window as any).__TOBLINK_USER__ = user;

      window.dispatchEvent(
        new CustomEvent('toblink-auth', {
          detail: { user },
        })
      );
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <>
      <div
        id="toblink-app"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: toblinkMarkup }}
      />

      <Script src="./toblink.js" strategy="afterInteractive" />
    </>
  );
}