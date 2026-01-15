// components/BlogList.js (Client Component)
"use client"

import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default function BlogList({  posts}: { posts: any }) {
  // Now you can use useState, onClick, etc.
  return (
    <div>
      {posts.map((post: { id: Key | null | undefined; title: { rendered: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }; }) => (
        <article key={post.id}>
          <h2>{post.title.rendered}</h2>
          {/* Your interactive elements here */}
        </article>
      ))}
    </div>
  );
}