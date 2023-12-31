/* eslint-disable jsx-a11y/anchor-is-valid */
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import type { FC  } from "react";
import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import { auth } from "./../firebase/firebase";

const SignInPage: FC = function () {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState({
    email: '',
    password: "",
    confirmPassword: ""
  });


  const navigate = useNavigate();
  const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if(!email || !password){
      setMessage('Please fill all the fields');
      return;
    }
    setMessage('');
    signInWithEmailAndPassword(auth,email, password)
    .then((response)=>{
      // console.log(response);
      const user = response.user;
      if(user){
        navigate('/');
      }
    })
  }

  return (
    <div className="flex flex-col items-center justify-center px-6 lg:h-screen lg:gap-y-12">
      <div className="my-6 flex items-center gap-x-1 lg:my-0">
        <img
          alt="Flowbite logo"
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-12"
        />
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          Flowbite
        </span>
      </div>
      <Card
        horizontal
        imgSrc="/images/authentication/login.jpg"
        imgAlt=""
        className="w-full md:max-w-screen-sm [&>img]:hidden md:[&>img]:w-96 md:[&>img]:p-0 md:[&>*]:w-full md:[&>*]:p-16 lg:[&>img]:block"
      >
        <h1 className="mb-3 text-2xl font-bold dark:text-white md:text-3xl">
          Sign in to platform
        </h1>
        <form>
          <div className="mb-4 flex flex-col gap-y-3">
            <Label htmlFor="email">Your email</Label>
            <TextInput
              id="email"
              name="email"
              placeholder="name@company.com"
              type="email"
              onChange={ e => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6 flex flex-col gap-y-3">
            <Label htmlFor="password">Your password</Label>
            <TextInput
              id="password"
              name="password"
              placeholder="••••••••"
              type="password"
              onChange={ e => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <Checkbox id="rememberMe" name="rememberMe" />
              <Label htmlFor="rememberMe">Remember me</Label>
            </div>
            <a
              href="#"
              className="w-1/2 text-right text-sm text-primary-600 dark:text-primary-300"
            >
              Lost Password?
            </a>
          </div>
          {message && <p className="text-red-500">{message}</p>}
          <div className="mb-6">
            <Button 
            type="submit" 
            className="w-full lg:w-auto"
            onClick={handleLogin}>
              Login to your account
            </Button>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Not registered?&nbsp;
            {/* <a href="#" className="text-primary-600 dark:text-primary-300">
              Create account
            </a> */}
            <Link to="/authentication/sign-up" className="text-primary-600 dark:text-primary-300">
              Create account
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default SignInPage;
