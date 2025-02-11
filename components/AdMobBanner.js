// components/AdMobBanner.js
   import { AdMobBanner } from 'react-admob';

   export default function AdComponent() {
     return (
       <AdMobBanner
         adUnitID="ca-app-pub-5755626533353022/6531436139" // Replace with your AdMob ID
         bannerSize="smartBannerPortrait"
         servePersonalizedAds={true}
         onDidFailToReceiveAdWithError={(error) => console.error(error)}
       />
     );
   }
