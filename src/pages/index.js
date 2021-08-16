import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import faang from '../images/faang.png'
import google_office from '../images/google-office.jpg'

const Index = () => (
  <Layout>
    <section className="font-display pt-20 md:pt-40 pb-40">
      <div className="container mx-auto px-10 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            You can get it!
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Менторская программа для девушек подающих на стажировки в FAANG
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Подать заявку</Button>
          </p>
          <p className="mt-4 text-gray-600"></p>
        </div>
        <div className="lg:w-1/2 pl-12">
          <img src={faang} alt="Faang" />
        </div>
      </div>
    </section>
    <div className="bg-primary bg-opacity-25">
    <section id="what-we-offer" className="font-display py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Идея</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8 bg-opacity-60 bg-white">
              <p className="font-semibold text-xl">#1</p>
              <p className="mt-4">
                Оказываем всестороннюю <b> индивидуальную </b> поддержку студентам при подготовке к первой важной цели на пути в FAANG.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8 bg-opacity-60 bg-white">
              <p className="font-semibold text-xl">#2</p>
              <p className="mt-4">
                Предоставляем отработанную стратегию подготовки на опыте более 40 аппликантов предыдущих лет, <b> получивших в итоге offer в FAANG </b>.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8 bg-opacity-60 bg-white">
              <p className="font-semibold text-xl">#3</p>
              <p className="mt-4">
                Создаем идеальную атмосферу подготовки, включающую в себя обмен знанием и навыками, подтягиваем слабые и развиваем сильные стороны.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    </div>
    <SplitSection
      id="program"
      primarySlot={
        <div className="font-display lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Еженедельные индивидуальные сессии</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Ментора встречаются с участниками индивидуально и определяют статус подготовки и успеваемость участника.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="font-mono lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Еженедельные Mock Interview
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Ментора проводят mock interview участникам еженедельно, тут разбираются различные решения, проговариваются важные моменты интервью, работа над ошибками и тд.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="font-mono lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Подготовка по специализированной стратегии
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Предоставляется уникальная стратегия подготовки к алгоритмическим интервью, покрытие важных тем и часто-встречающихся алгоритмов.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <div className="bg-primary bg-opacity-25">
    <section id="mentors" className="font-mono py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 lg:text-5xl font-bold text-center">Наши ментора</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.slice(0, 3).map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.slice(3, 6).map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
    <section id="value" className="font-mono py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Ваши результаты</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+200%" secondaryText="Знания и навыки"  thirdText="Наши ментора делятся с вами своим ценным опытом."/>
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="-50%" secondaryText="Общее время подготовки" thirdText="Вы идёте по уже протоптанной тропе."/>
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+300%" secondaryText="Вера в себя" thirdText="Наши  ментора гарантируют, что вы имеете всё для победы."/>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+200%" secondaryText="Боевой Дух"  thirdText="Наши ментора делятся с вами своим ценным опытом."/>
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+400%" secondaryText="Мотивация" thirdText="Вы идёте по уже протоптанной тропе."/>
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="-100%" secondaryText="Прокрастинация" thirdText="Наши  ментора гарантируют, что вы имеете всё для победы."/>
          </div>
        </div>
      </div>
    </section>
    <section className="font-mono container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center bg-opacity-50">
      <h3 className="text-5xl font-semibold">Хотите стажировку в FAANG?</h3>
      <p className="mt-8 text-xl font-light">
       Подавайте в Exponential Inc. и станьте одним из 20 учеников эксклюзивной программы.
      </p>
      <p className="mt-8">
        <Button size="xl">Подать заявку</Button>
      </p>
    </section>
  </Layout>
);

export default Index;
