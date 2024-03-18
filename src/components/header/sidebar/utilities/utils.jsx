/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  faArrowRightLong,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarLogo from "../../../../assets/sidebarLogo.svg?react";

const Item = ({ item }) => {
  const etc = item.title.includes("All");

  return (
    <li className="mt-2 mb-3">
      <a href="#" className="flex  text-[15px] text-neutral-600 font-semibold">
        <span
          className={
            "mr-3 h-10 w-10 rounded-xl flex justify-center items-center text-lg " +
            (etc ? "bg-white" : "bg-iceberg-100")
          }
        >
          <FontAwesomeIcon icon={item.icon} className="mx-auto" />
        </span>
        <span className="flex items-center">{item.title}</span>
        {item.freeTrial && (
          <span className="h-5 w-16 px-1 ml-1 rounded uppercase text-[10px] font-bold text-white bg-blue-600 block relative">
            <span className="absolute -top-1 left-1.5">Free trial</span>
          </span>
        )}
      </a>
    </li>
  );
};

const List = ({ heading, list }) => {
  return (
    <div className="mb-8">
      <h3 className="mt-5 text-xs text-neutral-500 uppercase tracking-[0.15em] font-semibold">
        {heading}
      </h3>
      <ul className="ml-2 ">
        {list.map((item) => (
          <Item key={item.title} item={item} />
        ))}
      </ul>
    </div>
  );
};

const BottomLink = ({ icon, title }) => {
  return (
    <a href="#" className="flex my-4">
      <span className=" mr-3 w-6 flex justify-center items-center">
        <FontAwesomeIcon icon={icon} className="mx-auto" />
      </span>
      <span>{title}</span>
    </a>
  );
};

const MainLink = ({ title, arrow, setOpenedSection }) => {
  const handleClick = (e) => {
    const section = e.target.innerText;

    if (section != "Email" && section != "Pricing") {
      setOpenedSection(title);
    }
  };

  return (
    <a
      href="#"
      className="flex justify-between my-14 text-neutral-700"
      onClick={handleClick}
    >
      <span>{title}</span>
      {arrow && (
        <span>
          <FontAwesomeIcon icon={faArrowRightLong} />
        </span>
      )}
    </a>
  );
};

const Wrapper = ({ openedSection = null, setOpenedSection, children }) => {
  return (
    <div
      className={
        "h-full w-full p-4 pr-6 " +
        (openedSection
          ? "bg-neutral-100 absolute top-0 left-0 overflow-y-scroll"
          : "bg-white")
      }
    >
      <div>
        {openedSection ? (
          <button onClick={() => setOpenedSection(null)}>
            <FontAwesomeIcon icon={faChevronLeft} className="left-3 relative" />
          </button>
        ) : (
          <div className="relative">
            <SidebarLogo />
            <span className="absolute text-[10px] right-0 -bottom-6 max-sm:hidden">
              India
            </span>
          </div>
        )}
      </div>

      <div
        className={
          "relative " +
          (openedSection
            ? "min-h-[calc(100%-48px)] animate-moveInLeft relative"
            : "min-h-[calc(100%-88px)]")
        }
      >
        {children}
      </div>
    </div>
  );
};

const BottomPoster = ({ image, title }) => {
  return (
    <div className="absolute bottom-0">
      <a href="#" className="mb-2 ml-2 block">
        <span className="overflow-hidden rounded w-full aspect-[7/5] flex items-center">
          <img src={image} alt="#" />
        </span>
        <span className="mt-6 text-base font-semibold inline-block tracking-wide">
          {title}
        </span>
      </a>
    </div>
  );
};

export { Item, List, BottomLink, MainLink, Wrapper, BottomPoster };
