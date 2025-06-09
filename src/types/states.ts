export interface ErrorStateProps {
    message: string;
    title?: string;
    onRetry?: () => void;
    retryLabel?: string;
}

export interface LoadingSpinnerProps {
    message?: string;
  }
  
  