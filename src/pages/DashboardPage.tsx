import type { FC } from "react";
import NavbarSidebarLayout from "../layouts/navbar-sidebar";
import { Outlet } from "react-router";

const DashboardPage: FC = function () {
  return (
    <NavbarSidebarLayout>
      <Outlet/>
    </NavbarSidebarLayout>
  );
};

export {DashboardPage};
