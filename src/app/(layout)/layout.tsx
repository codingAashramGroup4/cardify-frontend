import Navbar from "@/components/home/navbar/navbar";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
