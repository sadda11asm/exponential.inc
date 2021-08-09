import React from 'react';

const StatsBox = ({ primaryText, secondaryText, thirdText }) => (
  <>
    <p className="text-5xl lg:text-6xl font-semibold text-primary">{primaryText}</p>
    <p className="font-semibold mb-6 text-xl">{secondaryText}</p>
    <p className="font-light leading-relaxed text-gray-700 mb-5 text-xs">
      {thirdText}
    </p>
  </>
);

export default StatsBox;
