import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SidePager from "../components/SidePager";

function MainLayout({ children }) {
  return (
    <div className="app-layout">
      <Navbar />
        {children}
        <SidePager />
      <Footer />
    </div>
  );
}

export default MainLayout;
