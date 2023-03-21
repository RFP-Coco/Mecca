import React from "react";

export default function FormTextArea({
  className,
  placeholder,
  name,
  onChange,
  rows,
  cols,
  maxLength = 60,
  required,
}) {
  return (
    <textarea
      className={className}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      rows={rows}
      cols={cols}
      maxLength={maxLength}
      required={required}
    />
  );
}
