/* eslint-disable react/prop-types */
import { useState } from "react";

const MainLink = ({ title, links }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-6 sm:py-5">
      <div
        onClick={() => setOpen(!open)}
        className="max-sm:flex max-sm:items-center max-sm:justify-between max-sm:cursor-pointer"
      >
        <div className="text-base font-semibold max-sm:mb-2 sm:mb-5">
          {title}
        </div>
        <div className="sm:hidden">{open ? "-" : "+"}</div>
      </div>
      <div className={open ? "" : "max-sm:hidden"}>
        {links.map((link) => {
          return (
            <a
              key={link}
              className="text-xs max-xl:mb-7 xl:mb-5 font-bold block text-[#b8c0c3]"
            >
              {link}
            </a>
          );
        })}
      </div>
    </div>
  );
};

const MainLinks = () => {
  const links = [
    {
      title: "About GoDaddy",
      links: [
        "About Us",
        "Annual Returns",
        "Careers",
        "Contact Us",
        "Corporate Social Responsibility",
        "GoDaddy Blog",
        "Investor Relation",
        "Legal",
        "Newsroom",
        "Trust Center",
      ],
    },
    {
      title: "Support",
      links: ["Product Support", "Community", "Report Abuse", "Resources"],
    },
    {
      title: "Resources",
      links: [
        "Webmail",
        "WHOIS",
        "ICANN Confirmation",
        "Designers & Developers",
        "Redeem Code",
        "Product Catalog",
        "Customer Testimonials",
        "Business Name Generator",
      ],
    },
    {
      title: "Partner Program",
      links: ["Affiliates", "Reseller Programs", "GoDaddy Pro"],
    },
    {
      title: "Account",
      links: ["My Products", "Renewals & Billing", "Create Account"],
    },
    {
      title: "Shopping",
      links: [
        "Buy a Domain",
        "Websites",
        "WordPress",
        "Hosting",
        "Web Security",
        "Email & Office",
      ],
    },
  ];

  return (
    <div className="max-sm:mx-4 sm:mx-8 sm:grid sm:grid-cols-2 xl:grid-cols-6 gap-12">
      {links.map((link) => {
        return (
          <MainLink key={link.title} title={link.title} links={link.links} />
        );
      })}
    </div>
  );
};

export default MainLinks;
