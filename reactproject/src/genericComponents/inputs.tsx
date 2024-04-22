import React from 'react';

interface InputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputComponent({ label, value, onChange }: InputProps) {
  return (
    <div className="col-auto">
      <label htmlFor={label} className="form-label">{label}:</label>
      <input
        type="number"
        className="form-control"
        id={label}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default InputComponent;

