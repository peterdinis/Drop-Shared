'use client';

import { useRouter } from 'next/navigation';
import { useState, ChangeEvent, FC } from 'react';
import { useAuth } from '../../hooks/useAuthContent';
import { useToast } from '@/components/ui/use-toast';
import Link from 'next/link';
import Cookies from 'js-cookie';
import Input from '../shared/Input';
import { Button } from '@/components/ui/button';

const LoginForm: FC = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { login } = useAuth();

  const loginUser = async () => {
    try {
      await login(credentials);
      Cookies.set('userCredentials', JSON.stringify(credentials));
      toast({
        title: 'Login was succesfull',
        className: 'bg-green-400',
        duration: 2000,
      });
      router.push('/dashboard');
    } catch (error) {
      toast({
        title: 'Login failed',
        variant: 'destructive',
        duration: 2000,
      });
      router.push('/login');
    }
  };

  return (
    <>
      <div className='flex justify-center align-top'>
        <div className='lg:w-1/2 xl:max-w-screen-sm'>
          <div className='mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl'>
            <h2
              className='text-center text-4xl text-orange-500 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold'
            >
              Log in
            </h2>
            <div className='mt-12'>
              <div>
                <div className='text-sm font-bold text-gray-700 tracking-wide'>
                  Email Address
                </div>
                <Input
                  id='email'
                  type='email'
                  value={credentials.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setCredentials({ ...credentials, email: e.target.value })
                  }
                />
              </div>
              <div className='mt-8'>
                <div className='flex justify-between items-center'>
                  <div className='text-sm font-bold text-gray-700 tracking-wide'>
                    Password
                  </div>
                </div>
                <Input
                  type='password'
                  id='password'
                  value={credentials.password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setCredentials({
                      ...credentials,
                      password: e.target.value,
                    })
                  }
                />
              </div>
              <div className='mt-10'>
                <Button onClick={loginUser} size={'lg'}>
                  Log In
                </Button>
              </div>
              <div className='mt-12 text-sm font-display font-semibold text-gray-700 text-center'>
                Don't have an account ?{' '}
                <Link
                  href='/register'
                  className='cursor-pointer text-orange-500'
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
