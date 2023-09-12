import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";

import Profile from "views/admin/profile";
import NewPost from "views/admin/createPost";
// import RTLDefault from "views/rtl/default";

// Auth Imports
import SignIn from "views/auth/SignIn";
import SignUp from "views/auth/SignUp";

// Icon Imports
import {
  MdHome,
  MdPerson,
  MdLock,
  MdBook,
  MdNoteAdd,
  MdSettings,
} from "react-icons/md";
import Posts from "views/admin/posts";
import { BsBucket } from "react-icons/bs";
import FaqPage from "views/admin/faq";
import Support  from "views/admin/emailSupport/Support";
// import { FaqPage } from "views/admin/faq";

const routes = [
  {
    name: "Home",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Posts",
    layout: "/admin",
    path: "posts",
    icon: <MdBook className="h-6 w-6" />,
    component: <Posts />,
  },
  {
    name: "Add New Post",
    layout: "/admin",
    path: "createPost",
    icon: <MdNoteAdd className="h-6 w-6" />,
    component: <NewPost />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Trash",
    layout: "/admin",
    path: "trash",
    icon: <BsBucket className="h-6 w-6" />,
    component: <h1>Trash Page</h1>,
  },
  {
    name: "Settings",
    layout: "/admin",
    path: "settings",
    icon: <MdSettings className="h-6 w-6" />,
    component: <h2>settings</h2>,
  },
  {
    name: "FAQ",
    layout: "/admin",
    path: "faq",
    icon: <MdNoteAdd className="h-6 w-6" />,
    component: <FaqPage />,
  },
  {
    name: "Email Support",
    layout: "/admin",
    path: "support",
    icon: <MdNoteAdd className="h-6 w-6" />,
    component: <Support />,
  },

];
export default routes;
