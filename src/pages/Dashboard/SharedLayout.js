import { Outlet } from "react-router-dom";
import { Sidebar, Navbar, Footer } from "../../components";

const SharedLayout = () => {
  return (
    <main className="App">
      <Navbar />
      <div className="page-wrapper">
        <Sidebar />
        <div className="content-area-wrapper">
          <Outlet />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default SharedLayout;
