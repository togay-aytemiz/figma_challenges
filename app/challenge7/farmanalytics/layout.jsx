import SideNav from "@/app/components/ch7/Sidenav";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow md:overflow-y-auto p-[15px] bg-[#4A7A4C]">
        {children}
      </div>
    </div>
  );
}
