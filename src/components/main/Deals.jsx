/* eslint-disable react/prop-types */

import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Deal = ({ service }) => {
  return (
    <a
      href="#"
      className="w-1/2 p-6 block even:border-l border-gray-300 group hover:bg-black "
    >
      <span className="h-full flex justify-center items-center text-center ">
        <span className="group-hover:-ms-5 group-hover:text-white">
          {service.service}
          <br />
          {service.price}
        </span>
        <span className="opacity-0 -ms-5 group-hover:ms-6 group-hover:opacity-100">
          <FontAwesomeIcon
            icon={faArrowRightLong}
            className="text-base text-white"
          />
        </span>
      </span>
    </a>
  );
};

const Deals = () => {
  const services = [
    {
      service: "Professional Email",
      price: "₹ 34.00/mo",
    },
    {
      service: ".co.in",
      price: "₹ 39.00/1st yr",
    },
    {
      service: ".in",
      price: "₹ 1.00/1st yr",
    },
    {
      service: "Managed WordPress",
      price: "₹ 279.00/mo",
    },
    {
      service: "SSL Security",
      price: "₹ 2,999.00/yr",
    },
    {
      service: "Websites + Marketing",
      price: "Start For Free**",
    },
    {
      service: "VPS",
      price: "₹ 649.00/mo",
    },
    {
      service: "GoDaddy Pro",
      price: "Sign Up For Free",
    },
  ];

  return (
    <section className="mx-4 flex flex-wrap text-base font-semibold rounded border border-gray-300 [&>*:nth-child(n+3)]:border-t [&_*]:transition-ease-elastic">
      {services.map((service) => (
        <Deal key={service.service} service={service} />
      ))}
      <a
        href="#"
        className="w-full flex items-center border-gray-300 group [&>*]:w-1/2 [&>*]:text-center [&>*]:p-6 hover:bg-black hover:text-white"
      >
        <p className="text-4xl ms-4">.ai</p>
        <p className="">
          ₹ 4,957.85/1st yr, 2-yr term.
          <br />
          .ai is the future.
        </p>
      </a>
    </section>
  );
};

export default Deals;
