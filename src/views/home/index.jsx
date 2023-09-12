import Footer from "components/footer/FooterAuthDefault";
import { useAuth } from "contexts/AuthContext";
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      {currentUser && <p>Welcome , {currentUser.displayName}</p>}
      <nav>I am navbar</nav>
      <h1>VeWrite Welcome to Home Page</h1>
      <button className="bg-indigo-500">
        <Link to="/admin">Take me to Dashboard</Link>
      </button>

      <button className="block bg-gray-500">
        <Link to="/auth/sign-in">Sign in </Link>
        <Link to="/auth/sign-up">Sign up link</Link>
      </button>

      <Footer />
    </div>
  );
};

export default HomePage;
