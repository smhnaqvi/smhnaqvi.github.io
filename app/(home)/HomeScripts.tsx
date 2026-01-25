"use client";

import Script from "next/script";
import { useState } from "react";

export default function HomeScripts() {
  const [aosReady, setAosReady] = useState(false);

  return (
    <>
      <Script
        src="https://unpkg.com/aos@2.3.1/dist/aos.js"
        strategy="afterInteractive"
        onLoad={() => setAosReady(true)}
      />

      {aosReady ? (
        <Script src="/js/modern-scripts.js" strategy="afterInteractive" />
      ) : null}
    </>
  );
}

