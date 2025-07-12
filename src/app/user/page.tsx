"use client";
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import '../styles/userPage.css';
import { useRouter } from 'next/navigation';
import { Exo, Poppins } from 'next/font/google';
import updateDatabase from '../api/updateData';
import Footer from '../components/footer';
import BackgroundAnim from '../animation/backgroundAnimationFirst';

interface JwtPayload {
  email?: string;
  username?: string;
  password?: string;
  location?: string;
}

const exo = Exo({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

const ProfilePage = () => {
  const [token, setToken] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<JwtPayload | null>(null);
  const [newName, setNewName] = useState<string>(''); // Start with empty string
  const router = useRouter();

  const isInternational = userInfo?.location === "International";

  const updateName = async () => {
    if (userInfo && token) {
      try {
        const res = await updateDatabase(
          process.env.mongoDatabaseUser,
          process.env.mongoDatabasePass,
          userInfo.email,
          "username",
          newName,
          process.env.mongoDatabaseName,
          process.env.mongoCollectionName
        );

        Cookies.set('token', res, { expires: 14 });
        setUserInfo({ ...userInfo, username: newName });
        window.location.reload();

      } catch (error) {
        console.error('Error updating location:', error);
      }
    }
  };

  const updateLocation = async () => {
    if (userInfo && token) {
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

        Cookies.set('token', res, { expires: 3 });
        setUserInfo({ ...userInfo, location: newLocation });
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
        setNewName(decodedToken.username ?? ''); // Ensure controlled input
      } catch (error) {
        console.error('Failed to decode token:', error);
        setUserInfo(null);
      }
    } else {
      console.log('No token cookie found');
      router.push('/auth/login');
    }
  }, [router]);

  return (
    <main id='background' className={exo.className}>
      <BackgroundAnim objectColor={[255, 225, 225]} className="absolute inset-0 z-0">
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
                  <label id='warningLabel' className='block text-white-500 font-small'>
                    The token cannot be used to login, if you forgot your password or want to change it, you can here.
                  </label>
                </div>

                {/* Change Username Section */}
                <div id="optionsField" style={{ display: "flex", alignItems: "flex-end", gap: "10px" }}>
                  <label id="superLabel" className="text-white-700 font-medium">
                    <span className={exo.className}>Change your Name:</span>
                    <br />
                    <span id="gradientSubSub">
                      <input
                        type="text"
                        maxLength={14}
                        minLength={4}
                        id="subSubtitle"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        style={{
                          background: "transparent",
                          borderBottom: "1px solid gray",
                          outline: "none",
                          fontSize: "1.5rem",
                          fontWeight: "bold",
                        }}
                      />
                    </span>
                  </label>

                  <button
                    id="toggleButtonUser"
                    onClick={updateName}
                    style={{ marginRight: '-100px', bottom: "5px", right: "1px" }}
                  >
                    Update Name
                  </button>
                </div>

                <br /><br />

                {/* Change Location Section */}
                <div id="optionsField">
                  <label id='superLabel' className="text-white-700 font-medium">
                    <span className={exo.className}>Your Location is set to:</span>
                    <span id="gradientSubSub">
                      <span id="subSubtitle">{userInfo.location}</span>
                    </span>
                  </label>
                </div>
                <button id='toggleButtonUser' onClick={updateLocation}>
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
      </BackgroundAnim>

      <div id='forceFooterAtBottom'>
        <Footer
          returnPage='/'
          footerTheme='linear-gradient(to right,rgb(68, 67, 73),rgb(135, 133, 139))'
          footerInformation={"Did you know data in websites is stored as Cookies? It is here too!"}
        />
      </div>
    </main>
  );
};

export default ProfilePage;