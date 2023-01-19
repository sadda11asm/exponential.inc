import React, { useEffect } from 'react';



import { useVisibility } from '../utils';
import { Link } from 'gatsby';
import Layout from '../components/layout/Layout'
import ButtonLight from '../components/ButtonLight';

import elipsis from '../images/elipsis.png'
import pricebackground from '../images/price_background.png'
import dollar_icon from '../images/dollar_icon.png'
import p from '../images/p.png';

const Price = () => {
  useEffect(() => {
    document.title = 'FAQs';
  }, []);

  return (
    <Layout>
      <div className=" py-10 lg:px-40 text-center flow-root" style={{ backgroundColor: 'white' }}>
        <h2 className="text-5xl bold">Price</h2>
        <img className="z-10 invisible lg:visible absolute mt-20 right-0 lg:w-1/12" src={dollar_icon} alt="Dollar Icon" />
        <h3 className="font-medium">Payment is required only in the case of a succesful offer from a company.</h3>
        <div class="relative grid overflow-hidden place-items-center py-20 rounded-lg">
          <img class="object-cover lg:w-4/12 w-6/12" src={pricebackground} alt="Price Background" />

          <div class="absolute top-10 left-10">
            <h4 class="mb-3 lg:text-5xl text-3xl text-mainblue font-semibold tracking-tight">15-20%</h4>
            <p>from your job offer</p>
          </div>
        </div>
      </div>
      <div className="md:w-full w-11/12 lg:text-md lg:pt-20 lg:py-0 lg:pl-20 md:text-sm text-xs sm:text-xs md:py-20 py-5 px-6 bg-mainblue text-white container mx-10 my-10 mx-auto md:my-20 rounded-big text-left">
        <div className="flow-root">
          <h3 className="sm:text-2xl md:text-5xl text-sm font-bold spacing-xl">Do you want an internship at FAANG?</h3>
          <p className="mt-3 md:text-xl text-xs font-normal sm:text-l sm:max-w-sm">
            Join Exponential and become one of the 30 participants of our exclusive program!
          </p>

          <div className="float-left">
            <p className="mt-8 ">
              <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfEXdTmGSKaBnU_W-K95pV4xw_1Rca0ihzixFdbhDxYFCptqg/viewform?usp=sf_link">
                <ButtonLight className="sm:py-4 sm:px-26 sm:text-md md:py-5 md:px-32 md:text-lg text-sm rounded-lg">Apply now</ButtonLight>
              </Link>
            </p>
            <p className="mt-8 md:text-xl text-xs mx-auto">
            </p>
          </div>
          <img className="float-right hidden lg:block" src={elipsis} alt="Elipsis" />
        </div>
      </div>
      <section id="faq" className="lg:py-20 lg:px-20">
        <div>
          <div className="container py-10 mx-auto">
            <div className="text-center mb-20">
              <h1 className="text-xl sm:text-3xl md:text-5xl text-center title-font text-gray-900 mb-4 font-bold">
                <span style={{ color: '#2778FD' }}> Questions </span> and answers
              </h1>
            </div>
            <div className="mx-auto sm:mb-2 -mx-2">
              <div className="px-4 py-2 text-sm md:text-xl">
                <details className="mb-4">
                  <summary className="font-semibold  bg-primary-light text-mainblue rounded-md py-2 md:py-6 px-4">
                    <div className="container mx-auto px-2 md:px-8 items-center flex flex-row">
                      <span className="flex items-center justify-center w-12 h-12 text-xl font-bold">01</span>
                      <div className={`lg:mt-0 w-full px-8 lg:w-1/2`}>
                        What is the price of the program? How much do I need to pay?
                      </div>
                      <span className="flex items-center ml-auto justify-center text-black w-12 h-12 text-xl font-bold bg-white rounded-full">+</span>
                    </div>
                  </summary>
                  <span>
                    <div className="font-medium text-xs md:text-sm md:px-32 bg-primary-light rounded-md pb-6 px-4">
                      You need to pay only if you get an offer from the company of your choice. Price will be equal to 10-20 percent of your monthly salary over the period of 3 - 12 months.
                    </div>
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-primary-light text-mainblue rounded-md py-2 md:py-6 px-4">
                    <div className="container mx-auto px-2 md:px-8 items-center flex flex-row">
                      <span className="flex items-center justify-center w-12 h-12 text-xl font-bold">02</span>
                      <div className={`lg:mt-0 w-full px-8 lg:w-1/2`}>
                        How candidate selection for the program works?
                      </div>
                      <span className="flex items-center ml-auto justify-center text-black w-12 h-12 text-xl font-bold bg-white rounded-full">+</span>
                    </div>
                  </summary>
                  <span>
                    <div className="font-medium text-xs md:text-sm md:px-32 bg-primary-light rounded-md pb-6 px-4">
                      After filling out the form on the site, successful candidates will be notified through email. After the interview step, final candidates will be selected.
                    </div>
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-primary-light text-mainblue rounded-md py-2 md:py-6 px-4">
                    <div className="container mx-auto px-2 md:px-8 items-center flex flex-row">
                      <span className="flex items-center justify-center w-12 h-12 text-xl font-bold">03</span>
                      <div className={`lg:mt-0 w-full px-8 lg:w-1/2`}>
                        Does program require my physical presence at any step?
                      </div>
                      <span className="flex items-center ml-auto justify-center text-black w-12 h-12 text-xl font-bold bg-white rounded-full">+</span>
                    </div>
                  </summary>
                  <span>
                    <div className="font-medium text-xs md:text-sm md:px-32 bg-primary-light rounded-md pb-6 px-4">
                      Entire program is conducted online. Candidates only need a laptop with an internet access, webcam and microphone.
                    </div>
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-primary-light text-mainblue rounded-md py-2 md:py-6 px-4">
                    <div className="container mx-auto px-2 md:px-8 items-center flex flex-row">
                      <span className="flex items-center justify-center w-12 h-12 text-xl font-bold">04</span>
                      <div className={`lg:mt-0 w-full px-8 lg:w-1/2`}>
                        When is the deadline for the application?
                      </div>
                      <span className="flex items-center ml-auto justify-center text-black w-12 h-12 text-xl font-bold bg-white rounded-full">+</span>
                    </div>
                  </summary>
                  <span>
                    <div className="font-medium text-xs md:text-sm md:px-32 bg-primary-light rounded-md pb-6 px-4">
                      We haven't opened application yet, but you can already start your application
                    </div>
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-primary-light text-mainblue rounded-md py-2 md:py-6 px-4">
                    <div className="container mx-auto px-2 md:px-8 items-center flex flex-row">
                      <span className="flex items-center justify-center w-12 h-12 text-xl font-bold">05</span>
                      <div className={`lg:mt-0 w-full px-8 lg:w-1/2`}>
                        Duration of the mentorship? How many times is program coducted throughout the year?
                      </div>
                      <span className="flex items-center ml-auto justify-center text-black w-12 h-12 text-xl font-bold bg-white rounded-full">+</span>
                    </div>
                  </summary>
                  <span>
                    <div className="font-medium md:text-sm text-xs md:text-sm md:px-32 bg-primary-light rounded-md pb-6 px-4">
                      Duration of the program is adjusted indivually, with shortest duration of 3 month.
                    </div>
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-primary-light text-mainblue rounded-md py-2 md:py-6 px-4">
                    <div className="container mx-auto px-2 md:px-8 items-center flex flex-row">
                      <span className="flex items-center justify-center w-12 h-12 text-xl font-bold">06</span>
                      <div className={`lg:mt-0 w-full px-8 lg:w-1/2`}>
                        How many participants are selected in the end?
                      </div>
                      <span className="flex items-center ml-auto justify-center text-black w-12 h-12 text-xl font-bold bg-white rounded-full">+</span>
                    </div>
                  </summary>
                  <span>
                    <div className="font-medium text-xs md:text-sm md:px-32 bg-primary-light rounded-md pb-6 px-4">
                      The exact amount of applicants will be defined closer to the interviewing step of the selection process. There are will be 2 batches of program - for men and for women.
                    </div>
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-primary-light text-mainblue rounded-md py-2 md:py-6 px-4">
                    <div className="container mx-auto px-2 md:px-8 items-center flex flex-row">
                      <span className="flex items-center justify-center w-12 h-12 text-xl font-bold">07</span>
                      <div className={`lg:mt-0 w-full px-8 lg:w-1/2`}>
                        Can I apply if I am not software engineer? (Product Manager, Product Designer, Marketing Manager etc.)
                      </div>
                      <span className="flex items-center ml-auto justify-center text-black w-12 h-12 text-xl font-bold bg-white rounded-full">+</span>
                    </div>
                  </summary>
                  <span>
                    <div className="font-medium text-xs md:text-sm md:px-32 bg-primary-light rounded-md pb-6 px-4">
                      Unfortunately, for this year we only accepts students and engineers who are applying for software engineering roles.
                    </div>
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-primary-light text-mainblue rounded-md py-2 md:py-6 px-4">
                    <div className="container mx-auto px-2 md:px-8 items-center flex flex-row">
                      <span className="flex items-center justify-center w-12 h-12 text-xl font-bold">08</span>
                      <div className={`lg:mt-0 w-full px-8 lg:w-1/2`}>
                        Do I need to be a student at university? Who is eligible for participation?
                      </div>
                      <span className="flex items-center ml-auto justify-center text-black w-12 h-12 text-xl font-bold bg-white rounded-full">+</span>
                    </div>
                  </summary>
                  <span>
                    <div className="font-medium text-xs md:text-sm md:px-32 bg-primary-light rounded-md pb-6 px-4">
                      For the batch of the 2022-2023 year we accept both students and experienced software engineers which apply for Software Engineering positions in FAANG companies.
                    </div>
                  </span>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
export default Price;

