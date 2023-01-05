import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';

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
                <label for="mock-type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mock type</label>
                <select id="mock-type" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected value="any">Any</option>
                    <option value="technical">Technical</option>
                    <option value="system">System Design</option>
                    <option value="behavioral">Behavioral</option>
                </select>
                <label for="company-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mock type</label>
                <select id="company-name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {companyNames.map((name, i) => <option value={name}>{name}</option>)}
                </select>
            </div>
        </Layout>
    );
};

export default Page;