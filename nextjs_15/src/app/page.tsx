import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Home  (props: Props) {
  return (
    <div>Home
      <Link href="/blog" className='text-bold'>BLOG</Link>
      <br />
      <Link href="/products">Products</Link>
    </div>
  )
}
