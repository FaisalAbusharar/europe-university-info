"use client";
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';
import '../styles/userPage.css';
import { useRouter } from 'next/navigation';

interface JwtPayload {
  email?: string;
  username?: string;
  // Add other fields as necessary
}

const ProfilePage = () => {
  const [token, setToken] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<JwtPayload | null>(null);
  const router = useRouter();

  useEffect(() => {
    const existingToken = Cookies.get('token');
    if (existingToken) {
      setToken(existingToken);
      try {
        const decodedToken = jwtDecode<JwtPayload>(existingToken);
        setUserInfo(decodedToken);
      } catch (error) {
        console.error('Failed to decode token:', error);
        setUserInfo(null);  // Handle error state
      }
    } else {
      console.log('No token cookie found');
      router.push('/auth/login'); // Redirect if no token is found
    }
  }, [router]);

  return (
    <main id='background'>
      <h1 id="Title">Welcome, {userInfo?.username}</h1>
      {token ? (
        <div>
          {/*<p>Logged in with token: {token}</p>*/}
          {userInfo ? (
            <div>
              <p id='Subtitle'>Your Email: {userInfo.email}</p>
              {/* Render other user info as necessary */}
            </div>
          ) : (
            <p>Failed to decode token or token has no user info.</p>
          )}
        </div>
      ) : (
        <p>Redirecting to login...</p>
      )}
    </main>
  );
};

export default ProfilePage;
