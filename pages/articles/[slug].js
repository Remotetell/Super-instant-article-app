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



import { useRouter } from 'next/router';

export default function Article({ content }) {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.description}</p>
    </div>
  );
}

export async function getStaticPaths() {
  // Fetch all possible slugs (e.g., from an API or CMS)
  const paths = [{ params: { slug: 'sample-article' } }];
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Fetch content based on the slug
  const content = {
    title: `Article: ${params.slug}`,
    description: "This is a sample article.",
  };
  return { props: { content } };
}
