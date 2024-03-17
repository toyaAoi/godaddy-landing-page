/* eslint-disable react/prop-types */
import {
  faChevronUp,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import guide from "../../assets/Guide.webp";
import guideLogo from "../../assets/gd-guides-logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Question = ({ question, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-6 border-t border-t-neutral-300">
      <div onClick={() => setOpen(!open)} className="flex gap-3 cursor-pointer">
        <h3 className="font-semibold">{question}</h3>
        <button className={" h-4 text-base"}>
          <FontAwesomeIcon
            icon={faChevronUp}
            className={"transition-transform" + (!open ? " -rotate-180" : "")}
          />
        </button>
      </div>
      <div className={"mt-4 text-base" + (open ? "" : " hidden")}>
        {children}
      </div>
    </div>
  );
};

const Questions = () => {
  return (
    <div className="p-6 mt-8 [&_a]:underline">
      <Question
        question={"How does GoDaddy help small business owners succeed?"}
      >
        <p>
          GoDaddy offers more than just a platform to build your website, we
          offer everything you need to create an effective, memorable online
          presence. Already have a site? We offer hosting plans that will keep
          it fast, secure and online. Our professional email helps you build a
          professional image, while our online marketing tools empower
          entrepreneurs to get online with an SEO-friendly website. GoDaddy is
          an all-in-one solution provider to get your idea online, backed with
          expert, personalized support from GoDaddy Guides.
        </p>
      </Question>

      <Question question={"Why do I need a website for my business?"}>
        <div>
          Even small local businesses that only serve their hometown need a
          site. That&rsquo;s because the web is te first place people go when
          looking for a product or service. A website helps every business:
          <ul className="list-disc ml-5 mb-3.5 *:mt-3">
            <li>Promote and sell their products and services</li>
            <li>Connect with new customers (and keep existing customers)</li>
            <li>Build credibility</li>
            <li>Compete with bigger businesses</li>
            <li>
              Control their brand and keep their marketing fresh and current
            </li>
          </ul>
        </div>
        <p>
          Best of all, a website is much easier and more affordable than you
          might think. GoDaddy offers a complete selection of online tools for
          building websites, along with hosting, email and marketing options to
          grow their business on the web.
        </p>
      </Question>

      <Question question={"Why do I need a professional email?"}>
        <div>
          There are a lot of reasons to switch from you free email to a
          domain-based email, but here are the top 3:
          <ol className="list-decimal ml-10 mb-3.5 *:mt-3">
            <li>
              Customers are much more likely to trust a professional address
              like lily@lilybikes.com <br /> than <br />{" "}
              lilybikestexas84@notmaiil.com{" "}
            </li>
            <li>
              <a href="#">Professional Email</a> provides world-class security
              with industry-leading span and virus filters.
            </li>
            <li>
              Personalized email addresses promote your business more
              effectively. Every time you send an email, you are giving your web
              address to customers and prospects, encouraging them to visit your
              website.
            </li>
          </ol>
        </div>
      </Question>

      <Question question={"Why get a domain name from GoDaddy?"}>
        <p>
          GoDaddy is the world&rsquo;s largest and trusted domain registrar that
          empowers people like you with creative ideas to succeed online.{" "}
          <a href="">Buying a domain name</a> is easy with our domain search
          tool and domain name generator tools you can find the perfect website
          address for your business.
        </p>
      </Question>

      <Question question={"Why use GoDaddy Website Builder?"}>
        <p>
          Because it&rsquo;s a fast, simple way to create a website that you —
          and your customers — will love. Simply type in your idea or industry
          and GoDaddy <a href="#">Website Builder</a> will pull up a number of
          professionally designed, ready-to-launch templates. From there, just
          add your own text and images and you&rsquo;re good to go.
        </p>
      </Question>

      <Question question={"What makes GoDaddy Web Hosting the world leader?"}>
        <p>
          With nearly 20 years in the industry, we have the experience, the
          technology and the hosting experts to help web designers, developers,
          bloggers and online businesses create and maintain their online
          presence. Our secure <a href="">web hosting platform</a>, complete
          with cPanel, offers a 99.9% uptime guarantee*** and award-winning
          support, which has helped nearly 20+ million customers get online.
        </p>
      </Question>

      <Question question={"Why choose GoDaddy for WordPress?"}>
        <p>
          GoDaddy offers reliable and affordable{" "}
          <a href="#">WordPress hosting</a> and{" "}
          <a href="#">WooCommerce hosting</a> plans, one-click installs and the
          latest version so you have the most recent features available for your
          site. Your website content is managed from one place; you have a
          wealth of themes and add-ons giving you limitless options to succeed.
        </p>
      </Question>

      <Question
        question={
          "Why should I transfer my domain, website or web hosting to GoDaddy?"
        }
      >
        <p>
          There are a few different reasons. Our award-winning support is always
          high on the list of why people move their presence to GoDaddy. Of
          course, our prices — including a free 1-year extension on many domain
          transfers — is another popular reason. And if you already have one or
          more of our products, transferring your domain, website or hosting to
          us lets you consolidate your web presence with one provider so
          it&rsquo;s easier to manage.
        </p>
      </Question>

      <Question question={"Why use the GoDaddy Logo Maker?"}>
        <p>
          With the <a href="#">GoDaddy Logo Maker</a> it&rsquo;s easy to make a
          custom logo that&rsquo;ll help define your brand&rsquo;s personality
          and transform your business. From logomarks to logotypes, there are
          hundreds of templates to choose from. Or you can design your own in
          just minutes. No design skills needed.
        </p>
      </Question>
    </div>
  );
};

