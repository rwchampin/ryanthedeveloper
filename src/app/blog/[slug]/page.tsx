import BasePage from '@/app/BasePage'
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
    params: { slug: string }
  }

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    const slug = params.slug
   
    // fetch data
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/blog-posts/${slug}`)
    const results = await res.json()
    const post = results;
    // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || []
   
    return {
      title: post.title,
        description: post.description,
        keywords: post.keywords,
        openGraph: {
            title: post.title,
            description: post.description,
            siteName: 'Ryan The Developer',
            type: 'article',
        },
        // canonicla, article, etc
        
    }
  }

export default async function Page({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/blog-posts/${slug}`)
    const results = await res.json()
    const post = results;
  return (
    <BasePage
        title={post.title}
        >
        <article className="post prose prose-lg text-gray-500 mx-auto">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
        </BasePage>
  )
}
