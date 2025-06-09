import React from "react";
import { ErrorStateProps } from "../types/states";

const ErrorState: React.FC<ErrorStateProps> = ({
  message,
  title = "Error",
  onRetry,
  retryLabel = "Try Again",
}) => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h2 className="text-red-500 text-xl font-semibold mb-4">{title}</h2>
      <p className="text-slate-600">{message}</p>
      {onRetry && (
        <button
          className="mt-6 w-full py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
          onClick={onRetry}
        >
          {retryLabel}
        </button>
      )}
    </div>
  </div>
);

export default ErrorState; 