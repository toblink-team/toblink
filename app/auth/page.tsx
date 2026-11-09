'use client';

import { FormEvent, useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function AuthPage() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  async function checkAuth() {
    const params = new URLSearchParams(window.location.search);

    if (params.get('logout') === '1') {
      await supabase.auth.signOut();
      setMessage('از حساب خارج شدی.');
      window.history.replaceState({}, '', './auth');
      return;
    }

    const { data } = await supabase.auth.getUser();

    if (data.user) {
      setMessage(`✅ وارد شده‌ای: ${data.user.email}`);
    }
  }

  checkAuth();
}, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setLoading(true);
    setMessage('');

    if (mode === 'signup') {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (error) {
        setMessage(`❌ ${error.message}`);
      } else {
        setMessage(
          '✅ ثبت‌نام انجام شد. ایمیلت را برای تأیید حساب بررسی کن.'
        );
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
  setMessage(`❌ ${error.message}`);
} else {
  window.location.replace('./');
}
    }

    setLoading(false);
  }

  async function logout() {
    await supabase.auth.signOut();
    setMessage('از حساب خارج شدی.');
  }

  return (
    <main
      dir="rtl"
      style={{
        minHeight: '100vh',
        background: '#f8f2e9',
        display: 'grid',
        placeItems: 'center',
        padding: '24px',
        fontFamily: 'Tahoma, Arial, sans-serif',
      }}
    >
      <section
        style={{
          width: '100%',
          maxWidth: '430px',
          background: '#fffaf3',
          border: '1px solid rgba(90,16,40,.14)',
          borderRadius: '24px',
          padding: '32px',
          boxShadow: '0 18px 50px rgba(62,14,31,.10)',
        }}
      >
        <div
          style={{
            color: '#5a1028',
            fontWeight: 900,
            letterSpacing: '4px',
            marginBottom: '8px',
          }}
        >
          TO◇BLINK
        </div>

        <h1
          style={{
            color: '#3c0b1d',
            margin: '8px 0',
            fontSize: '30px',
          }}
        >
          {mode === 'login' ? 'ورود به Toblink' : 'ساخت حساب'}
        </h1>

        <p
          style={{
            color: '#776970',
            fontSize: '13px',
            lineHeight: 2,
            marginBottom: '24px',
          }}
        >
          {mode === 'login'
            ? 'به استایل‌ها، ذخیره‌ها و پروهای خودت برگرد.'
            : 'حساب Toblink خودت رو بساز.'}
        </p>

        <form onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <input
              type="text"
              placeholder="نام"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              style={inputStyle}
            />
          )}

          <input
            type="email"
            placeholder="ایمیل"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="رمز عبور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            style={inputStyle}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              border: 0,
              borderRadius: '13px',
              padding: '14px',
              background: '#5a1028',
              color: '#fff',
              fontWeight: 900,
              cursor: 'pointer',
              opacity: loading ? 0.6 : 1,
            }}
          >
            {loading
              ? '...'
              : mode === 'login'
              ? 'ورود'
              : 'ثبت‌نام'}
          </button>
        </form>

        {message && (
          <div
            style={{
              marginTop: '16px',
              padding: '12px',
              background: '#f2e5dc',
              borderRadius: '12px',
              color: '#5a1028',
              fontSize: '12px',
              lineHeight: 1.8,
            }}
          >
            {message}
          </div>
        )}

        <button
          type="button"
          onClick={() =>
            setMode(mode === 'login' ? 'signup' : 'login')
          }
          style={{
            width: '100%',
            marginTop: '16px',
            border: 0,
            background: 'transparent',
            color: '#5a1028',
            fontWeight: 800,
            cursor: 'pointer',
          }}
        >
          {mode === 'login'
            ? 'حساب نداری؟ ثبت‌نام کن'
            : 'حساب داری؟ وارد شو'}
        </button>

        <button
          type="button"
          onClick={logout}
          style={{
            width: '100%',
            marginTop: '10px',
            border: 0,
            background: 'transparent',
            color: '#776970',
            fontSize: '11px',
            cursor: 'pointer',
          }}
        >
          خروج از حساب
        </button>
      </section>
    </main>
  );
}

const inputStyle = {
  width: '100%',
  height: '48px',
  padding: '0 14px',
  marginBottom: '10px',
  borderRadius: '12px',
  border: '1px solid rgba(90,16,40,.16)',
  background: '#fff',
  outline: 'none',
  boxSizing: 'border-box' as const,
};