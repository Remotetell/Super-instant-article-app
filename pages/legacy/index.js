import FacebookAd from '../components/FacebookAd';

   export default function Home() {
     return (
       <div className="p-4">
         <h1 className="text-4xl font-bold text-center text-blue-500">
           Welcome to My Next.js App!
         </h1>
         <p className="text-center mt-4">
           This is the home page with a Facebook ad below.
         </p>
         {/* Add the FacebookAd component */}
         <FacebookAd placementId="1197074467354142_1956413074753607" />
       </div>
     );
   }
