import { useRouter } from 'next/router';

export async function getStaticPaths() {
   export default function Article() {
     const router = useRouter();
     const { slug } = router.query;

     return (
       <div>
         <h1>Article: {slug}</h1>
         <p>This is the article page for {slug}.</p>
       </div>
     );
   }





import FacebookAd from '../../components/FacebookAd';
   import DynamicArticle from '../../components/DynamicArticle';
   import AdMobBanner from '../../components/AdMobBanner';
   import { useAmp } from 'next/amp';

   export async function getStaticPaths() {
     // Define the paths for pre-rendering
     const paths = [
       { params: { slug: 'sample-article-1' } },
       { params: { slug: 'sample-article-2' } },
     ];
     return { paths, fallback: 'blocking' };
   }

   export async function getStaticProps({ params }) {
     // Fetch content based on the slug
     const content = {
       title: `Article: ${params.slug}`,
       image: 'https://via.placeholder.com/720x1280',
       video: 'https://www.w3schools.com/html/mov_bbb.mp4',
     };
     return { props: { content } };
   }

   export default function ArticlePage({ content }) {
     const isAMP = useAmp(); // Detect if the page is in AMP mode
     return (
       <div className="p-4">
         <DynamicArticle content={content} isAMP={isAMP} />
         {/* Add the FacebookAd and AdMobBanner components */}
         {!isAMP && (
           <>
             <FacebookAd placementId="1197074467354142_1956413074753607" />
             <AdMobBanner />
           </>
         )}
       </div>
     );
   }
