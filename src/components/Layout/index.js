import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <>
      <Header />
      <div className="container my-5">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
