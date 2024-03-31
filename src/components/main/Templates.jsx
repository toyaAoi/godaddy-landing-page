/* eslint-disable react/prop-types */
import {
  faArrowRightLong,
  faEye,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import template1Moblie from "../../assets/templates/template1_mobile.webp";
import template1Desktop from "../../assets/templates/template1_desktop.webp";
import template2Mobile from "../../assets/templates/template2_mobile.webp";
import template2Desktop from "../../assets/templates/template2_desktop.webp";
import template3Mobile from "../../assets/templates/template3_mobile.webp";
import template4Mobile from "../../assets/templates/template4_mobile.webp";
import template5Mobile from "../../assets/templates/template5_mobile.webp";
import template5Desktop from "../../assets/templates/template5_desktop.webp";
import template6Mobile from "../../assets/templates/template6_mobile.webp";
import template6Desktop from "../../assets/templates/template6_desktop.webp";
import template7Mobile from "../../assets/templates/template7_mobile.webp";
import template7Desktop from "../../assets/templates/template7_desktop.webp";

const Template = ({ src }) => {
  return (
    <div
      key={src.mobile}
      className={
        "h-60 ml-4 rounded-xl relative inline-block overflow-hidden max-sm:w-[8.5rem]" +
        (src.desktop ? " sm:aspect-[1.56]" : " sm:w-[8.5rem]")
      }
    >
      {src.desktop ? (
        <img
          className="w-full absolute top-0 left-0 right-0 max-sm:hidden"
          src={src.desktop}
          alt=""
        />
      ) : (
        <img
          className="w-full absolute top-0 left-0 right-0 max-sm:hidden"
          src={src.mobile}
          alt=""
        />
      )}
      <img
        className="w-full absolute top-0 left-0 right-0 sm:hidden"
        src={src.mobile}
        alt=""
      />
      <button className="text-white w-full h-full z-10 bg-[#000000B6] opacity-0 hover:opacity-100 relative transition-opacity duration-300">
        <FontAwesomeIcon icon={faEye} />
      </button>
    </div>
  );
};

const Carousel = () => {
  const templates = [
    {
      mobile: template1Moblie,
      desktop: template1Desktop,
    },
    {
      mobile: template2Mobile,
      desktop: template2Desktop,
    },
    {
      mobile: template3Mobile,
    },
    {
      mobile: template4Mobile,
    },
    {
      mobile: template5Mobile,
      desktop: template5Desktop,
    },
    {
      mobile: template6Mobile,
      desktop: template6Desktop,
    },
    {
      mobile: template7Mobile,
      desktop: template7Desktop,
    },
  ];

  return (
    <div className="whitespace-nowrap inline-block">
      {templates.map((e) => (
        <Template key={e.mobile} src={e} />
      ))}
    </div>
  );
};

const Templates = () => {
  const [play, setPlay] = useState(true);

  return (
    <section className="mt-16 py-8 bg-mercury-100 text-center">
      <div>
        <h2 className="text-3xl font-bold mt-4">Templates designed to sell.</h2>
        <p className="my-6 font-semibold">
          Choose from 100s of designs for every idea and industry.
        </p>
      </div>

      <div className="my-2 w-screen overflow-hidden">
        <div
          className={
            "flex flex-nowrap w-fit hover:animate-paused max-sm:animate-moveLeft40 sm:animate-moveLeft70" +
            (play ? "" : " !animate-paused")
          }
        >
          <Carousel />
          <Carousel />
        </div>
      </div>
      <div className="relative mb-3 max-sm:mt-6 sm:mt-8">
        <a
          href="#"
          className="font-semibold bg-black text-white text-base rounded-md inline-block transition-all duration-300 max-sm:hover:scale-[1.02] max-sm:px-4 max-sm:py-2 sm:px-8 sm:py-3.5 group *:transition-all *:duration-300"
        >
          <span className="sm:hidden">Browse All Templates</span>

          <span className="mr-4 ms-4 font-bold group-hover:ms-0 max-sm:hidden">
            Browse All Templates
          </span>
          <span className="-ms-4 opacity-0 group-hover:ms-0 group-hover:opacity-100 max-sm:hidden">
            <FontAwesomeIcon icon={faArrowRightLong} />
          </span>
        </a>
        <button
          className="w-[50px] aspect-square absolute right-2 -top-4 border-2 border-neutral-400 text-neutral-400 rounded-full p-2 hover:border-neutral-950 hover:text-neutral-950 transition-colors duration-300"
          onClick={() => setPlay(!play)}
        >
          <FontAwesomeIcon icon={play ? faPause : faPlay} />
        </button>
      </div>
    </section>
  );
};

export default Templates;
