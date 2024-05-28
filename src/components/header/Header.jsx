/* eslint-disable react/prop-types */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faQuestion,
  faUser,
  faCartShopping,
  faMagnifyingGlass,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

import dotCo from "../../assets/img-logo-tld-bar-gray_co.webp";

import Sidebar from "./sidebar/Sidebar";
import Hero from "./hero/Hero";

const SubNavDesktop = () => {
  return (
    <div className="!h-auto !w-auto font-semibold *:m-1 *:py-2.5 *:px-3 *:rounded-lg hover:*:bg-neutral-600 max-xl:hidden">
      <a href="#">Domains</a>
      <a href="#">Website</a>
      <a href="#" className="border-r border-neutral-600">
        Hosting and Security
      </a>
      <a href="#">Email</a>
      <a href="#" className="border-l border-neutral-600">
        Pricing
      </a>
    </div>
  );
};

const SignIn = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={
        "relative max-xl:hidden " +
        (open ? "bg-white text-black hover:!bg-white hover:text-black" : null)
      }
    >
      <button onClick={() => setOpen(!open)}>
        Sign In <FontAwesomeIcon icon={faChevronDown} />
      </button>

      {open ? (
        <>
          <div className="!h-4 w-4 bg-white rotate-45 absolute -bottom-5 right-0 z-20" />
          <div className="absolute bg-white !h-fit w-[350px] px-5 text-base font-medium top-[125%] -right-6 border border-stone-200 shadow-md rounded  *:h-max [&_a]:text-teal-700 *:*:my-4 z-10 divide-y ">
            <div className="pb-4">
              <h3 className="font-semibold">Registered Users</h3>
              <p>Have an account? Sign in now.</p>
              <a href="#" className="underline hover:no-underline">
                Sign In
              </a>
            </div>
            <div className="pb-4">
              <h3 className="font-semibold">New Customer</h3>
              <p>New to GoDaddy? Create an account to get started today.</p>
              <a href="#" className="underline hover:no-underline">
                Create an account
              </a>
            </div>
            <div>
              <h3 className="uppercase text-stone-600 text-xs font-semibold tracking-wider">
                Inbox Links
              </h3>
              <a href="#" className="block">
                Sign in to Office 365 Email
              </a>
              <a href="#" className="block">
                Sign in to GoDaddy Webmail
              </a>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

const Nav = ({ setOpen }) => {
  return (
    <div
      role="navigation"
      aria-label="Main"
      id="nav"
      className="max-xl:px-4 xl:px-[3.5vw] md:px-8 h-16 flex justify-between items-center bg-black text-white max-sm:mt-0.5"
    >
      <div>
        <div onClick={() => setOpen(true)} className="xl:!hidden">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="relative xl:!ml-0 xl:scale-90">
          {/* Logo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="logo desktop hidden md:block"
            viewBox="0 0 166 32"
          >
            <path
              className="mobile desktop"
              d="M30.824 1.453c-3.713-2.316-8.603-1.77-12.963.972-4.347-2.74-9.239-3.288-12.948-.972C-.955 5.12-1.667 14.564 3.32 22.546c3.677 5.887 9.428 9.335 14.548 9.271 5.119.064 10.87-3.384 14.547-9.27C37.4 14.563 36.692 5.12 30.824 1.452zM6.02 20.863a19.112 19.112 0 01-2.303-5.273 15.067 15.067 0 01-.5-4.97C3.44 7.673 4.64 5.375 6.598 4.15c1.957-1.224 4.544-1.295 7.299-.203.419.169.829.358 1.228.568a22.496 22.496 0 00-3.956 4.754C8.14 14.116 7.215 19.511 8.272 23.81a19.723 19.723 0 01-2.253-2.947zm26.003-5.273a19.158 19.158 0 01-2.302 5.272 19.733 19.733 0 01-2.254 2.954c.946-3.855.303-8.576-2.014-13.005a.583.583 0 00-.837-.228l-7.225 4.515a.59.59 0 00-.188.813l1.06 1.695a.59.59 0 00.814.188l4.683-2.925c.151.454.303.901.416 1.363.442 1.617.611 3.297.5 4.97-.223 2.95-1.424 5.247-3.38 6.471a6.607 6.607 0 01-3.35.97h-.15a6.599 6.599 0 01-3.35-.97c-1.958-1.224-3.159-3.521-3.381-6.472-.11-1.672.058-3.352.5-4.969a19.671 19.671 0 016.03-9.65 15.108 15.108 0 014.241-2.629c2.748-1.092 5.34-1.02 7.298.203 1.958 1.224 3.157 3.522 3.38 6.47a15.105 15.105 0 01-.49 4.964z"
            ></path>
            <path
              className="desktop"
              d="M74.065 12.892c-4.06 0-7.34 3.169-7.34 7.2 0 4.004 3.28 7.121 7.34 7.121 4.086 0 7.366-3.112 7.366-7.12 0-4.03-3.275-7.2-7.366-7.2zm0 10.557c-1.871 0-3.295-1.513-3.295-3.384s1.424-3.407 3.295-3.407c1.898 0 3.322 1.54 3.322 3.412 0 1.87-1.424 3.385-3.322 3.385v-.006zM90.583 7.362h-7.468a.6.6 0 00-.61.612v18.208a.605.605 0 00.61.648h7.468c5.977 0 10.13-3.975 10.13-9.758 0-5.818-4.153-9.71-10.13-9.71zm.177 15.622h-4.087V11.198h4.087c3.308 0 5.588 2.474 5.588 5.866 0 3.336-2.28 5.92-5.588 5.92zm24.82-9.7h-2.809a.633.633 0 00-.582.612v.833c-.64-1.057-2.085-1.835-3.884-1.835-3.503 0-6.783 2.751-6.783 7.145 0 4.37 3.251 7.171 6.755 7.171 1.806 0 3.28-.777 3.92-1.834v.861a.587.587 0 00.582.585h2.808a.571.571 0 00.584-.585V13.896a.594.594 0 00-.592-.612zm-6.533 10.196c-1.86 0-3.256-1.43-3.256-3.412s1.397-3.41 3.256-3.41c1.86 0 3.257 1.426 3.257 3.408 0 1.983-1.395 3.412-3.257 3.412v.002zm22.294-16.118h-2.808a.592.592 0 00-.61.584v6.728c-.648-1.002-2.114-1.78-3.948-1.78-3.476 0-6.7 2.751-6.7 7.145 0 4.37 3.252 7.171 6.755 7.171 1.806 0 3.17-.777 3.92-1.834v.861c0 .322.261.583.583.585h2.808a.57.57 0 00.584-.585V7.95a.57.57 0 00-.584-.588zm-6.532 16.152c-1.852 0-3.237-1.444-3.237-3.448 0-2.003 1.39-3.447 3.237-3.447 1.846 0 3.237 1.444 3.237 3.447 0 2.004-1.384 3.448-3.237 3.448zm22.29-16.152h-2.803a.594.594 0 00-.612.584v6.728c-.64-1.002-2.114-1.78-3.947-1.78-3.477 0-6.7 2.751-6.7 7.145 0 4.37 3.253 7.171 6.755 7.171 1.807 0 3.168-.777 3.92-1.834v.861a.587.587 0 00.584.585h2.803a.568.568 0 00.582-.585V7.95a.568.568 0 00-.582-.588zm-6.532 16.152c-1.853 0-3.237-1.444-3.237-3.448 0-2.003 1.39-3.447 3.237-3.447 1.846 0 3.237 1.444 3.237 3.447 0 2.004-1.38 3.448-3.232 3.448h-.005zm21.906-9.283l-4.19 14.37c-.809 2.556-2.613 4.086-5.421 4.086-1.277 0-2.44-.261-3.35-.782-.531-.303-.971-.58-.971-1.023 0-.275.089-.417.25-.675l.832-1.246c.235-.348.408-.461.66-.461a.96.96 0 01.554.192c.523.339 1.008.63 1.748.63.864 0 1.524-.277 1.88-1.306l.36-1.193h-1.696c-.418 0-.648-.249-.751-.584l-3.75-12.008c-.14-.473-.011-.946.683-.946h2.954c.36 0 .613.123.771.64l2.77 9.67 2.589-9.67c.082-.334.306-.64.75-.64h2.802c.552-.001.719.387.526.946zm-96.806 4.274v7.676a.625.625 0 01-.635.634h-2.317a.623.623 0 01-.634-.634v-2.015c-1.472 1.858-4.03 3.028-6.924 3.028-5.434 0-9.681-4.088-9.681-9.908 0-6.048 4.585-10.217 10.377-10.217 4.276 0 7.694 1.839 9.212 5.537a.843.843 0 01.07.309c0 .175-.116.307-.486.435l-2.706 1.042a.694.694 0 01-.511.009.783.783 0 01-.324-.371c-.971-1.847-2.7-3.1-5.36-3.1-3.45 0-5.922 2.694-5.922 6.188 0 3.387 2.104 6.172 6.02 6.172 2.06 0 3.703-.97 4.469-2.037H57.87a.625.625 0 01-.634-.635v-2.086a.625.625 0 01.634-.634h7.161a.604.604 0 01.635.607z"
            ></path>
            <path
              className="desktop"
              d="M162.55 10.442v-.186c0-.013.004-.026.012-.036a.052.052 0 01.034-.013h1.183c.013 0 .025.005.034.013.009.01.013.023.013.036v.186a.052.052 0 01-.013.034.047.047 0 01-.034.013h-.432v1.167a.05.05 0 01-.048.048h-.224a.044.044 0 01-.032-.014.047.047 0 01-.015-.034v-1.167h-.432a.044.044 0 01-.047-.047zm2.068-.193l.323.75.324-.75a.066.066 0 01.026-.032.087.087 0 01.044-.01h.375a.044.044 0 01.047.046v1.404a.044.044 0 01-.045.047h-.21a.047.047 0 01-.035-.013.042.042 0 01-.013-.034v-1.06l-.348.77a.084.084 0 01-.026.038.08.08 0 01-.043.01h-.172a.078.078 0 01-.042-.01.073.073 0 01-.026-.037l-.346-.77v1.06a.052.052 0 01-.013.033.052.052 0 01-.032.013h-.216a.042.042 0 01-.03-.013.042.042 0 01-.013-.034v-1.404a.044.044 0 01.047-.046h.364c.014 0 .029.003.042.01.009.009.015.02.018.032z"
            ></path>
            <path
              className="mobile"
              d="M27.889 30.386v-.21c0-.015.005-.03.015-.04a.048.048 0 01.038-.015h1.342c.014-.001.028.004.038.015.01.01.016.025.015.04v.21a.051.051 0 01-.015.04.048.048 0 01-.038.014h-.49v1.322a.05.05 0 01-.017.04.051.051 0 01-.038.017h-.253a.055.055 0 01-.038-.017.06.06 0 01-.015-.04V30.44h-.49a.048.048 0 01-.039-.015.051.051 0 01-.015-.04zm2.345-.217l.374.848.375-.848a.073.073 0 01.03-.036.08.08 0 01.05-.012h.4a.051.051 0 01.053.053v1.592a.056.056 0 01-.013.037.05.05 0 01-.037.016h-.24a.055.055 0 01-.038-.016.056.056 0 01-.015-.037v-1.203l-.393.874a.09.09 0 01-.03.04.086.086 0 01-.05.013h-.194a.085.085 0 01-.048-.012.09.09 0 01-.03-.041l-.393-.874v1.203a.05.05 0 01-.015.037.053.053 0 01-.036.016h-.243a.05.05 0 01-.036-.016.056.056 0 01-.015-.037v-1.592a.05.05 0 01.017-.038.047.047 0 01.036-.015h.413a.083.083 0 01.049.012.071.071 0 01.029.036z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="logo mobile  md:hidden"
            viewBox="0 0 166 32"
          >
            <path
              className="mobile desktop"
              d="M30.824 1.453c-3.713-2.316-8.603-1.77-12.963.972-4.347-2.74-9.239-3.288-12.948-.972C-.955 5.12-1.667 14.564 3.32 22.546c3.677 5.887 9.428 9.335 14.548 9.271 5.119.064 10.87-3.384 14.547-9.27C37.4 14.563 36.692 5.12 30.824 1.452zM6.02 20.863a19.112 19.112 0 01-2.303-5.273 15.067 15.067 0 01-.5-4.97C3.44 7.673 4.64 5.375 6.598 4.15c1.957-1.224 4.544-1.295 7.299-.203.419.169.829.358 1.228.568a22.496 22.496 0 00-3.956 4.754C8.14 14.116 7.215 19.511 8.272 23.81a19.723 19.723 0 01-2.253-2.947zm26.003-5.273a19.158 19.158 0 01-2.302 5.272 19.733 19.733 0 01-2.254 2.954c.946-3.855.303-8.576-2.014-13.005a.583.583 0 00-.837-.228l-7.225 4.515a.59.59 0 00-.188.813l1.06 1.695a.59.59 0 00.814.188l4.683-2.925c.151.454.303.901.416 1.363.442 1.617.611 3.297.5 4.97-.223 2.95-1.424 5.247-3.38 6.471a6.607 6.607 0 01-3.35.97h-.15a6.599 6.599 0 01-3.35-.97c-1.958-1.224-3.159-3.521-3.381-6.472-.11-1.672.058-3.352.5-4.969a19.671 19.671 0 016.03-9.65 15.108 15.108 0 014.241-2.629c2.748-1.092 5.34-1.02 7.298.203 1.958 1.224 3.157 3.522 3.38 6.47a15.105 15.105 0 01-.49 4.964z"
            ></path>

            <path
              className="mobile"
              d="M27.889 30.386v-.21c0-.015.005-.03.015-.04a.048.048 0 01.038-.015h1.342c.014-.001.028.004.038.015.01.01.016.025.015.04v.21a.051.051 0 01-.015.04.048.048 0 01-.038.014h-.49v1.322a.05.05 0 01-.017.04.051.051 0 01-.038.017h-.253a.055.055 0 01-.038-.017.06.06 0 01-.015-.04V30.44h-.49a.048.048 0 01-.039-.015.051.051 0 01-.015-.04zm2.345-.217l.374.848.375-.848a.073.073 0 01.03-.036.08.08 0 01.05-.012h.4a.051.051 0 01.053.053v1.592a.056.056 0 01-.013.037.05.05 0 01-.037.016h-.24a.055.055 0 01-.038-.016.056.056 0 01-.015-.037v-1.203l-.393.874a.09.09 0 01-.03.04.086.086 0 01-.05.013h-.194a.085.085 0 01-.048-.012.09.09 0 01-.03-.041l-.393-.874v1.203a.05.05 0 01-.015.037.053.053 0 01-.036.016h-.243a.05.05 0 01-.036-.016.056.056 0 01-.015-.037v-1.592a.05.05 0 01.017-.038.047.047 0 01.036-.015h.413a.083.083 0 01.049.012.071.071 0 01.029.036z"
            ></path>
          </svg>
          <span className="absolute top-full right-0 text-xs max-sm:hidden">
            India
          </span>
        </div>
        <SubNavDesktop />
      </div>

      <div className="xl:text-[13px] xl:*:!ml-6 font-bold *:py-2 *:px-3 *:rounded-lg hover:*:bg-neutral-600">
        <div>
          <a href="#">
            <span className="max-xl:hidden">Contact Us</span>
            <FontAwesomeIcon icon={faQuestion} className="xl:hidden" />
          </a>
        </div>
        <div>
          <a href="#">
            <span className="max-xl:hidden">Help</span>
            <FontAwesomeIcon icon={faUser} className="xl:hidden" />
          </a>
        </div>
        <SignIn />
        <div>
          <a href="#">
            <FontAwesomeIcon icon={faCartShopping} />
          </a>
        </div>
      </div>
    </div>
  );
};

const Search = () => {
  return (
    <form className="max-xl:mx-4 md:max-xl:mx-8 max-xl:my-6 max-xl:h-14 xl:h-[5.4rem] max-lg:bg-teal-700 border border-stone-300 focus-visible:outline-blue-500 max-xl:rounded-lg xl:rounded-xl overflow-hidden shadow-temp1 xl:relative xl:grow">
      <input
        type="text"
        placeholder="Type the domain you want"
        className="px-5  max-xl:w-[calc(100%-3.2rem)] w-full h-full focus-visible:outline-none max-xl:placeholder:text-base xl:desktop-search-input"
      />
      {/* Search icon */}
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="text-neutral-500 text-lg absolute top-1/2 -translate-y-1/2 left-6 max-xl:!hidden"
      />
      <button className="inline-block max-xl:w-12 h-12 xl:desktop-search-button">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-white text-lg xl:hidden"
        />
        <span className="max-xl:hidden">Search Domains</span>
      </button>
    </form>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Nav setOpen={setOpen} />
      <Sidebar open={open} setOpen={setOpen} />
      <div className="xl:search-container">
        <Search />
        <a href="#" className='max-xl:hidden flex items-center gap-4 p-4 rounded-xl border border-transparent transition-colors hover:bg-white hover:border-neutral-400'>
          <img src={dotCo} alt="link_icon" className='w-14 h-14' />
          <div className="max-xl:hidden">
            <div className='text-base font-semibold'>₹ 999.oo/1st yr.</div>
            <div className='text-xs font-thin tracking-wider'>Get recognized with .co</div>
          </div>
        </a>
      </div>
      <Hero />
    </>
  );
};

export default Header;
