/* eslint-disable react/prop-types */
import { faGlobe, faPhone } from "@fortawesome/free-solid-svg-icons";
import card1 from "../../assets/card1.webp";
import card2 from "../../assets/card2.webp";
import card5 from "../../assets/card5.webp";
import card5Desktop from "../../assets/card5_desktop.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ card }) => {
  return (
    <div
      className={
        "relative overflow-hidden rounded-2xl max-sm:my-4 " +
        (card?.img
          ? "max-sm:h-96"
          : "max-sm:h-60 flex flex-col justify-center bg-neutral-100") +
        (card?.span === 2 ? " sm:col-span-2" : " sm:aspect-[9/10]")
      }
    >
      {card?.img && (
        <img
          src={card.img}
          alt="background image"
          className={
            "absolute top-0 left-0 w-full z-[5]" +
            (card?.imgDesktop ? " sm:hidden" : "")
          }
        />
      )}
      {card?.imgDesktop && (
        <img
          src={card.imgDesktop}
          alt="background image"
          className="absolute top-0 left-0 w-full z-[5] max-sm:hidden"
        />
      )}

      <div
        className={
          "max-w-80 z-10 relative max-sm:p-7 sm:p-4 " +
          (card?.span === 2 ? "sm:w-1/2 sm:top-1/2 sm:-translate-y-1/2" : "")
        }
      >
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
              ? " text-white max-sm:text-[23px] sm:text-[17px] sm:leading-5"
              : " text-neutral-900 text-[21px] leading-6") +
            (card?.span === 2 ? " sm:text-black" : "")
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
      imgDesktop: card5Desktop,
      span: 2,
    },
  ];

  return (
    <div
      id="achievements-grid"
      className="sm:mx-4 sm:mt-12 sm:grid sm:grid-cols-3 sm:gap-4"
    >
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
        <p className="mt-6 mx-auto font-semibold -tracking-[0.2px] max-w-lg">
          84+ million domains, 22 million customers, millions of websites, email
          and security — we help grow businesses.
        </p>
      </div>
      <Cards />
    </section>
  );
};

export default Achievements;
