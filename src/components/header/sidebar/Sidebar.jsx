/* eslint-disable react/prop-types */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { MainMenu, Domain, WebHost, Security, Marketing } from "./menus";
// import Marketing from "./Marketing";

const Sidebar = ({ open, setOpen }) => {
  const [openedSection, setOpenedSection] = useState(null);

  const handleClose = () => {
    document
      .getElementById("sidebar")
      .classList.replace("translate-x-0", "-translate-x-full");

    setTimeout(() => {
      setOpen(false);
      setOpenedSection(null);
    }, 500);
  };

  return (
    <>
      {open ? (
        <div
          id="overlay"
          className={
            "fixed top-0 left-0 right-0 h-svh w-screen transition-colors duration-500 z-20 bg-[#0000] animate-fadeIn"
          }
        />
      ) : (
        <div
          className={
            "fixed top-0 left-0 right-0 h-svh w-screen transition-colors duration-400 z-20 animate-fadeOut"
          }
        />
      )}
      <div
        id="sidebar"
        className={
          "h-svh w-screen flex fixed top-0 left-0 transition-transform ease-out duration-500 z-50 " +
          (open ? "translate-x-0 " : "-translate-x-full")
        }
      >
        <div className="h-full w-[calc(100%-3.375rem)] relative">
          {open ? <MainMenu setOpenedSection={setOpenedSection} /> : null}

          {open && openedSection === "Domains" ? (
            <Domain
              openedSection={openedSection}
              setOpenedSection={setOpenedSection}
            />
          ) : null}

          {open && openedSection === "Websites and Hosting" ? (
            <WebHost
              openedSection={openedSection}
              setOpenedSection={setOpenedSection}
            />
          ) : null}

          {open && openedSection === "Security" ? (
            <Security
              openedSection={openedSection}
              setOpenedSection={setOpenedSection}
            />
          ) : null}

          {open && openedSection === "Marketing" ? (
            <Marketing
              openedSection={openedSection}
              setOpenedSection={setOpenedSection}
            />
          ) : null}
        </div>
        <div className="">
          <button
            className="mt-1 h-14 w-14 text-white text-xl sm:max-lg:text-2xl"
            onClick={() => handleClose()}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
