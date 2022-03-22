import React from 'react';
import Button from '../components/Button';
import ButtonLight from '../components/ButtonLight';
import Card from '../components/Card';
import Card2 from '../components/Card2';
import YoutubeEmbed from "../components/YoutubeEmbed";
import MentorCard from '../components/MentorCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import teamData from '../data/team';
import specializedMentors from '../data/specialized-mentors';

import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import faang from '../images/faang.png'
import process_first from '../images/individual_mentorship.png'
import process_second from '../images/strategy.png'
import process_third from '../images/atmosphere.png'
import process_fourth from '../images/personal.png'
import process_fifth from '../images/feedback.jpg'




import { useVisibility } from '../utils';
import { Link } from 'gatsby';

const Index = () => {
  const [ topmostSectionIsVisible, topmostSection ] = useVisibility(100);

  return (
    <Layout>
      <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfEXdTmGSKaBnU_W-K95pV4xw_1Rca0ihzixFdbhDxYFCptqg/viewform?usp=sf_link">
      <div className="fixed mx-auto w-1/2 inset-x-0 bottom-0 mb-4 text-center">
        <Button className={`${ topmostSectionIsVisible ? 'invisible md:invisible': 'visible md:invisible' }`}>Подать заявку</Button>
      </div>
      </Link>
      <section className="font-display pt-20 md:pt-40 pb-40" ref={topmostSection}>
        <div className="container mx-auto px-10 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
              Exponential
            </h1>
            <p className="text-xl lg:text-2xl mt-6 font-light">
              Менторская программа для девушек подающих на стажировки в FAANG
            </p>
            <p className="mt-8 md:mt-12">
              <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfEXdTmGSKaBnU_W-K95pV4xw_1Rca0ihzixFdbhDxYFCptqg/viewform?usp=sf_link">
                <Button size="lg">Подать заявку</Button>
              </Link>
            </p>
            <p className="mt-4 text-gray-600"></p>
          </div>
          <div className='lg:w-1/2 lg:pl-12'>
            <img src={faang} alt="Faang" />
          </div>
        </div>
      </section>
      <section className="font-display pt-20 md:pt-40 pb-40">
        <div className="container mx-auto px-10 lg:flex">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl lg:text-5xl font-bold">
              О <span className="text-mainblue"> программе </span>
            </h1>
            <p className="mt-8">
              <YoutubeEmbed className="mt-6" embedId="WSKKYy4iJs8" />
            </p>
          </div>
        </div>
      </section>
      <div className="bg-primary bg-opacity-25">
      </div>
      <SplitSection
        id="program"
        primarySlot={
          <div className="font-mono lg:pr-32 xl:pr-48">
            <h3 className="text-4xl font-bold leading-tight text-mainblue">Индивидальная 
поддержка</h3>
            <p className="mt-4 text-2xl font-medium leading-relaxed">
              Студентам при подготовке к первой важной цели на пути в FAANG
            </p>
          </div>
        }
        secondarySlot={<img src={process_first} alt="Faang" />}
      />
      <SplitSection
        reverseOrder
        primarySlot={
          <div className="font-mono lg:pl-32 xl:pl-48">
            <h3 className="text-4xl font-bold leading-tight text-mainblue">
            Отработанная 
стратегия  
            </h3>
            <p className="mt-4 text-2xl font-medium leading-relaxed">
            Подготовки на опыте более 40 аппликантов предыдущих лет, получивших в итоге offer 
в FAANG
            </p>
          </div>
        }
        secondarySlot={<img src={process_second} alt="Faang" />}
      />
      <SplitSection
        primarySlot={
          <div className="font-mono lg:pr-32 xl:pr-48">
            <h3 className="text-4xl font-bold leading-tight text-mainblue">
            Идеальная атмосфера
            </h3>
            <p className="mt-4 text-2xl font-medium leading-relaxed">
            Подготовки, включающую в себя обмен знанием и навыками, подтягиваем слабые и развиваем сильные стороны
            </p>
          </div>
        }
        secondarySlot={<img src={process_third} alt="Faang" />}
      />
      <div className="bg-primary bg-opacity-25">
      <section id="mentors" className="font-mono py-20 lg:py-40 lg:px-40" style={{ backgroundColor: '#EFF2F6' }}>
        <h2 className="mb-12 lg:text-5xl font-bold text-center">Команда</h2>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:-mx-3 lg:mx-1">
            {teamData.map(mentor => (
              <div key={mentor.mentorName} className="flex-1 px-6 flex flex-col">
                <MentorCard mentor={mentor} />
              </div>
            ))}
          </div>
        </div>
        <div className="container mx-auto">
        <h2 className="mb-12 mt-8 lg:text-3xl font-bold text-center">Специализированные <span style={{ color: '#166EFF' }}>ментора</span></h2>
        <div
          className="flex overflow-x-scroll pb-2 hide-scroll-bar scrollbar-hide lg:mx-1"
        >
          <div
            className="flex flex-nowrap mx-6"
          >
            {specializedMentors.map(mentor => (
              <div className="inline-block px-3">
                <div
                  className="w-64 h-72 max-w-xs rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                >
                  <MentorCard mentor={mentor}/>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>
      </div>
      <section id="how-it-works" className="font-mono py-20 lg:py-40 lg:px-40 text-center" style={{ backgroundColor: 'white' }}>
        <h2 className="lg:text-5xl">Как это <span style={{ color: '#2778FD' }}>работает?</span></h2>
        <p style={{ color: '#2778FD' }}>Посмотреть видео</p>
      </section>
      <section id="value" className="font-mono py-20 lg:pt-32">
        <div className="container mx-auto text-center">
          <LabelText className="text-gray-600">Ваши результаты</LabelText>
          <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
            <div className="w-full sm:w-1/3  lg:mr-5">
              <StatsBox primaryText="+200%" secondaryText="Знания и навыки"  thirdText="Наши ментора делятся с вами своим ценным опытом."/>
            </div>
            <div className="w-full sm:w-1/3">
              <StatsBox primaryText="-50%" secondaryText="Общее время подготовки" thirdText="Вы идёте по уже протоптанной тропе."/>
            </div>
            <div className="w-full sm:w-1/3  lg:ml-5">
              <StatsBox primaryText="+300%" secondaryText="Вера в себя" thirdText="Наши  ментора гарантируют, что вы имеете всё для победы."/>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
            <div className="w-full sm:w-1/3 lg:mr-5">
              <StatsBox primaryText="+200%" secondaryText="Боевой Дух"  thirdText="Наша техническая и моральная поддержка стимулируют ваш дух."/>
            </div>
            <div className="w-full sm:w-1/3">
              <StatsBox primaryText="+400%" secondaryText="Мотивация" thirdText="Атмосфера которую мы создаём вдохновляет и мотивирует."/>
            </div>
            <div className="w-full sm:w-1/3 lg:ml-5">
              <StatsBox primaryText="-100%" secondaryText="Прокрастинация" thirdText="Наша программа порождает желание работать не покладая рук."/>
            </div>
          </div>
        </div>
      </section>
      <section id= "faq" className="bg-primary bg-opacity-25 font-mono lg:py-20 lg:px-20">
        <div>
            <div className="container px-5 py-10 mx-auto">
              <div className="text-center mb-20">
                <h1 className="sm:text-3xl text-5xl text-center title-font text-gray-900 mb-4 font-bold">
                  FAQ
                </h1>
              </div>
              <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                <div className="w-full lg:w-1/2 px-4 py-2">
                  <details className="mb-4">
                    <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                      Цена программы? Когда нужно платить?
                    </summary>

                    <span>
                      <div className="font-medium  bg-white rounded-md py-2 px-4 mt-2">
                      Платить за программу нужно только в случае успешного прохождения в компанию вашего выбора. Цена будет равна 15-20% процентам от вашей зарплаты на стажировке.
                      </div>
                    </span>
                  </details>
                  <details className="mb-4">
                    <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                      Как проходит процесс отбора на программу?
                    </summary>

                    <span>
                      <div className="font-medium  bg-white rounded-md py-2 px-4 mt-2">
                      После заполнения формы на сайте, участники прошедшие на интервью будут оповещены по почте. После интервью будет отобрано 30 окончательных участников.
                      </div>
                </span>
                  </details>
                  <details className="mb-4">
                    <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                      Нужно ли находиться в определенном месте чтобы участвовать в программе?
                    </summary>

                    <span>
                      <div className="font-medium  bg-white rounded-md py-2 px-4 mt-2">
                      Программа проходит полностью онлайн. Нужно иметь лишь собственный компьютер с камерой, наушниками и выходом в интернет.
                      </div>
                    </span>
                  </details>
                  <details className="mb-4">
                    <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                      Когда дедлайн подачи?
                    </summary>

                    <span>
                      <div className="font-medium  bg-white rounded-md py-2 px-4 mt-2">
                      Дедлайн подачи 6 сентября 23:59 по времени Астаны. Начало программы - середина сентября.
                      </div>
                    </span>
                  </details>
                </div>

                <div className="w-full lg:w-1/2 px-4 py-2">
                  <details className="mb-4">
                    <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                      Длительность подготовки? Сколько раз в год проводится программа?
                    </summary>

                    <span>
                      <div className="font-medium  bg-white rounded-md py-2 px-4 mt-2">
                      Длительность программы будет адаптироваться под каждого участника индивидуально. Срок программы - 3 месяца.
                      </div>
                    </span>
                  </details>
                  <details className="mb-4">
                    <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                      Сколько участников будет отобрано?
                    </summary>

                    <span>
                      <div className="font-medium  bg-white rounded-md py-2 px-4 mt-2">
                      По итогам интервью будет отобрано 30 участников программы.
                      </div>
                </span>
                  </details>
                  <details className="mb-4">
                    <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                      Нужно ли мне быть студентом? Кто подходит под вашу программу?
                    </summary>

                    <span>
                      <div className="font-medium  bg-white rounded-md py-2 px-4 mt-2">
                      В этом году на программу принимаются только девушки обучающиеся на программах бакалавриата или магистратуры.
                      </div>
                    </span>
                  </details>
                </div>
                {/*<div className="w-full lg:w-1/2 px-4 py-2">*/}
                {/*  <details className="mb-4">*/}
                {/*    <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">*/}
                {/*      Длительность подготовки? Сколько раз в год проводится программа?*/}
                {/*    </summary>*/}

                {/*    <span className="px-4">*/}
                {/*      <div className="font-medium  bg-gray-100 rounded-md py-2 px-4">*/}
                {/*      Длительность программы будет адаптироваться под каждого участника индивидуально. Минимальный срок программы 3 месяца.*/}
                {/*      </div>*/}
                {/*    </span>*/}
                {/*  </details>*/}
                {/*  <details className="mb-4">*/}
                {/*    <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">*/}
                {/*      Сколько участников будет отобрано?*/}
                {/*    </summary>*/}

                {/*    <span className="px-4 py-2">*/}
                {/*    <div className="font-medium  bg-gray-100 rounded-md py-2 px-4 mt-2">*/}
                {/*    По итогам интервью будет отобрано 30 участников программы.*/}
                {/*    </div>*/}
                {/*</span>*/}
                {/*  </details>*/}
                {/*  <details className="mb-4">*/}
                {/*    <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">*/}
                {/*      Нужно ли мне быть студентом? Кто подходит под вашу программу?*/}
                {/*    </summary>*/}

                {/*    <span className="px-4 py-2">*/}
                {/*     <div className="font-medium  bg-gray-100 rounded-md py-2 px-4 mt-2">*/}
                {/*    В этом году на программу принимаются только девушки обучающиеся на программах бакалавриата или магистратуры.*/}
                {/*    </div>*/}
                {/*</span>*/}
                {/*  </details>*/}
                {/*</div>*/}
              </div>
            </div>
        </div>
      </section>
      <section className="font-mono pl-20  bg-mainblue text-white container mx-auto my-20 py-24 bg-gray-200 rounded-verylarge text-left">
        <h3 className="text-5xl font-bold spacing-xl">Хотите стажировку в FAANG?</h3>
        <p className="mt-3 text-xl font-normal">
         Подавайте в Exponential и станьте одним из 30 учеников эксклюзивной программы!
        </p>
        <p className="mt-8">
          <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfEXdTmGSKaBnU_W-K95pV4xw_1Rca0ihzixFdbhDxYFCptqg/viewform?usp=sf_link">
            <ButtonLight size = "xl">Подать заявку</ButtonLight>
          </Link>
        </p>
        <p className="mt-8 text-sm font-bold mx-auto">
          Крайний срок 22 июля
        </p>
      </section>
    </Layout>
  );
}

export default Index;
