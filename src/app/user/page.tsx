"use client";
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';
import '../styles/userPage.css';
import { useRouter } from 'next/navigation';
import { Exo, Poppins } from 'next/font/google';
import updateDatabase from '../api/updateData';

interface JwtPayload {
  email?: string;
  username?: string;
  password?: string;
  location?: string;
  // Add other fields as necessary
}

const exo = Exo({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Exo({ subsets: ['latin'], weight: ['400', '700'] });

const ProfilePage = () => {
  const [token, setToken] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<JwtPayload | null>(null);
  const router = useRouter();
  const isInternational = userInfo?.location === "International";

  const updateLocation = async () => {
    if (userInfo && token) {
      // Toggle location based on the current state
      const newLocation = isInternational ? "European" : "International";
      try {
        const res = await updateDatabase(
          process.env.mongoDatabaseUser, 
          process.env.mongoDatabasePass,
          userInfo.email,
          "location",
          newLocation,
          process.env.mongoDatabaseName, 
          process.env.mongoCollectionName
        );

        // Update the token with the new location
        Cookies.set('token', res, { expires: 2 });

        // Update the state with the new location
        setUserInfo({ ...userInfo, location: newLocation });

        // Reload the page to reflect the changes
        window.location.reload();
      } catch (error) {
        console.error('Error updating location:', error);
      }
    }
  };

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
      <h1 id="userWelcome"><span id='gradientSub'>Welcome, {userInfo?.username}</span></h1>
      
      {token ? (
        <div>
          {userInfo ? (
            <div id="accountInfoContainer">
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
              <div id="optionsField">
                <label id='superLabel' className="text-white-700 font-medium"><span className={exo.className}>Your Location is set to:</span> <span id="gradientSubSub"><span id="subSubtitle">{userInfo.location}</span></span></label>
              </div>
              <button id='toggleButton'
                  onClick={updateLocation}
                >
                  {isInternational ? "Switch to European" : "Switch to International"}
                </button>
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
