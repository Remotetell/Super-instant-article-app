import Script from 'next/script';

   export default function FacebookAd({ placementId }) {
     return (
       <>
         <Script
           strategy="lazyOnload"
           src="https://connect.facebook.net/en_US/fbds.js"
           onLoad={() => {
             window._fbq = window._fbq || [];
             window._fbq.push(['addPixelId', placementId]);
           }}
         />
         <div
           className="fb-ad"
           data-placementid={placementId}
           data-format="native"
           data-nativeadid="ad-container"
         />
       </>
     );
   }
