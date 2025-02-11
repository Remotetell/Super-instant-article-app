// pages/_app.js
   import { DefaultSeo } from 'next-seo';
   import '../styles/globals.css';

   export default function App({ Component, pageProps }) {
     return (
       <>
         <DefaultSeo
           title="Super WebApp"
           description="Blazing-fast articles like AMP and Facebook Instant Articles"
           canonical="https://yourdomain.com"
           openGraph={{
             type: 'website',
             locale: 'en_US',
             url: 'https://yourdomain.com',
             site_name: 'Super WebApp',
           }}
           twitter={{
             cardType: 'summary_large_image',
           }}
         />
         <Component {...pageProps} />
       </>
     );
   }
