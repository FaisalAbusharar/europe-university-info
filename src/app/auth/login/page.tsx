"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '../../styles/authPage.css'
import { Poppins, Exo } from 'next/font/google';
import loginDatabase from '@/app/api/login';
import Cookies from 'js-cookie'
import Footer from '@/app/components/footer';


const exo = Exo({ subsets: ['latin'], weight: ['400', '700'] });

const Signup: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(''); // Reset error before new action

    // Simple validation for demonstration purposes
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }
    try {
        const res = await loginDatabase(
          process.env.mongoDatabaseUser, 
          process.env.mongoDatabasePass,
          email, 
          password,
          process.env.mongoDatabaseName, 
          process.env.mongoCollectionName
        );
        Cookies.set('token', res, {expires: 2})
        setSubmitted(true);
      
      } catch (err) {
        if (err instanceof Error) {
          if (err.message === 'UserNotFound') {
            setError('User not found. Please check your user/email and try again.');
          } else if (err.message === 'InvalidCredentials') {
            setError('Invalid credentials. Please check your password and try again.');
          } else {
            setError('Failed to connect to the database. Please try again later.');
          }
        } else {
          setError('An unexpected error occurred.');
        }
      }

  };
  useEffect(() => {
    if (submitted) {
      // Redirect to login page after 2 seconds
      const timer = setTimeout(() => {
        router.push('/user');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [submitted, router]);

  return (
    <main id="background" className={`${exo.className}`}>

      {submitted ? <></> : <h1 className='contextTitle'>Europe University Information</h1>}
      {submitted ? <></> : <p className='context'>Login to save important information, choose a country, learn more, and interact with others!</p>}
      <div className='container'>
        {submitted ? (
          <div className='successfulForm'>
            <h1 className='successfulTitle'>Login Successful!</h1>
          </div>
        ) : (
          <div className="containerForm">
            <h1 className='titleForm'>LOGIN</h1>
            <form className='form' onSubmit={handleSignup}>
              <div className='inputsContainer'>
                <input className='inputFormEmail'
                  type="text"
                  placeholder="Email/Username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input className='inputFormPassword'
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div id='optionsContainer'>
              <button className='inputFormSubmit' type="submit">CONTINUE</button>
              <p>Don't have an acccount? <a href='/auth/signup' id="hyperlink">Sign up!</a></p>
              </div>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        )}
      </div>
      <div style={{position: 'fixed', bottom: '0%', width: '100%'}} className='containerFooter'>
      {submitted ? <></>: <Footer footerInformation={"EUI offers a community of people willing to help each other!"}></Footer>}
      </div>
    </main>
  );
};

export default Signup;

