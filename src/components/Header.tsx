import type { FC } from "react";
import { Button, DarkThemeToggle, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

interface HeaderProps{
  isFluid: boolean;
}


const Header: FC<HeaderProps> = function ({isFluid}) {
  
  const navbarProps = {
    fluid : isFluid
  }

  return (
    <Navbar {...navbarProps} >
      <div className="w-full p-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Navbar.Brand href="/">
              <img alt="" src="/images/logo.svg" className="mr-3 h-6 sm:h-8" />
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                vRite
              </span>
            </Navbar.Brand>
          </div>
          <div className="flex items-center gap-3">
            <iframe
              height="30"
              src="https://ghbtns.com/github-btn.html?user=themesberg&repo=flowbite-react-admin-dashboard&type=star&count=true&size=large"
              title="GitHub"
              width="90"
              className="hidden sm:block"
            />
            <DarkThemeToggle />
            <Link to="/new">
              <Button color="primary">Create Post</Button>
            </Link>
            <Link to="/profile">
              <Button color="primary">User Profile</Button>
            </Link>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export {Header};
