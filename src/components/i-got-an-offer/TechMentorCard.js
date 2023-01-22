import React, { useState } from 'react';
import Select from 'react-select';

import { Link } from 'gatsby';
import { addPriceToInterviewTypeLabel } from '../../utils';

const Card = ({ className, children }) => (
  <div
    className={`p-6 rounded-lg border border-solid border-gray-200 ${className} relative`}
    style={{
      boxShadow: '0 10px 28px rgba(0,0,0,.08)'
    }}
  >
    {children}
  </div>
);

const RequiredSelect = ({ options, passValueToParent }) => {
  const [value, setValue] = useState(null);
  return <>
    <Select
      required
      className='px-6 relative'
      placeholder='Select mock type'
      options={options}
      onChange={({ value }) => {
        setValue(value);
        if (passValueToParent) {
          passValueToParent(value);
        }
      }}
      styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
    />
    <input required tabIndex={-1} style={{ opacity: 0, height: 1, border: 0, padding: 0 }} autoComplete="off" value={value} />
  </>;
}


const TechMentorCard = ({ mentor, link }) => {
  let conductsInterviews;
  let previouslyEmployedAt;

  try {
    conductsInterviews = mentor.conductsInterviews.sort().map(txt => txt.toLowerCase()).join(', ');
  }
  catch (err) { }

  mentor.conductsInterviews.map((interviewType) => ({ value: interviewType, label: interviewType }))

  try {
    previouslyEmployedAt = mentor.previousCompanies.sort().join(', ');
  }
  catch (err) { }

  const [selectedInterviewType, setSelectedInterviewType] = useState(null);

  return (
    <Card className="mb-8 bg-opacity-60 bg-white flex flex-col h-full text-center">
      <div className="flex-1">
        <div className="pb-20">
          <img
            className="w-20 h-20 mt-5 mb-5 mx-auto rounded-full"
            src={mentor.mentorImage}
            alt={mentor.mentorName}
          />
          <p>{mentor.mentorName}</p>
          <div className=""><text className="whitespace-pre-line font-display text-sm text-gray-600">{`${mentor.role} @ ${mentor.company}`}</text></div>
          {previouslyEmployedAt && <div className="mb-4"><text className="whitespace-pre-line font-display text-sm text-gray-600">{`ex-${previouslyEmployedAt}`}</text></div>}
          {conductsInterviews && <div className="mb-2"><text className="whitespace-pre-line font-display text-sm"><span className="font-semibold">Conducts: </span> {conductsInterviews} </text></div>}
        </div>
        <div className="absolute inset-x-0 bottom-0">
          <form onSubmit={(e) => {
            e.preventDefault();
            window.location.href = `${link}&entry.312829758=${mentor.mentorName.split(' ').join('+')}&entry.2016818891=${selectedInterviewType.split(' ').join('+')}`;
          }}>
            <RequiredSelect passValueToParent={(value) => setSelectedInterviewType(value)} options={mentor.conductsInterviews.map((interviewType) => ({ value: interviewType, label: addPriceToInterviewTypeLabel(interviewType) }))} />
            <div className="hover:bg-blue-100 pt-1 mt-4">
              <button>
                <p className="mt-2" style={{ color: '#166EFF' }}>Book</p>
              </button>
              <div className="mt-3 w-full h-2" style={{ backgroundColor: '#166EFF' }}></div>
            </div>
          </form>
        </div>
      </div>
    </Card>
  )
};


export default TechMentorCard;