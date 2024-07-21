"use client"
import { useState, FormEvent } from 'react';
import Link from 'next/link';


const Signup: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSignup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(''); // Reset error before new action

    // Simple validation for demonstration purposes
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    // Simulate successful signup and redirect to login page
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main>
      <div>
        <h1>Signup Successful!</h1>
        <p>Redirecting to login page...</p>
        <Link href="/auth/login"></Link>
      </div>
      </main>
    );
  }

  return (
    <main>    
      <div>
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Signup</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
    </main>
  );
};

export default Signup;
