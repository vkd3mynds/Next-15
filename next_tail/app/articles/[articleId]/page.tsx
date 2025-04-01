"use client";
import Link from "next/link";
import { use } from "react";

export default function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);

  return (
    <div>
      <h1>News Article #{articleId}</h1>
      <p>Reading in: {lang.toUpperCase()}</p>

      {/* Language switcher */}
      <div className="language-options">
        <Link href={`/articles/${articleId}?lang=en`}>English</Link> |
        <Link href={`/articles/${articleId}?lang=es`}>Español</Link> |
        <Link href={`/articles/${articleId}?lang=fr`}>Français</Link>
      </div>
    </div>
  );
}

// "use client"
// import Link from "next/link";
// import {use} from "react";
// export default  function NewsArticle({
//   params,
//   searchParams,
// }: {
//   params: Promise<{ articleId: string }>;
//   searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
// }) {
//     const { articleId } = use(params);
//     const { lang = "en" } = use(searchParams);

//   return (
//     <div>
//       <h1>News Article {articleId}</h1>
//       <p>Reading in {lang}</p>
//       <div className="my-4">
//         <Link
//           href={`/articles/${articleId}?lang=en`}
//           className="bg-amber-700 py-2 px-4 text-white mx-2"
//         >
//           English
//         </Link>
//         <Link
//           href={`/articles/${articleId}?lang=es`}
//           className="bg-amber-700 py-2 px-4 text-white mx-2"
//         >
//           Español
//         </Link>
//         <Link
//           href={`/articles/${articleId}?lang=fr`}
//           className="bg-amber-700 py-2 px-4 text-white mx-2"
//         >
//           Français
//         </Link>
//       </div>
//     </div>
//   );
// }