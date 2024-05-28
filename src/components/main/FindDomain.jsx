import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FindDomain = () => {
  return (
    <section className="py-16 px-4 bg-iceberg-100 text-center">
      <h2 className="my-6 max-xl:text-[29px] xl:text-4xl font-abrilfatface">
        It all starts with a domain.
      </h2>
      <p className="text-base ">
        Make your idea real. Claim your space online with a domain.
      </p>
      <form className="max-xl:mt-24 xl:mt-6 xl:mb-16 h-[60px] xl:max-w-3xl xl:mx-auto flex">
        <input
          type="text"
          placeholder="Find your perfect domain"
          className="h-full grow pl-5 py-4 placeholder:text-base placeholder:text-neutral-500 xl:border border-black"
        />
        <button className="min-w-[60px] h-full text-white bg-black grow-0">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="xl:hidden" />
          <span className="max-xl:hidden xl:inline-block font-bold px-4 text-base">
            Search
          </span>
        </button>
      </form>
    </section>
  );
};

export default FindDomain;
