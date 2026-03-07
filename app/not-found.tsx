"use client";

import { Button, Link } from "@heroui/react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-zinc-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Page not found
        </h2>
        <p className="text-zinc-400 mb-8 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button
          as={Link}
          href="/"
          radius="full"
          className="bg-white text-black font-semibold hover:bg-zinc-200"
        >
          Go Home
        </Button>
      </div>
    </div>
  );
}
