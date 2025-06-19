'use client';

import { useEffect } from 'react';
import Hotjar from '@hotjar/browser';

export default function HotjarProvider() {
  useEffect(() => {
    const siteId = 6440093;
    const hotjarVersion = 6;
    console.log(siteId, hotjarVersion);
    Hotjar.init(siteId, hotjarVersion);
  }, []);
  return <></>;
}
