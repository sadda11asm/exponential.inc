import React from 'react';
import Card from './Card';

const CustomerCard = ({ customer }) => {
  const shortDescription = customer.customerDescription.split('\n').slice(0, 2).join('\n');

  return (
    <Card className="mb-8 bg-opacity-60 bg-white flex flex-col h-full text-center">
    <div className="flex-1">
      <p className="text-l font-bold">{customer.title}</p>
      <img
        className="w-20 h-20 mt-5 mb-5 mx-auto rounded-full"
        src={customer.customerImage}
        alt={customer.customerName}
      />
      <p>{customer.customerName}</p>
      <div><text className="whitespace-pre-line font-display text-sm text-gray-600">{shortDescription}</text></div>
      <p className="mt-2" style={{ color: '#166EFF' }}>Подробнее</p>
    </div>
    {/* <div className="flex items-center mt-8">
      <img
        className="w-16 h-16 mr-4 rounded-full"
        src={customer.customerImage}
        alt={customer.customerName}
      />
      <div>
        <p>{customer.customerName}</p>
        <p className="text-sm text-gray-600 whitespace-pre-line">{customer.customerTitle}</p>
      </div>
    </div> */}
  </Card>
  )
};

export default CustomerCard;
