"use client";

import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FC } from "react";
import { useAuth } from "../../hooks/useAuthContent"
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link";
import Input from "../shared/Input";
import { Button } from "@/components/ui/button";

const RegisterForm: FC = () => {
  const router = useRouter();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { toast } = useToast()
  const { register } = useAuth();

  const registerUser = async () => {
    try {
      await register(credentials);
      toast({
        title: "Registeration was successull",
        color: "green"
      })
      router.push("/login");
    } catch (error) {
      toast({
        title: "Register failed",
        color: "red"
      })
      router.push("/register");
    }
  };
  return (
    <>
      <div className="flex justify-center align-top">
        <div className="lg:w-1/2 xl:max-w-screen-sm">
          <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
            <h2
              className="text-center text-4xl text-orange-500 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold"
            >
              Register
            </h2>
            <div className="mt-12">
                <div>
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Email Address
                  </div>
                  <Input
                    id="email"
                    type="email"
                    value={credentials.email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setCredentials({ ...credentials, email: e.target.value })
                    }
                  />
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                      Password
                    </div>
                  </div>
                  <Input
                    type="password"
                    id="password"
                    value={credentials.password}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setCredentials({
                        ...credentials,
                        password: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mt-10">
                  <Button
                    size={"lg"}
                    onClick={registerUser}
                  >
                   Register
                  </Button>
                </div>
              <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                Already have an account ?{" "}
                <Link href="/login" className="cursor-pointer text-orange-500">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
