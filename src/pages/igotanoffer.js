import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/Button';
import TechMentorCard from '../components/i-got-an-offer/TechMentorCard';

import teamData from '../data/demo-igotanoffer';

const Page = () => {
    const [companyNames, setCompanyNames] = useState([
        'Meta',
        'Google',
        'Amazon',
        'Apple',
        'Booking',
    ]);

    return (
        <Layout>
            <div className="px-10 my-10">
                <div>
                    <div class="w-full bg-zinc-500">
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label for="mock-type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mock type</label>
                                <select id="mock-type" class="py-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected value="any">Any</option>
                                    <option value="technical">Technical</option>
                                    <option value="system">System Design</option>
                                    <option value="behavioral">Behavioral</option>
                                </select>
                            </div>
                            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label for="company-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mock type</label>
                                <select id="company-name" class="py-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    {companyNames.map((name, i) => <option value={name}>{name}</option>)}
                                </select>
                            </div>
                            <Button className="bg-primary-changed rounded-lg text-sm py-3">Apply Now</Button>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-5 gap-4 sm:grid-cols-2">
                        {teamData.concat(teamData).map(mentor => (
                            <TechMentorCard mentor={mentor} link={mentor.bioLink} />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Page;