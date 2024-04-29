import Link from 'next/link'
import { getArticles } from '@/lib/newt'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Newt・Next.jsブログ',
  description: 'NewtとNext.jsを利用したブログです',
}

export default async function Home() {
  const articles = await getArticles()
  return (
    <main className='md:container md:mx-auto mt-4'>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article._id} className='font-medium text-blue-600 dark:text-blue-500 hover:underline mb-2'>
              <Link href={`articles/${article.slug}`}>{article.title}</Link>
            </li>
          )
        })}
      </ul>
    </main>
  )
}