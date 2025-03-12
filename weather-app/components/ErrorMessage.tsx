import React from "react";
import { Alert } from "@mantine/core";
import { AlertCircle } from "lucide-react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <Alert
      icon={<AlertCircle size={20} />}
      title="Oops! Something went wrong."
      color="red"
      className="text-center shadow-lg rounded-lg"
    >
      <p className="text-gray-700">
        {message || "We couldn’t fetch the data. Please try again later."}
      </p>
    </Alert>
  );
};

export default ErrorMessage;
