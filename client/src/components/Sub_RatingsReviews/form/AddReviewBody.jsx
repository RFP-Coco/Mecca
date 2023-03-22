import React from "react";
import FormInput from "../../Shared/FormInput.jsx";
import FormTextArea from "../../Shared/FormTextArea.jsx";

export default function AddReviewBody({
  onChange,
  reviewBody,
  minBodyLength,
  maxBodyLength,
  maxSummaryLength,
}) {
  return (
    <div className="form-review-text">
      <div className="form-review-summary">
        Summary:
        <FormInput
          onChange={onChange}
          placeholder="example: jackson11!"
          maxLength={maxSummaryLength}
          name="summary"
        />
        <div>
          <span className="counter-label">current # of characters:</span>
          <span className="counter">
            {reviewBody.summary.length < maxSummaryLength
              ? reviewBody.summary.length
              : "maximum reached"}
          </span>
        </div>
      </div>
      <div className="form-review-body">
        Enter your review here: *
        <FormTextArea
          onChange={onChange}
          className="form-review-body-input"
          placeholder="Why did you like the product or not?"
          maxLength={maxBodyLength}
          name="body"
          required
        />
        <div>
          <span className="counter-label">
            minimum required characters left:
          </span>
          <span className="counter">
            {minBodyLength - reviewBody.body.length > 0
              ? minBodyLength - reviewBody.body.length
              : "minimum reached"}
          </span>
        </div>
      </div>
    </div>
  );
}
