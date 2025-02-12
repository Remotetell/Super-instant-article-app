import { useRouter } from 'next/router';

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
