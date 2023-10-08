import React, { useState, useEffect } from 'react';
import { genQueryApi, } from '../api/igotanoffer';
import Select from 'react-select';

import Layout from '../components/layout/Layout';
import TechMentorCard from '../components/i-got-an-offer/TechMentorCard';
import LoadingSpinner from '../components/i-got-an-offer/LoadingSpinner';

const Page = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [companyNames, setCompanyNames] = useState([]);
    const [interviewTypes, setInterviewTypes] = useState([]);

    const [allMentorsData, setAllMentorsData] = useState([]);
    const [mentorsData, setMentorsData] = useState([]);

    // debug purposes
    // const [rawData, setRawData] = useState([]);
    // const [eventContents, setEventContents] = useState([]);
    // debug purposes

    useEffect(async () => {
        document.title = 'Exp Mocks';
        const { techMentorsData, companiesList, interviewTypesList } = await genQueryApi();

        // setRawData(techMentorsData);

        setAllMentorsData(techMentorsData);
        setMentorsData(techMentorsData);

        const companiesSelectOptions = companiesList.map(companyName => { return { value: companyName, label: companyName } });
        const interviewTypesSelectOptions = interviewTypesList.map(interviewType => { return { value: interviewType, label: interviewType } });

        setCompanyNames(companiesSelectOptions);
        setInterviewTypes(interviewTypesSelectOptions);
        setIsLoading(false);
    }, []);

    const onInterviewSelectChange = (event) => {
        const queriedInterviewTypes = event.map(e => e.value);
        setMentorsData(allMentorsData.filter(({ conductsInterviews }) => {
            for (const interviewType of queriedInterviewTypes) {
                if (conductsInterviews && conductsInterviews.includes(interviewType)) return true;
            }
            return false;
        }));
    }

    const onCompanySelectChange = (event) => {
        const queriedCompanies = event.map(e => e.value);

        setMentorsData(allMentorsData.filter(({ company, previousCompanies }) => {
            for (const queriedCompany of queriedCompanies) {
                if (queriedCompany === company) return true;
                // if (previousCompanies && previousCompanies.includes(queriedCompany)) return true;
            }

            return false;
        }));
    };

    return (
        <div>
            { isLoading && <div className="flex flex-col justify-center h-screen w-screen inset-0 z-50 absolute bg-gray-100 bg-opacity-50"><LoadingSpinner/></div> }
            <div className="px-10 my-10">
                {/* <p>rawData: {JSON.stringify(rawData)}</p>
                <p>MentorsData: {JSON.stringify(mentorsData)}</p>
                <p>eventContents: {JSON.stringify(eventContents)}</p> */}
                <div>
                    <div class="w-full bg-zinc-500">
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label for="mock-type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mock type</label>
                                {interviewTypes.length >0 && <Select
                                    defaultValue={interviewTypes}
                                    isMulti
                                    name="colors"
                                    options={interviewTypes}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                    onChange={onInterviewSelectChange}
                                />}
                            </div>
                            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label for="company-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company name</label>
                                {companyNames.length > 0 && <Select
                                    defaultValue={companyNames}
                                    isMulti
                                    name="colors"
                                    options={companyNames}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                    onChange={onCompanySelectChange}
                                />}
                            </div>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-5 gap-4 sm:grid-cols-2">
                        {mentorsData.map(mentor => (
                            <TechMentorCard mentor={mentor} link={`https://docs.google.com/forms/d/e/1FAIpQLSeAJJiodYjvzv1xF1EcTpU9XUUtL6ZIvuzzQekMK7WmaHAjiw/viewform?usp=pp_url`} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
