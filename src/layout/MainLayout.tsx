import { memo } from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import NetWorkStatus from "./NetWorkStatus/NetWorkStatus";
import ModalStatus from "../shared/components/ModalStatus/ModalStatus";
import ScrollTop from "../shared/components/ScrollTop/ScrollTop";

const MainLayout = () => {
  return (
    <>
      <NetWorkStatus />
      <Header />
      <main>
        <Outlet />
      </main>
      <ScrollTop />
      <ModalStatus />
      <Footer />
    </>
  );
};

export default memo(MainLayout);
