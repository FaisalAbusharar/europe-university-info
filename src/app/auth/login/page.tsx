import '../../styles/userPage.css'
// src/app/auth/login/page.tsx
import { getProviders, signIn } from 'next-auth/react';

const LoginPage = async () => {
  const providers = await getProviders();

  return (
    <div>
      <h1>Login</h1>
      {providers && Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default LoginPage;
