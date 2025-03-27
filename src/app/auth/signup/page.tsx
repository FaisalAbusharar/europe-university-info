"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '../../styles/authPage.css'
import { Poppins, Exo } from 'next/font/google';
import connectDb from '@/app/api/signup';
import Footer from '@/app/components/footer';


const exo = Exo({ subsets: ['latin'], weight: ['400', '700'] });

const Signup: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('')
  const [error, setError] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const router = useRouter();

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

  const tempSolutionFooterPosition = {top: '74.9px'}
 

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
       {submitted ? <></> : <h1 className='contextTitle'>Europe University Information</h1>}
       {submitted ? <></> : <p className='context'>Login to save important information, choose a country, learn more, and interact with others!</p>}
      <div className='container'>
        {submitted ? (
          <div className='successfulForm'>
            <h1 className='successfulTitle'>Signup Successful!</h1>
            <p className='successfulContext'>Redirecting to login page...</p>
          </div>
        ) : (
          <div className="containerForm">
            <h1 className='titleForm'>SIGN UP</h1>
            <form className='form' onSubmit={handleSignup}>
            <input className='inputFormEmail'
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              <div className='inputsContainer'>
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
      {submitted ? <></>: <Footer footerInformation={"EUI offers a community of people willing to help each other!"}></Footer>}
      </div>
    </main>
  );
};

export default Signup;

