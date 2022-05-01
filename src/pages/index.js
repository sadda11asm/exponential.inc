import React from 'react';
import Button from '../components/Button';
import ButtonLight from '../components/ButtonLight';
import YoutubeEmbed from "../components/YoutubeEmbed";
import MentorCard from '../components/MentorCard';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import teamData from '../data/team';
import specializedMentorsData from '../data/specialized-mentors';
import SpecializedMentors from '../components/SpecializedMentors';

import circle from '../images/circle.png'
import elipsis from '../images/elipsis.png'
import blackcylinder from '../images/blackcylinder.png'
import bluecylinder from '../images/bluecylinder.png'
import f from '../images/f.png'
import g from '../images/g.png'
import go from '../images/go.png'
import b from '../images/b.png'
import d from '../images/d.png'
import p from '../images/p.png'
import process_first from '../images/individual_mentorship.png'
import process_second from '../images/strategy.png'
import process_third from '../images/atmosphere.png'

import WeekInMentorship from '../components/a-week-in-mentorship';

import { useVisibility } from '../utils';
import { Link } from 'gatsby';
import HowItWorks from '../components/how-it-works';


const Index = () => {
  const [ topmostSectionIsVisible, topmostSection ] = useVisibility(100);

  return (
    <Layout>
      <div>
        <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"/>
      </div>
      <div>
        <link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet"/>
      </div>
      <Link className={`${ topmostSectionIsVisible ? 'invisible md:invisible': 'visible md:invisible' }`} to="https://docs.google.com/forms/d/e/1FAIpQLSfEXdTmGSKaBnU_W-K95pV4xw_1Rca0ihzixFdbhDxYFCptqg/viewform?usp=sf_link">
        <div className="fixed mx-auto w-1/2 inset-x-0 bottom-0 mb-4 text-center">
          <Button>Apply now</Button>
        </div>
      </Link>
      <section className="z-10 invisible lg:visible absolute right-0 rounded-l-largest bg-black lg:w-6/12">
        <div className="lg:h-10"></div>
      </section>
      <section className="z-10 invisible lg:visible absolute mt-10 right-0 rounded-l-largest bg-primary-changed lg:w-6/12">
        <img src={circle} alt="Circle" />
      </section>
      <section className="bg-black font-body lg:pt-40 pt-24 pb-24 md:pr-40 lg:w-8/12 rounded-br-largest" ref={topmostSection}>
        <div className="container mx-auto px-10 lg:pl-10 lg:pr-20 lg:flex">
          <div className="text-center text-white lg:text-left lg:ml-10 lg:mr-8">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
              Exponential
            </h1>
            <p className="text-l lg:text-xl mt-6 lg:mr-10">
              Mentorship program for software engineers and software engineering students applying to FAANGs
            </p>
            <p className="mt-8 md:mt-12">
              <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfEXdTmGSKaBnU_W-K95pV4xw_1Rca0ihzixFdbhDxYFCptqg/viewform?usp=sf_link">
                <Button className="bg-primary-changed font-body w-64 rounded-big">Apply Now</Button>
              </Link>
            </p>
          </div>
        </div>
        <p className="mx-auto text-l lg:text-xl lg:mt-64 mt-40 lg:pl-20 lg:text-left text-center text-gray-600">
          Apply before the deadline on <span className="text-white"> July 22nd  </span>
        </p>
      </section>
      <section id="what-we-offer" className=" pt-20 md:pt-40 pb-40">
        <div className="container mx-auto px-10 lg:flex">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl lg:text-5xl font-bold">
              About <span className="text-mainblue"> program </span>
            </h1>
            <p className="mt-8">
              <YoutubeEmbed className="md:h-full md:w-full h-20 md:mt-6 mt-2" embedId="WSKKYy4iJs8" />
            </p>
          </div>
        </div>
      </section>
      <div className="bg-primary bg-opacity-25">
      </div>
      <SplitSection
        id="program"
        primarySlot={
          <div className=" lg:pr-32 xl:pr-48">
            <h3 className="text-4xl font-bold leading-tight text-mainblue">Individual support</h3>
            <p className="mt-4 text-2xl font-medium leading-relaxed">
              for the stuidents on their way to the job at FAANG
            </p>
          </div>
        }
        secondarySlot={<img src={process_first} alt="Faang" />}
      />
      <SplitSection
        reverseOrder
        primarySlot={
          <div className=" lg:pl-32 xl:pl-48">
            <h3 className="text-4xl font-bold leading-tight text-mainblue">
            Developed strategy
            </h3>
            <p className="mt-4 text-2xl font-medium leading-relaxed">
            based on the experience of 40 applicants, who landed a job offer at FAANG
            </p>
          </div>
        }
        secondarySlot={<img src={process_second} alt="Faang" />}
      />
      <SplitSection
        primarySlot={
          <div className=" lg:pr-32 xl:pr-48">
            <h3 className="text-4xl font-bold leading-tight text-mainblue">
            Perfect atmosphere
            </h3>
            <p className="mt-4 text-2xl font-medium leading-relaxed">
            of preparation, including exchange of knowledge and experience, support of weak and improvement of strong sides
            </p>
          </div>
        }
        secondarySlot={<img src={process_third} alt="Faang" />}
      />
      <div className="bg-primary bg-opacity-25">
      <section id="mentors" className="font-mono py-20 lg:py-40" style={{ backgroundColor: '#EFF2F6' }}>
        <h2 className="mb-12 lg:text-5xl font-bold text-center">Team</h2>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:-mx-3 lg:mx-1">
            {teamData.map(mentor => (
              <div key={mentor.mentorName} className="flex-1 px-6 flex flex-col">
                <MentorCard mentor={mentor} link={mentor.bioLink}/>
              </div>
            ))}
          </div>
        </div>
        <SpecializedMentors specializedMentors={specializedMentorsData}/>
      </section>
      </div>
      <section id="how-it-works" className="pt-20 lg:px-40 text-center" style={{ backgroundColor: 'white' }}>
        <HowItWorks/>
        <WeekInMentorship/>
      </section>
      <div className="hidden md:block mb-48">
        <section className="z-10 md:absolute mt-24 pt-24 pr-16 right-0 rounded-l-largest w-4/12 flex flex-row">
          <div className="inline-block flex flex-col justify-end">
            <div className="text-center font-bold mb-4">
              15 offers
            </div>
            <img src={bluecylinder} alt="bluecylinder" />
          </div>
          <div className="inline-block ml-10 flex flex-col justify-end">
            <div className="text-center font-bold mb-4">
              24 participants
            </div>
            <img src={blackcylinder} alt="blackcylinder" />
          </div>
        </section>
        <section className="invisible md:visible z-10 inline-block mt-10 right-0 mr-48 rounded-l-largest w-2/12">
        </section>
        <section id="value" className="lg:pt-40 pt-24 pb-24 md:pr-40 w-full">
          <div className="container mx-auto mt-16 px-10 lg:pl-10 lg:pr-20 lg:flex">
            <div className="text-black text-left lg:ml-10 lg:mr-8">
              <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-none">
                Exponential<span className="text-primary-changed"> Batch #1  </span>
              </h1>
              <p className="mt-3 text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
                Results:
              </p>
              <p className="mt-5">
                  <span className="text-xl lg:text-2xl xl:text-3xl text-bold">
                     <p>
                       <Link to={`/alumni/`}>
                         <a className="text-bold text-primary-changed"> Meet Exponential Graduates -> </a>
                       </Link>
                     </p>
                      {/*<a className="text-bold text-primary-changed"> Meet Exponential Graduates -> </a>*/}
                  </span>
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="md:hidden">
        <section id="value" className="align-middle  lg:pt-40 pt-24 pb-24 md:pr-40 w-full">
          <div className="container mx-auto px-10 lg:pl-10 lg:pr-20 lg:flex">
            <div className="text-black text-left lg:ml-10 lg:mr-8">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
                Exponential<span className="text-primary-changed"> Batch #1  </span>
              </h1>
              <p className="mt-3 text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
                Results:
              </p>
              <p className="mt-5">
                  <span className="text-xl lg:text-2xl xl:text-3xl text-bold">
                      <p>
                       <Link to={`/alumni/`}>
                         <a className="text-bold text-primary-changed"> Meet Exponential Graduates -> </a>
                       </Link>
                     </p>
                  </span>
              </p>
            </div>
          </div>
        </section>
        <section className="mx-16 mt-4 mb-16 align-middle rounded-l-largest flex flex-row">
          <div className="inline-block flex flex-col justify-between">
            <div className="text-center font-bold mb-4">
              15 offers
            </div>
            <img src={bluecylinder} alt="bluecylinder" />
          </div>
          <div className="inline-block ml-10 flex flex-col justify-between">
            <div className="text-center font-bold mb-4">
              24 participants
            </div>
            <img src={blackcylinder} alt="blackcylinder" />
          </div>
        </section>
      </div>
      <section id="companies" className="">
        <h1 className="text-center text-xl lg:text-2xl xl:text-3xl font-bold leading-none">
          Companies <span className="text-primary-changed"> our alumni  </span> work for
        </h1>
        <div className="md:hidden flex flex-row max-w-full space-x-8 mt-10 px-10 pt-5 justify-center">
          <img className="w-4/12" src={g} alt="g" />
          <img className="w-4/12" src={f} alt="f" />
          <img className="w-4/12" src={go} alt="go" />
        </div>
        <div className="md:hidden flex flex-row max-w-full space-x-8 px-10 pb-5 justify-center">
          <img className="w-4/12" src={d} alt="d" />
          <img className="w-4/12" src={b} alt="b" />
          <img className="w-4/12" src={p} alt="p" />
        </div>
        <div className="flex flex-row max-w-full space-x-8 p-20 justify-center invisible md:visible">
          <img className="w-2/12" src={g} alt="g" />
          <img className="w-2/12" src={f} alt="f" />
          <img className="w-2/12" src={go} alt="go" />
          <img className="w-2/12" src={d} alt="d" />
          <img className="w-2/12" src={b} alt="b" />
          <img className="w-2/12" src={p} alt="p" />
        </div>
      </section>

      <section id= "faq" className="lg:py-20 lg:px-20">
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
                          Price of the program? How much do I need to pay?
                        </div>
                        <span className="flex items-center ml-auto justify-center text-black w-12 h-12 text-xl font-bold bg-white rounded-full">+</span>
                      </div>
                    </summary>
                    <span>
                      <div className="font-medium text-xs md:text-sm md:px-32 bg-primary-light rounded-md pb-6 px-4">
                      You need to pay only if you get an offer from the company of your choice. Price will be equal to 15-20 percent of your monthly salary.
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
                        After filling out the form on the site, succesful candidates will be notified through email. After interview step 30 final candidates will be selected.
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
                        Deadline for the application is July 22nd 23:59 Astana time. Program starts in September.
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
                      <div className="font-medium text-sm text-xs md:text-sm md:px-32 bg-primary-light rounded-md pb-6 px-4">
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
                        After the interview step 30 final participants are selected.
                      </div>
                    </span>
                  </details>
                  <details className="mb-4">
                    <summary className="font-semibold  bg-primary-light text-mainblue rounded-md py-2 md:py-6 px-4">
                      <div className="container mx-auto px-2 md:px-8 items-center flex flex-row">
                        <span className="flex items-center justify-center w-12 h-12 text-xl font-bold">07</span>
                        <div className={`lg:mt-0 w-full px-8 lg:w-1/2`}>
                          Do I need to be a student at university? Who are eligible for participation?
                        </div>
                        <span className="flex items-center ml-auto justify-center text-black w-12 h-12 text-xl font-bold bg-white rounded-full">+</span>
                      </div>
                    </summary>
                    <span>
                      <div className="font-medium text-xs md:text-sm md:px-32 bg-primary-light rounded-md pb-6 px-4">
                        For the batch of this year it is required to be an active student at either bachelor or master's university course.
                      </div>
                    </span>
                  </details>
                </div>
              </div>
            </div>
        </div>
      </section>
      <div className="lg:text-md lg:pt-20 lg:py-0 lg:pl-20 md:text-sm text-xs sm:text-xs md:py-20 py-5 px-6 bg-mainblue text-white container mx-10 my-10 mx-auto md:my-20 rounded-big text-left">
        <div className="flow-root">
          <h3 className="sm:text-2xl md:text-5xl text-xs font-bold spacing-xl">Do you want an internship at FAANG?</h3>
          <p className="mt-3 md:text-xl text-xs font-normal sm:text-l sm:max-w-sm">
          Join Exponential and become one of the 30 participants of our exclusive program!
          </p>

              <div className="float-left">
              <p className="mt-8 ">
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfEXdTmGSKaBnU_W-K95pV4xw_1Rca0ihzixFdbhDxYFCptqg/viewform?usp=sf_link">
                  <ButtonLight className="sm:py-4 sm:px-26 sm:text-md md:py-5 md:px-32 md:text-lg text-xs rounded-lg">Apply now</ButtonLight>
                </Link>
              </p>
              <p className="mt-8 md:text-xl text-xs mx-auto">
                Applications accepted until July 22
              </p>
              </div>
              <img className="float-right hidden lg:block" src={elipsis} alt="Elipsis" />
        </div>
      </div>
    </Layout>
  );
}

export default Index;
