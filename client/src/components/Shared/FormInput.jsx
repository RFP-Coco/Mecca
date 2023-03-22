import React from "react";

export default function FormInput({
  type,
  id,
  className,
  placeholder,
  name,
  onChange,
  maxLength = 60,
  required = false,
}) {
  return (
    <input
      type={type}
      id={id}
      className={className}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      maxLength={maxLength}
      required={required}
    />
  );
}
