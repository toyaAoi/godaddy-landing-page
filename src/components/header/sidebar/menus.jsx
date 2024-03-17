/* eslint-disable react/prop-types */
import {
  faArrowRight,
  faArrowRightArrowLeft,
  faBolt,
  faBullhorn,
  faCartShopping,
  faClone,
  faDatabase,
  faGlobe,
  faHandHoldingDollar,
  faHandPointer,
  faHardDrive,
  faHatCowboySide,
  faImage,
  faList,
  faLock,
  faMagnifyingGlass,
  faPager,
  faQuestion,
  faShieldVirus,
  faStore,
  faTag,
  faToolbox,
  faUser,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";

import {
  Wrapper,
  MainLink,
  BottomLink,
  List,
  BottomPoster,
} from "./utilities/utils";

import posterDomain from "./../../../assets/img-meganav-domains-2.webp";
import posterWebhost from "./../../../assets/img-meganav-ecommerce-hosting-jpg.webp";
import posterSecurity from "./../../../assets/in-nav-security.webp";
import posterMarketing from "./../../../assets/Image-Grow-Desktop.webp";

const MainMenu = ({ setOpenedSection }) => {
  const mainLinks = [
    {
      title: "Domains",
      arrow: true,
    },
    {
      title: "Websites and Hosting",
      arrow: true,
    },
    {
      title: "Email",
      arrow: false,
    },
    {
      title: "Security",
      arrow: true,
    },
    {
      title: "Marketing",
      arrow: true,
    },
    {
      title: "Pricing",
      arrow: false,
    },
  ];

  const bottomLinks = [
    {
      icon: faQuestion,
      title: "Help Center",
    },
    {
      icon: faUser,
      title: "Account",
    },
    {
      icon: faCartShopping,
      title: "Basket",
    },
  ];

  return (
    <Wrapper>
      {mainLinks.map(({ title, arrow }) => (
        <MainLink
          key={title}
          title={title}
          arrow={arrow}
          setOpenedSection={setOpenedSection}
        />
      ))}

      <div className="h-[136px]" />

      <div className="absolute bottom-0 text-base w-full">
        {bottomLinks.map(({ icon, title }) => (
          <BottomLink key={title} icon={icon} title={title} />
        ))}
      </div>
    </Wrapper>
  );
};

const Domain = ({ openedSection, setOpenedSection }) => {
  const links = [
    [
      {
        icon: faMagnifyingGlass,
        title: "Search for Domain Names",
      },
      {
        icon: faArrowRightArrowLeft,
        title: "Transfer Domain Names",
      },
      {
        icon: faList,
        title: "Browse Domain Name Options",
      },
    ],
    [
      {
        icon: faHatCowboySide,
        title: "Auctions for Domain Names",
      },
      {
        icon: faTag,
        title: "Appraise Domain Name Values",
      },
      {
        icon: faHandHoldingDollar,
        title: "Investing in Domain Names",
      },
    ],
    [
      {
        icon: faHandPointer,
        title: "Generate Domain Names",
      },
      {
        icon: faGlobe,
        title: "Find a Domain Owner (WHOIS)",
      },
      {
        icon: faUserTie,
        title: "Domain Broker Service",
      },
    ],
  ];

  return (
    <Wrapper openedSection={openedSection} setOpenedSection={setOpenedSection}>
      <List heading="Find a Domain" list={links[0]} />
      <List heading="Auctions for Domains" list={links[1]} />
      <List heading="Domain Tools and Services" list={links[2]} />
      <div className="h-[260px]" />
      <BottomPoster image={posterDomain} title="Buy a Domain You Want" />
    </Wrapper>
  );
};

const WebHost = ({ openedSection, setOpenedSection }) => {
  const links = [
    [
      {
        icon: faPager,
        title: "Website Builder",
        freeTrial: true,
      },
      {
        icon: faStore,
        title: "Online Store",
      },
      {
        icon: faToolbox,
        title: "Tools for Web Professionals",
      },
      {
        icon: faArrowRight,
        title: "All Website Options",
      },
    ],
    [
      {
        icon: faHardDrive,
        title: "Web Hosting",
      },
      {
        icon: faWordpress,
        title: "WordPress Hosting",
      },
      {
        icon: faDatabase,
        title: "VPS Hosting",
      },
      {
        icon: faArrowRight,
        title: "All Hosting Options",
      },
    ],
  ];

  return (
    <Wrapper openedSection={openedSection} setOpenedSection={setOpenedSection}>
      <div className={open ? "" : "hidden"}>
        <List heading="Websites" list={links[0]} />
        <List heading="Hosting" list={links[1]} />
        <div className="h-[280px]" />
        <BottomPoster
          image={posterWebhost}
          title="Sell Online With WordPress Ecommerce Hosting"
        />
      </div>
    </Wrapper>
  );
};

const Security = ({ openedSection, setOpenedSection }) => {
  const links = [
    [
      {
        icon: faLock,
        title: "DV SSL Cirtificate",
      },
      {
        icon: faLock,
        title: "EV SSL Cirtificate",
      },
      {
        icon: faLock,
        title: "SAN SSL Cirtificate",
      },
      {
        icon: faLock,
        title: "Wildcard SSL Cirtificate",
      },
      {
        icon: faLock,
        title: "Managed SSL Cirtificate",
      },
      {
        icon: faArrowRight,
        title: "All SSL Cirtificate Options",
      },
    ],
    [
      {
        icon: faClone,
        title: "Backups",
      },
      {
        icon: faShieldVirus,
        title: "Complete Website Security",
      },
      {
        icon: faArrowRight,
        title: "All Web Security Options",
      },
    ],
  ];

  return (
    <Wrapper openedSection={openedSection} setOpenedSection={setOpenedSection}>
      <div className={open ? "" : "hidden"}>
        <List heading="SSL Cirtificates" list={links[0]} />
        <List heading="Web Security" list={links[1]} />
        <div className="h-[280px]" />
        <BottomPoster
          image={posterSecurity}
          title="Get help selecting the right type of SSL Cirtificate"
        />
      </div>
    </Wrapper>
  );
};

const Marketing = ({ openedSection, setOpenedSection }) => {
  const links = [
    [
      {
        icon: faBullhorn,
        title: "Digital Marketing Suite",
        freeTrial: true,
      },
    ],
    [
      {
        icon: faImage,
        title: "Content & Photo Creator",
      },
      {
        icon: faBolt,
        title: "Free Logo Maker",
      },
    ],
  ];

  return (
    <Wrapper openedSection={openedSection} setOpenedSection={setOpenedSection}>
      <List heading="Communication Tools" list={links[0]} />
      <List heading="Content Creation Tools" list={links[1]} />
      <div className="h-[280px]" />

      <BottomPoster
        image={posterMarketing}
        title="Learn to Grow Your Business"
      />
    </Wrapper>
  );
};

export { MainMenu, Domain, WebHost, Security, Marketing };
