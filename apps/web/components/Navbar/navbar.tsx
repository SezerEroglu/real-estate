'use client';

import { Link } from '@heroui/react';
import {
  HomeIcon,
  LandmarkIcon,
  SearchIcon,
  TrendingUpIcon,
} from '@/components/svg';

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 h-16 border-t border-divider bg-background text-secondary">
      <div className="grid grid-cols-4">
        {/* <!-- Nav Item --> */}
        <Link
          href="/"
          className="pointer-events-auto col-span-1 flex flex-col items-center justify-center space-y-1 py-2"
        >
          <div className="h-6 w-6">
            <HomeIcon />
          </div>
          <span className="w-full overflow-hidden text-ellipsis text-center text-xs">
            Home
          </span>
        </Link>

        {/* <!-- Nav Item --> */}
        <Link
          href="/search"
          className="pointer-events-auto col-span-1 flex flex-col items-center justify-center space-y-1 py-2"
        >
          <div className="h-6 w-6">
            <SearchIcon />
          </div>
          <span className="w-full overflow-hidden text-ellipsis text-center text-xs">
            Search
          </span>
        </Link>

        {/* <!-- Nav Item --> */}
        <Link
          href="/matching"
          className="pointer-events-auto col-span-1 flex flex-col items-center justify-center space-y-1 py-2"
        >
          <div className="h-6 w-6">
            <LandmarkIcon />
          </div>
          <span className="w-full overflow-hidden text-ellipsis text-center text-xs">
            Matching
          </span>
        </Link>

        {/* <!-- Nav Item --> */}
        <Link
          href="/consideration"
          className="pointer-events-auto col-span-1 flex flex-col items-center justify-center space-y-1 py-2"
        >
          <div className="h-6 w-6">
            <TrendingUpIcon />
          </div>
          <span className="w-full overflow-hidden text-ellipsis text-center text-xs">
            Consideration
          </span>
        </Link>
      </div>
    </nav>
  );
}
