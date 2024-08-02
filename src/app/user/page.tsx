"use client"
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import '../styles/userPage.css';

const ProfilePage = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const existingToken = Cookies.get('token');
    if (existingToken) {
      setToken(existingToken);
    } else {
      console.log('No token cookie found');
    }
  }, []);

  return (
    <main>
      <h1 id="Title">Your Profile</h1>
      {token ? (
        <p id="Title">Logged in with token: {token}</p>
      ) : (
        <p id="Title">No token found. Please log in.</p>
      )}
    </main>
  );
};

export default ProfilePage;
