"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '../../styles/authPage.css'
import { Exo } from 'next/font/google';
import loginDatabase from '@/app/api/login';
import Cookies from 'js-cookie'
import Footer from '@/app/components/footer';
import useIsMobile from '@/app/utils/useIsMobile';


const exo = Exo({ subsets: ['latin'], weight: ['400', '700'] });

const Signup: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const router = useRouter();
  const isMobile = useIsMobile();

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

      {submitted ? <></> : <h1 className='contextTitle text-[24px] sm:text-[24px] lg:text-[40px]'>Europe University Information</h1>}
      {submitted ? <></> : <p className='context'>Login to save important information, choose a country, learn more, and interact with others!</p>}
      <div className='container'>
        {submitted ? (
          <div className='successfulForm'>
            <h1 className='successfulTitle'>Login Successful!</h1>
          </div>
        ) : (
          <div className="containerForm w-[350px] h-[400px] sm:w-[350px] lg:w-[650px] lg:h-[320px]">
            <h1 className='titleForm'>LOGIN</h1>
            <form className='form' onSubmit={handleSignup}>
              <div className='inputsContainer flex-col sm:flex-col lg:flex-row'>
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
      {submitted ? <></>: <Footer returnPage='/' footerTheme='linear-gradient(to right,rgb(12, 152, 207),rgb(12, 16, 233))' footerInformation={isMobile ? '' : "EUI offers a community of people willing to help each other!"}></Footer>}
      </div>
    </main>
  );
};



export default Signup;

