'use client';

import { useRouter } from 'next/navigation';
import { useEffect, ComponentType } from 'react';
import Cookies from 'js-cookie';

const PrivateRoute = <T extends object>(WrappedComponent: ComponentType<T>) => {
  return (props: T) => {
    const router = useRouter();
    const getUserCookie = Cookies.get('userCredentials');

    useEffect(() => {
      if (!getUserCookie) {
        router.push('/login');
      }
    }, [getUserCookie]);

    return <WrappedComponent {...props} />;
  };
};

export default PrivateRoute;
