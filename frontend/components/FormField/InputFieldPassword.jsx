import React, { useState } from 'react';

export default function InputFieldPassword() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="form-control-wrap">
      <button
        type="button"
        className="form-control-icon end password-toggle border-0 bg-transparent"
        title="Toggle show/hide password"
        onClick={togglePasswordVisibility}
      >
        <em
          className={`on icon ni ${
            showPassword ? 'ni-eye-off' : 'ni-eye'
          } text-base`}
        />
      </button>
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={handlePasswordChange}
        className="form-control form-control-lg"
        placeholder="Enter Password"
        required
      />
    </div>
  );
}
