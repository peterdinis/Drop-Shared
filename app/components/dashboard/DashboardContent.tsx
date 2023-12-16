import { FC } from "react";
import Header from "../shared/Header";

const DashboardContent: FC = () => {
  return (
    <div className="ml-5 py-4 px-8 flex-growtext-center flex-1">
      <Header text="My Dashboard" />
      <br />
      <section className="container mx-auto antialiased ">
        <section className="grid lg:grid-cols-2 2xl:grid-cols-4 grid-cols-1 gap-8">
          <article className="mx-auto max-w-sm pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
            <img
              className="mx-auto mb-20 mt-10 w-40"
              src="https://penpot.app/images/cross-teams.webp"
              alt=""
            />
            <h2 className="text-center text-3xl mt-8 font-bold min-h-18 px-12">
              For cross-domain teams
            </h2>
            <p className="m-4 text-lg p-4 leading-relaxed text-center ">
              Product features and capabilities meant for the different roles in
              the next-decade team. Say goodbye to the legendary pain of the
              design silo.
            </p>
          </article>
        </section>
      </section>
    </div>
  );
};

export default DashboardContent;
