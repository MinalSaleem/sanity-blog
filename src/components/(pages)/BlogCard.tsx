import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <section className="flex flex-col justify-between h-[630px] sm:w-[330px] md:w-[370px] lg:w-[402px] w-[250px] sm:mx-6 md:mx-9 rounded group hover:scale-105 transition-transform ease-out duration-700 shadow-lg shadow-zinc-400">
      <div className="relative h-[360px] w-full lg:w-[400px] flex-1">
        <Image
          src={urlFor(post.image).width(500).height(300).url()}
          alt="AI for everyone"
          fill
          className="object-contain rounded-t"
        />
      </div>

      <div className="flex flex-col justify-between px-2 py-4">
        <h2 className="text-2xl font-bold line-clamp-2 leading-tight mb-2 text-[#333333]">
          {post.title}
        </h2>
        <p className="mb-3 font-normal text-sm text-[#999999]">
          {new Date(post.publishedAt).toDateString()}
        </p>
        <p className="text-[#666666] line-clamp-3">{post.summary}</p>

        <Link
          href={`/blog/${post.slug}`}
          className="block py-1 text-start rounded text-[#7C4EE4] font-semibold mt-4"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}
