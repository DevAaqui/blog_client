"use client";

import { Button } from "@heroui/react";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-zinc-800 mb-4">Oops</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Something went wrong
        </h2>
        <p className="text-zinc-400 mb-8 max-w-md">
          An unexpected error occurred. Please try again.
        </p>
        <Button
          onPress={reset}
          radius="full"
          className="bg-white text-black font-semibold hover:bg-zinc-200"
        >
          Try Again
        </Button>
      </div>
    </div>
  );
}
