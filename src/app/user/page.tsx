"use client";
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';
import '../styles/userPage.css';
import { useRouter } from 'next/navigation';
import { Exo, Poppins } from 'next/font/google';

interface JwtPayload {
  email?: string;
  username?: string;
  password?: string;
  // Add other fields as necessary
}

const exo = Exo({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Exo({ subsets: ['latin'], weight: ['400', '700'] });

const ProfilePage = () => {
  const [token, setToken] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<JwtPayload | null>(null);
  const [showAccountInformation, setAccountInformation] = useState(false)
  const router = useRouter();

  const showAccountInformationWindow = () => {

  }

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
    <main id='background' className={exo.className}>
      <h1 id="userWelcome">Welcome, {userInfo?.username}</h1>
      {token ? (
        <div>
          {/*<p>Logged in with token: {token}</p>*/}
          {userInfo ? (
            <div id="accountInfoContainer">
            {/* <button className={poppins.className} onClick={showAccountInformationWindow} id="buttonUser">Manage Account</button> */}
            <div id="sensitiveField" className="space-y-10">
              <div className="field">
                <label id='label' className="block text-white-700 font-medium">EMAIL</label>
                <span className='mt-1' id="emailField">{userInfo.email}</span>
              </div>
              <div className="field">
                <label id='label' className="block text-red-700 font-medium">TOKEN</label>
                <span className='mt-15' id="passwordField">{userInfo.password}</span>
              </div>
            </div>
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
