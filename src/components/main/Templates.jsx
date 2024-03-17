/* eslint-disable react/prop-types */
import { faEye, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Template = ({ e }) => {
  return (
    <div
      key={e}
      className="w-[8.5rem] h-60 ml-4 rounded-xl relative inline-block overflow-hidden"
    >
      <img
        className="w-full absolute top-0 left-0 right-0"
        src={`/template${e}_mobile.jpg`}
        alt=""
      />
      <button className="text-white w-full h-full z-10 bg-[#000000B6] opacity-0 hover:opacity-100 relative transition-opacity duration-300">
        <FontAwesomeIcon icon={faEye} />
      </button>
    </div>
  );
};

const Carousel = () => {
  const array = Array.from({ length: 6 }, (_, index) => index + 1);

  return (
    <div className="whitespace-nowrap inline-block">
      {array.map((e) => (
        <Template key={e} e={e} />
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
            "flex flex-nowrap w-fit animate-moveLeft hover:animate-paused" +
            (play ? "" : " animate-paused")
          }
        >
          <Carousel />
          <Carousel />
        </div>
      </div>
      <div className="relative mt-6 mb-3">
        <a
          href="#"
          className="font-semibold bg-black text-white px-4 py-2 text-base rounded-md inline-block transition-transform duration-300 hover:scale-[1.02]"
        >
          Browse All Templates
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
