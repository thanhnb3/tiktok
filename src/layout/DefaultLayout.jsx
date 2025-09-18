import Header from "../layout/Header/Header.jsx";
import Sidebar from "../layout/Sidebar/Sidebar.jsx";

function DefaultLayout({ children }) {
  return (
    <div className="default_layout__wrapper">
      <Header />
      <div className="default_layout__container">
        <Sidebar />
        <div className="default_layout__content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
