import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import logo from '../../images/growth-2.png';
import { Transition } from "@headlessui/react";
import { Link } from 'gatsby';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sticky top-0">
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:pl-20">
          <div className="flex items-center mx-auto justify-between h-16 lg:px-20 md:px-10">
            <div className="flex items-center">
              <div className="flex-shrink-0 ">
                <img
                  className="h-10 w-10"
                  src={logo}
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block px-48">
                <div className="ml-10 flex space-x-8">
                  <AnchorLink
                    href="#what-we-offer"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Программа
                  </AnchorLink>

                  <AnchorLink
                    href="#program"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Процесс
                  </AnchorLink>

                  <AnchorLink
                    href="#mentors"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Команда
                  </AnchorLink>

                  <AnchorLink
                    href="#value"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Результаты
                  </AnchorLink>

                  <AnchorLink
                    href="#faq"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    FAQ
                  </AnchorLink>
                </div>
              </div>
              <div className="invisible md:visible">
                  <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfEXdTmGSKaBnU_W-K95pV4xw_1Rca0ihzixFdbhDxYFCptqg/viewform?usp=sf_link">
                    <Button size="sm">Подать заявку</Button>
                  </Link>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <AnchorLink
                  href="#what-we-offer"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Программа
                </AnchorLink>

                <AnchorLink
                  href="#program"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Процесс
                </AnchorLink>

                <AnchorLink
                  href="#mentors"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Команда
                </AnchorLink>

                <AnchorLink
                  href="#value"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Результаты
                </AnchorLink>

                <AnchorLink
                  href="#faq"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  FAQ
                </AnchorLink>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

  // <header className="font-display sticky top-0 bg-white bg-opacity-10 shadow">
  //   <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
  //     <div className="flex items-center text-2xl">
  //       <div className="w-24">
  //         {/*<img src={logo} alt="Logo" />*/}
  //         <div className="text-primary font-bold font-display text-sm text-center">
  //           YCGI
  //         </div>
  //       </div>
  //     </div>
  //     <div className="flex mt-4 sm:mt-0">
  //       <AnchorLink className="px-4" href="#what-we-offer">
  //         Программа
  //       </AnchorLink>
  //       <AnchorLink className="px-4" href="#program">
  //         Процесс
  //       </AnchorLink>
  //       <AnchorLink className="px-4" href="#mentors">
  //         Ментора
  //       </AnchorLink>
  //       <AnchorLink className="px-4" href="#value">
  //         Результаты
  //       </AnchorLink>
  //     </div>
  //     <div className="hidden md:block">
  //       <Button className="text-sm">Подать заявку</Button>
  //     </div>
  //   </div>
  // </header>
// );

export default Header;
