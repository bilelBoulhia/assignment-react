import React from "react";
import { LoadingSpinnerProps } from "../types/states";


const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ message = "Loading..." }) => (
  <div className="spinner-container">
    <div className="spinner">
      <div className="spinner-circle"></div>
      <p className="spinner-message">{message}</p>
    </div>
  </div>
);

export default LoadingSpinner; 