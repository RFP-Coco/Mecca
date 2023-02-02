import React from 'react';

export default function Star({
  size, percentage, id, color,
}) {
  // star default size is 50, if you want to resize, pass in the size as props
  // need 2 stops inside of the linearGradient to ensure instant transition.

  return (
    <svg
      className="star"
      width={size}
      height={size}
      viewBox="0 0 1792 1792"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`grad-${id}`}>
          <stop
            offset={percentage}
            stopColor={color}
          />
          <stop
            offset={percentage}
            stopColor="white"
          />
        </linearGradient>
      </defs>
      <path
        d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
        // fill="#FFB940"
        // this matches the ID in linearGradient
        fill={`url(#grad-${id})`}
        stroke="black"
        strokeWidth="10"
      />
    </svg>

  );
}
