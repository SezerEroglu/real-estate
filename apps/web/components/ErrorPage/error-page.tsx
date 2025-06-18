'use client';

import { Link } from '@heroui/react';

export type ErrorPageProps = {
  title: string;
  subtitle?: string;
  description: string;
};

export default function ErrorPage({
  title,
  subtitle,
  description,
}: ErrorPageProps) {
  return (
    <div className="flex min-h-[calc(100vh-var(--navbar-height-injected))] flex-col items-center justify-center bg-background px-4 text-center text-foreground">
      <h1 className="mb-4 text-6xl font-bold">{title}</h1>
      {subtitle && <h2 className="mb-2 text-2xl font-semibold">{subtitle}</h2>}
      <p className="mb-6">{description}</p>
      <Link
        href="/"
        className="rounded-lg bg-primary px-6 py-3 text-primary-foreground shadow transition hover:bg-primary/90"
      >
        To Homepage
      </Link>
    </div>
  );
}
