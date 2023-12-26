'use client';

import { FC, useState } from 'react';
import classNames from 'classnames';
import { XCircle, Menu, LogOut, Upload, Files } from 'lucide-react';
import { useAuth } from '../../hooks/useAuthContent';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Cookies from 'js-cookie';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const Sidebar: FC = () => {
  const [collapsed, setSidebarCollapsed] = useState(false);
  const { toast } = useToast();
  const { logout } = useAuth();
  const router = useRouter();

  const logoutUser = () => {
    logout();
    toast({
      title: 'Logout was successfull',
      color: 'green',
      duration: 2000,
    });
    Cookies.remove('userCredentials');
    router.push('/login');
  };

  return (
    <div
      className={classNames({
        'grid min-h-screen': true,
        'grid-cols-sidebar': !collapsed,
        'grid-cols-sidebar-collapsed': collapsed,
        'transition-[grid-template-columns] duration-300 ease-in-out': true,
      })}
    >
      <div className='bg-white text-black'>
        <button onClick={() => setSidebarCollapsed((prev) => !prev)}>
          {collapsed === true ? (
            <Menu className='w-7 h-7' />
          ) : (
            <XCircle className='w-7 h-7' />
          )}
        </button>
        {collapsed === false ? (
          <>
            <div>
              <div className='mt-8'>
                <div className='mt-8'>
                  <Button variant={'ghost'} value='sm' onClick={logoutUser}>
                    <LogOut onClick={logoutUser} />
                    Logout
                  </Button>
                </div>{' '}
              </div>

              <div className='mt-8'>
                <Button variant={'ghost'} value='sm'>
                  <Upload />
                  <Link href='/upload'>Upload new file</Link>
                </Button>
              </div>

              <div className='mt-8'>
                <Button variant={'ghost'} value='sm'>
                  <Files />
                  <Link href='/files'>My all files</Link>
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div>
            <div className='mt-8'>
              <div className='mt-8'>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Button
                        onClick={logoutUser}
                        variant={'ghost'}
                        size={'sm'}
                      >
                        <LogOut />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Logout</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className='mt-8'>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Button variant={'ghost'} size={'sm'}>
                        <Link href='/files'>
                          <Files />
                        </Link>
                        <TooltipContent>Upload file</TooltipContent>
                      </Button>
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className='mt-8'>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Button variant={'ghost'} size={'sm'}>
                        <Link href='/files'>
                          <Files />
                        </Link>
                        <TooltipContent>My files</TooltipContent>
                      </Button>
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
