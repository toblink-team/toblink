import Script from "next/script";
import { toblinkMarkup } from "./toblink-markup";

export default function Home() {
  return (
    <>
      <div
        id="toblink-app"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: toblinkMarkup }}
      />
      <Script src="/toblink.js" strategy="afterInteractive" />
    </>
  );
}