const Guide = () => {
  return (
    <section className="">
      {/* Local Guide */}
      <div className="mt-12">
        <figure className="relative h-80">
          <img
            src={guide}
            alt="local guide image"
            className="h-full object-cover"
          />
          <figcaption className="p-4 absolute top-2 left-0 text-sm ">
            <span className="font-medium">Soraiya J.</span>
            <br />
            <span className="font-thin text-neutral-900">GoDaddy Guide</span>
          </figcaption>
        </figure>
      </div>

      {/* Ask a question */}
      <div className="p-8">
        <div className="h-6">
          <img src={guideLogo} alt="godaddy guide logo" className="h-full" />
        </div>
        <div className="mt-8 text-base">
          <h2 className="text-[32px] font-abrilfatface leading-10">
            Why go with GoDaddy?
          </h2>
          <p className="mt-4">
            Because we know that even the best technology is only as good as the
            people behind it. That&rsquo;s why we offer expert phone support,
            plus a lot more.
          </p>
          <p className="mt-4">
            Call our technical support team at 040-67607600.
          </p>
        </div>
        <form className="h-[42px] mt-8">
          <input
            type="text"
            placeholder="Type a question"
            className="h-full w-[calc(100%-42px)] border-2 border-neutral-600 pl-4 placeholder:text-base placeholder:text-neutral-600 focus-visible:outline-none focus-visible:border-sky-600"
          />
          <button className="w-[42px] aspect-square bg-black text-white text-base">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
        <div className="py-4 text-base font-semibold *:inline-block *:underline *:decoration-transparent">
          <a
            href="#"
            className="mr-4 hover:decoration-black hover:scale-[1.02]"
          >
            View How-To Articles
          </a>
          <a href="#" className="hover:decoration-black hover:scale-[1.02]">
            Read Our Blog
          </a>
        </div>
      </div>

      {/* Asked Questions */}
      <div className="p-8">
        <div className="text-center font-semibold">
          <h1 className="text-[32px] tracking-tight leading-10">
            Millions of customers rely on our domains and web hosting to get
            their ideas online.
          </h1>
          <h2 className="text-[29px] mt-4 leading-9">
            Frequently Asked Questions
          </h2>
        </div>

        <Questions />
      </div>
    </section>
  );
};

export default Guide;
