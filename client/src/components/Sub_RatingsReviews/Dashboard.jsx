import React, { useState, useEffect } from 'react';
import RatingSummary from './RatingSummary.jsx';

export default function Dashboard({ reviewMetadata }) {
  return (
    <div className="review-dashboard">
      <RatingSummary reviewMetadata={reviewMetadata} />
    </div>
  );
}
