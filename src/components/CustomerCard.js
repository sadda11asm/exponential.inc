import React from 'react';
import Card from './Card';

const CustomerCard = ({ customer }) => (
  <Card className="mb-8 bg-opacity-60 bg-white flex flex-col h-full">
    <div className="flex-1">
    <p className="whitespace-pre-line text-xl font-semibold mb-3">{customer.title}</p>
    <text className="whitespace-pre-line font-display text-sm">{customer.customerDescription}</text>
    </div>
    <div className="flex items-center mt-8">
      <img
        className="w-16 h-16 mr-4 rounded-full"
        src={customer.customerImage}
        alt={customer.customerName}
      />
      <div>
        <p>{customer.customerName}</p>
        <p className="text-sm text-gray-600 whitespace-pre-line">{customer.customerTitle}</p>
      </div>
    </div>
  </Card>

// <Card className="mb-8 bg-opacity-60 bg-white mx-4">
//     <img
//       className="object-cover rounded-full w-3/5 h-3/5 m-0.5 mx-auto"
//       src={customer.customerImage}
//       alt={customer.customerName}
//     />
//     <p className="text-xl font-semibold text-center mt-4">{customer.customerName}</p>
//     <div className="flex items-center mt-0.5">
//         {/*<div>*/}
//         <p className="text-gray-600 text-center">{customer.title}</p>
//         {/*</div>*/}
//     </div>
//     <p className="mt-1">{customer.customerDescription}</p>
// </Card>
);

export default CustomerCard;
