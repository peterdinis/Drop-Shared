"use client"

import { useRouter } from 'next/navigation'
import { useEffect, ComponentType } from 'react';
import Cookies from 'js-cookie';

const PrivateRoute = <T extends object>(WrappedComponent: ComponentType<T>) => {
  const PrivateComponent = (props: T) => {
    const router = useRouter();
    const getUserCookie = Cookies.get('userCredentials');

    useEffect(() => {
      if (!getUserCookie) {
        router.push('/login');
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getUserCookie]);

    return <WrappedComponent {...props} />;
  };

  return PrivateComponent;
};

export default PrivateRoute;