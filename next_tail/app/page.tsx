import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Home  (props: Props) {
  return (
    <div>Home
      <Link href="/blog" className='text-bold text-5xl text-blue-800'>BLOG</Link>
      <br />
      <Link href="/products">Products</Link>
      <div className='my-4'>
      <Link href="/articles/breaking-news-123?lang=en" className='border-2 py-2 px-4 text-slate-800 font-bold mx-2'>Read in English</Link>
      <Link href="/articles/breaking-news-123?lang=fr" className='border-2 py-2 px-4 text-slate-800 font-bold mx-2'>Read in French</Link>
      </div>
</div>
  )
}