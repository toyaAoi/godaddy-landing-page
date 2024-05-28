import Deals from "./Deals";
import Templates from "./Templates";
import Features from "./Features";
import Reviews from "./Reviews";
import Achievements from "./Achievements";
import FindDomain from "./FindDomain";
import Guide from "./Guide";

const Main = () => {
  return (
    <main>
      <Deals />
      <Templates />
      <Reviews />
      <Features />
      <Achievements />
      <FindDomain />
      <Guide />

      <section className="m-4 text-base">
        <div className="xl:p-10">
          <a href="#" className="underline font-semibold">
            *, ***, ** View product limitations and legal policies
          </a>

          <p className="mt-4">
            Third-party logos and marks are registered trademarks of their
            respective owners. All rights reserved.
          </p>
        </div>
      </section>
      <p className="mt-4 bg-[#f5f7f8] p-4 text-2xl text-center">
        Need help? Call our award-winning support team at 040-67607600
      </p>
    </main>
  );
};

export default Main;
