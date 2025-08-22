import { memo } from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import NetWorkStatus from "./NetWorkStatus/NetWorkStatus";

const MainLayout = () => {
  return (
    <>
      <NetWorkStatus />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default memo(MainLayout);
