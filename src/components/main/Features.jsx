/* eslint-disable react/prop-types */
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import feat1 from "../../assets/feat1.webp";
import feat2 from "../../assets/feat2.webp";
import feat3 from "../../assets/feat3.webp";
import feat4 from "../../assets/feat4.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VideoButton = () => {
  return (
    <a href="#" className="inline-block group ml-4">
      <div className="flex items-center">
        <span className="mr-2 text-3xl inline-block group-hover:scale-110 transition-transform duration-200">
          <FontAwesomeIcon icon={faCirclePlay} className="" />
        </span>
        <span className="underline decoration-transparent group-hover:decoration-black underline-offset-4 transition-colors duration-200">
          Play Video
        </span>
      </div>
    </a>
  );
};

const Feature = ({ feature }) => {
  const { img, plan, heading, description, button } = feature;

  return (
    <div className="mt-12">
      <div>
        <img src={img} alt="banner" />
      </div>
      <div className="px-4">
        <h2 className="text-base font-semibold">{plan}</h2>
        <h3 className="my-4 text-[27px] font-abrilfatface leading-7">
          {heading}
        </h3>
        <div>
          <p
            className={`leading-6 font-medium text-[${description.fontSize}px]`}
          >
            {description.text}
          </p>
          {description.list && (
            <ul className="mt-4 pl-5 list-disc">
              {description.list.map((item, index) => (
                <li key={index} className="indent-1 font-semibold">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="text-base">
          <button className="mt-8 border-black border-2 px-4 py-1.5 rounded font-semibold hover:scale-[1.02] transition-transform duration-300">
            {button}
          </button>

          {feature?.videoButton && <VideoButton />}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      img: feat1,
      plan: "Microsoft 365",
      heading: "Empower Your Business with Microsoft 365",
      description: {
        fontSize: "16",
        text: "Microsoft 365 suite provides a robust set of tools and services that can improve productivity, collaboration, and security.",
        list: [
          "Productivity tools including Word, Excel, PowerPoint and Outlook.",
          "Online meetings, cloud storage, and personalized email.",
          "Optimized for mobile devices, smartphones, and tablets.",
        ],
      },
      button: "View Plans",
    },
    {
      img: feat2,
      plan: "WordPress Hosting",
      heading: "Built for speed and security",
      description: {
        fontSize: "16",
        text: "Get the most from your WordPress site with hosting designed to perform. From automated updates and backups to industry-leading load times, this is WordPress how it was meant to be.",
      },
      button: "See Plans",
    },
    {
      img: feat3,
      plan: "GoDaddy Pro Program",
      heading: "Free tools for designers and developers.",
      description: {
        fontSize: "18",
        text: "Save hours with bulk WordPress updates and automated backups, manage multiple clients from a single dashboard, get exclusive members-only discounts and more — all for free.",
      },
      button: "Learn More",
      videoButton: true,
    },
    {
      img: feat4,
      plan: "GoDaddy Reseller Program",
      heading: "Start your business with our products.",
      description: {
        fontSize: "18",
        text: "Our Reseller Program lets you open your own online business in a matter of hours. You choose which GoDaddy products you want to sell — and for how much — and we provide the rest, from the web store to payment processing.",
      },
      button: "Choose Your Plan",
    },
  ];

  return (
    <section className="px-[4vw] py-4">
      {features.map((feature) => (
        <Feature key={feature.plan} feature={feature} />
      ))}
    </section>
  );
};

export default Features;
