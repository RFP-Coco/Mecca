import React from 'react';

export default function UserInfo({
  onChange,
}) {
  return (
    <div>
      <div className="form-review-email">
        Enter your email:
        <input
          required
          placeholder="'jackson11@email.com"
          name="email"
          onChange={onChange}
        />
      </div>
      <div className="form-review-name">
        Enter your display name:
        <input
          required
          placeholder="'jackson11!"
          name="name"
          onChange={onChange}
        />
      </div>
      <p>
        For Privacy Reasons, do not use your full name or email address.
      </p>
    </div>
  );
};