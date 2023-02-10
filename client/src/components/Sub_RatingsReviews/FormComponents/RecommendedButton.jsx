import React from 'react';

export default function RecommendedButton({ toggle }) {
  return (
    <fieldset className="form-header">
      <legend>Do you recommend this product? *</legend>
      <label value="Yes">
        Yes
        <input
          type="radio"
          id="yes"
          name="recommend"
          value="true"
          onClick={() => toggle(true)}
        />
      </label>
      <label value="No">
        No
        <input
          type="radio"
          id="no"
          name="recommend"
          value="false"
          onClick={() => toggle(false)}
        />
      </label>
    </fieldset>
  );
}
