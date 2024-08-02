"use client"
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';  // Ensure this import works
import '../styles/userPage.css';

interface JwtPayload {
  email?: string;
  username?: string;
  // Add other fields as necessary
}

const ProfilePage = () => {
  const [token, setToken] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<JwtPayload | null>(null);

  useEffect(() => {
    const existingToken = Cookies.get('token');
    console.log('Retrieved token:', existingToken);
    if (existingToken) {
      setToken(existingToken);
      try {
        const decodedToken = jwtDecode<JwtPayload>(existingToken);
        console.log(decodedToken + "<----")
        console.log('Decoded token:', decodedToken);
        setUserInfo(decodedToken);
      } catch (error) {
        console.error('Failed to decode token:', error);
        setUserInfo(null);  // Handle error state
      }
    } else {
      console.log('No token cookie found');
    }
  }, []);

  return (
    <main id='background'>
      <h1 id="Title">Your Profile</h1>
      {token ? (
        <div>
          <p>Logged in with token: {token}</p>
          {userInfo ? (
            <div>
              <p>Email: {userInfo.email}</p>
              <p>Username: {userInfo.id}</p>
              {/* Render other user info as necessary */}
            </div>
          ) : (
            <p>Failed to decode token or token has no user info.</p>
          )}
        </div>
      ) : (
        <p>No token found. Please log in.</p>
      )}
    </main>
  );
};

export default ProfilePage;
