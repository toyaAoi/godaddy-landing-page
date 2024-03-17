/* eslint-disable react/prop-types */
import { faGlobe, faPhone } from "@fortawesome/free-solid-svg-icons";
import card1 from "../../assets/card1.webp";
import card2 from "../../assets/card2.webp";
import card5 from "../../assets/card5.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ card }) => {
  return (
    <div
      className={
        "my-4 relative overflow-hidden rounded-2xl " +
        (card?.img
          ? "h-96"
          : "h-60 flex flex-col justify-center bg-neutral-100")
      }
    >
      {card?.img && (
        <img
          src={card.img}
          alt="background image"
          className="absolute top-0 left-0 w-full z-[5]"
        />
      )}

      <div className="max-w-80 p-7 z-10 relative">
        {card?.icon && (
          <FontAwesomeIcon
            icon={card.icon}
            className="text-[#02a2a7] text-[26px]"
          />
        )}
        <p
          className={
            "py-2 font-semibold" +
            (card?.img
              ? " text-white text-[23px]"
              : " text-neutral-900 text-xl leading-6")
          }
        >
          {card.title}
        </p>
      </div>
    </div>
  );
};

const Cards = () => {
  const cards = [
    {
      id: 1,
      title:
        ".com to .xyz — a huge selection from the largest domain registrar.",
      img: card1,
    },
    {
      id: 2,
      title: "Zzzz... security to help you sleep easy every night.",
      img: card2,
    },
    {
      id: 3,
      title: "More than URLs. 21+ million trust us for their domains and more.",
      icon: faGlobe,
    },
    {
      id: 4,
      title:
        "We're here with the help and advice you need. Call us for award-winning support.",
      icon: faPhone,
    },
    {
      id: 5,
      title:
        "Tools for every small business first — websites, email, marketing, and more.",
      img: card5,
    },
  ];

  return (
    <div>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

const Achievements = () => {
  return (
    <section className="my-24 mx-3.5 ">
      <div className="text-center text-neutral-900">
        <h3 className="text-[28px] font-bold">Why work with GoDaddy?</h3>
        <p className="mt-6 font-semibold -tracking-[0.2px]">
          84+ million domains, 22 million customers, millions of websites, email
          and security — we help grow businesses.
        </p>
      </div>
      <Cards />
    </section>
  );
};

export default Achievements;
