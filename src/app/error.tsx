"use client";

import { useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    // log error
    console.error(error);
  }, [error]);

  return (
    <div className="container py-32">
      <h1 className="text-4xl">Something went wrong!!!!!!!</h1>
    </div>
  );
};

export default Error;
