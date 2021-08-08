import React from 'react';

const StatsBox = ({ primaryText, secondaryText, thirdText }) => (
  <>
    <p className="text-4xl lg:text-6xl font-semibold text-primary">{primaryText}</p>
    <p className="font-semibold mb-6">{secondaryText}</p>
    <p className="font-light leading-relaxed mb-5">
      {thirdText}
    </p>
  </>
);

export default StatsBox;
