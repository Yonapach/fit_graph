import { ProSidebarProvider } from "react-pro-sidebar";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";
import Dashboard from "../dashboard";

const Home = () => {
  return (
    <ProSidebarProvider>
      <Sidebar />
      <main className="content">
        <Topbar />
        <Dashboard />
      </main>
    </ProSidebarProvider>
  );
};

export default Home;
