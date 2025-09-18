import Header from "../layout/Header/Header.jsx";
import Sidebar from "../layout/Sidebar/Sidebar.jsx";

function DefaultLayout({ children }) {
  return (
    <div className="w-screen h-screen flex justify-between items-start py-2 px-2">
      <Sidebar />
      <div className="flex-1 h-full">{children}</div>
      <Header />
    </div>
  );
}

export default DefaultLayout;
