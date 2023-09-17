import Footer from "components/footer/FooterAuthDefault";
import { useAuth } from "contexts/AuthContext";
import React from "react";
import { Link } from "react-router-dom";
import homeImg from "../../assets/img/home/home-bg.jpg";
const HomePage = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      <header class="body-font text-gray-600">
        <div class="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
          <span class="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="h-10 w-10 rounded-full bg-blue-500 p-2 text-white"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">VeWrite</span>
          </span>

          <nav class="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
            {/* <a class="mr-5 hover:text-gray-900"> </a> */}
            <Link to="/auth/sign-in" class="mr-5 hover:text-gray-900">
              Sign in
            </Link>
            <Link to="/auth/sign-up" class="mr-5 hover:text-gray-900">
              Sign up
            </Link>
          </nav>
          <button class="mt-4 inline-flex items-center rounded border-0 bg-gray-100 py-1 px-3 text-base hover:bg-gray-200 focus:outline-none md:mt-0">
            <Link to="/admin">Dashboard</Link>

            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="ml-1 h-4 w-4"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
      <body>
        <section class="body-font text-gray-600">
          <div class="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
            <div class="mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
              <img
                class="rounded object-cover object-center"
                alt="hero"
                src={homeImg}
              />
            </div>
            <div class="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
              <h1 class="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
                {currentUser && <p>Welcome , {currentUser.displayName}</p>}
              </h1>
              <p class="mb-8 leading-relaxed">
                Give Words to your Thoughts. Content, in writing, is supreme.
                Writing is an art that speaks from heart. Writing is a chain of
                thoughts that we put into words!
                <br />
                <br />
                CMS: The canvas where words transform into art, ideas into
                stories, and writers into creators. Embrace the power of content
                management systems, for they are the keystones of digital
                literature.
                <br />
              </p>
            </div>
          </div>
        </section>
      </body>
      <Footer />
    </div>
  );
};

export default HomePage;
