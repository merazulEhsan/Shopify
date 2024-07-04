import BreadCrumb from "@/components/BreadCrumb";
import Sidebar from "./_components/Sidebar";

function Layout({ tabs }) {
  return (
    <section className="relative pb-16">
      {/*end container*/}
      <div className=" relative">
        <BreadCrumb value="Profile" />
        <div className="container lg:flex mt-4">
          <Sidebar />
          <div className="lg:w-3/4 md:pl-8 mt-[30px] lg:mt-0  rounded">
            {tabs}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Layout;
