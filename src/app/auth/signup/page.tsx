"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '../../styles/authPage.css'
import { Exo } from 'next/font/google';
import connectDb from '@/app/api/signup';
import Footer from '@/app/components/footer';
import useIsMobile from '@/app/utils/useIsMobile';



const exo = Exo({ subsets: ['latin'], weight: ['400', '700'] });

const Signup: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('')
  const [error, setError] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const router = useRouter();
  const isMobile = useIsMobile();

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(''); // Reset error before new action

    // Simple validation for demonstration purposes
    if (!email || !password || !username) {
      setError('Fill all the input fields, all are required');
      return;
    }

    try {
      await connectDb(
        process.env.mongoDatabaseUser, process.env.mongoDatabasePass,
        username, email, password,
        process.env.mongoDatabaseName, process.env.mongoCollectionName,
        process.env.saltRounds
        );
        
      setSubmitted(true);
    } catch (err) {
      if (err instanceof Error) {
        if (err.message == "UserAlreadyExistsEmail") {
          setError("User with this email already exists.")
        }
        else if (err.message == 'UserAlreadyExistsUser') {
          setError("This username is taken, please choose another")
        }
      } else {
      setError('Unexpected Error occured.')
      }
    }

    
  };
 

  useEffect(() => {
    if (submitted) {
      // Redirect to login page after 2 seconds
      const timer = setTimeout(() => {
        router.push('/auth/login');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [submitted, router]);

  return (
    <main id="background" className={`${exo.className}`}>
       {submitted ? <></> : <h1 className='contextTitle  text-[24px] sm:text-[24px] lg:text-[40px]'>Europe University Information</h1>}
       {submitted ? <></> : <p className='context  text-[13px] sm:text-[10px] lg:text-[13px]'>Login to save important information, choose a country, learn more, and interact with others!</p>}
      <div className='container'>
        {submitted ? (
          <div className='successfulForm'>
            <h1 className='successfulTitle'>Signup Successful!</h1>
            <p className='successfulContext'>Redirecting to login page...</p>
          </div>
        ) : (
          <div className="containerForm w-[350px] h-[450px] sm:w-[350px] lg:w-[650px] lg:h-[320px]">
            <h1 className='titleForm'>SIGN UP</h1>
            <form className='form' onSubmit={handleSignup}>
            <input className='inputFormEmail'
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              <div className='inputsContainer flex-col sm:flex-col lg:flex-row'>
                <input className='inputFormEmail'
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input className='inputFormEmail'
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div id='optionsContainer'>
              <button className='inputFormSubmit' type="submit">CONTINUE</button>
              <p>Already have an acccount? <a href='/auth/login' id="hyperlink">Login!</a></p>
              </div>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        )}
      </div>
      <div style={{position: 'fixed', bottom: '0%', width: '100%'}} className='containerFooter'>
      {submitted ? <></>: <Footer returnPage='/' footerTheme='linear-gradient(to right,rgb(12, 152, 207),rgb(12, 16, 233))' footerInformation={isMobile ? " " :"EUI offers a community of people willing to help each other!"}></Footer>}
      </div>
    </main>
  );
};

export default Signup;

