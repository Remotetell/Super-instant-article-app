export default function DynamicArticle({ content, isAMP }) {
     return (
       <>
         {isAMP ? (
           // AMP Story/Article Mode
           <amp-story standalone>
             <amp-story-page id="page1">
               <amp-story-grid-layer template="vertical">
                 <h1 className="text-4xl font-bold">{content.title}</h1>
                 <amp-img
                   src={content.image}
                   width="720"
                   height="1280"
                   layout="responsive"
                   alt={content.title}
                 />
                 <amp-video
                   src={content.video}
                   width="720"
                   height="1280"
                   layout="responsive"
                   controls
                 />
               </amp-story-grid-layer>
             </amp-story-page>
           </amp-story>
         ) : (
           // Facebook Instant Articles-like Interactive Mode
           <article className="instant-article max-w-4xl mx-auto p-4">
             <h1 className="text-4xl font-bold">{content.title}</h1>
             <img src={content.image} alt={content.title} className="w-full h-auto my-4" />
             <video controls src={content.video} className="w-full h-auto my-4" />
           </article>
         )}
       </>
     );
   }
