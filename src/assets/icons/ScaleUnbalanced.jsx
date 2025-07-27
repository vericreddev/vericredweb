import React from 'react';

const ScaleUnbalanced = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 30H30"
        stroke="#38BDF8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 30V15L10 10"
        stroke="#38BDF8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 30V20L30 15"
        stroke="#38BDF8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7.5" cy="10" r="2.5" stroke="#38BDF8" strokeWidth="2" />
      <circle cx="32.5" cy="15" r="2.5" stroke="#38BDF8" strokeWidth="2" />
    </svg>
  );
};

export default ScaleUnbalanced;