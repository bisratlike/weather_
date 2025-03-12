import { Loader } from "@mantine/core";

export default function Loading({ message = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full space-y-4 p-6">
      {/* Animated Spinner */}
      <Loader color="blue" size="lg" variant="bars" />

      {/* Loading Message */}
      <p className="text-lg font-semibold text-gray-700 animate-pulse">
        {message}
      </p>
    </div>
  );
}
