/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import type { FC } from "react";
import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword , updateProfile } from "firebase/auth";
import { auth } from "./../firebase/firebase";

const SignUpPage: FC = function () {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if(!email || !password || !confirmPassword){
      setMessage('Please fill all the fields');
      return;
    }
    if(password !== confirmPassword){
      setMessage('Password not matched');
      return;
    }
    setMessage('');
    console.log(email, password, confirmPassword );
    createUserWithEmailAndPassword(auth,email, password)
    .then(async (response)=>{
      // console.log(response);
      const user = response.user;
      if(user){
        await updateProfile(user, {
          displayName: email.split('@')[0]
        });
      }
      navigate('/');
    })
    .catch((error)=>{
      // console.log(error);
      setMessage(error.message);
    })
    // navigate('/authentication/sign-in/');
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
        imgSrc="/images/authentication/create-account.jpg"
        imgAlt=""
        className="w-full md:max-w-screen-sm [&>img]:hidden md:[&>img]:w-96 md:[&>img]:p-0 md:[&>*]:w-full md:[&>*]:p-16 lg:[&>img]:block"
      >
        <h1 className="mb-3 text-2xl font-bold dark:text-white md:text-3xl">
          Create a Free Account
        </h1>
        <form>
          <div className="mb-4 flex flex-col gap-y-3">
            <Label htmlFor="email">Your email</Label>
            <TextInput
              id="email"
              name="email"
              placeholder="name@company.com"
              type="email"
              onChange={(event)=> setEmail(event.target.value)}
            />
          </div>
          <div className="mb-6 flex flex-col gap-y-3">
            <Label htmlFor="password">Your password</Label>
            <TextInput
              id="password"
              name="password"
              placeholder="••••••••"
              type="password"
              onChange={(event)=> setPassword(event.target.value)}
            />
          </div>
          <div className="mb-6 flex flex-col gap-y-3">
            <Label htmlFor="confirmPassword">Confirm password</Label>
            <TextInput
              id="confirmPassword"
              name="confirmPassword"
              placeholder="••••••••"
              type="password"
              onChange={(event)=> setConfirmPassword(event.target.value)}
            />
          </div>
          <div className="mb-6 flex items-center gap-x-3">
            <Checkbox id="acceptTerms" name="acceptTerms" />
            <Label htmlFor="acceptTerms">
              I accept the&nbsp;
              <a href="#" className="text-primary-700 dark:text-primary-200">
                Terms and Conditions
              </a>
            </Label>
          </div>
          {message && <p className="text-red-500">{message}</p>}
          <div className="mb-7">
            <Button 
            type="submit" 
            className="w-full lg:w-auto"
            onClick={handleSubmit}>
              Create account
            </Button>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Already have an account?&nbsp;
            {/* <a href="#" className="text-primary-600 dark:text-primary-200">
              Login here
            </a> */}
            <Link  
            to = "/authentication/sign-in" 
            className="text-primary-600 dark:text-primary-200">
              Login here
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default SignUpPage;
