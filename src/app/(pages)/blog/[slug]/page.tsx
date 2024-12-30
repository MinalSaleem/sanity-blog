import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import CommentsSection from "@/components/(pages)/CommentSection";

export const revalide = 10; //seconds

// static paths for dynamic routes to be generated at build time
export async function getStaticParams() {
    const query = `*[_type == 'post']{"slug": slug.current}`;
    const slugs = await client.fetch(query);
    const slugRoutes = slugs.map((item: { slug: string }) =>item.slug);
  
    return slugRoutes.map((slug: string) => ({ slug }));
  }

export default async function page({params:{slug}}:{params:{slug:string}}) {
  
  const query = `*[_type == 'post' && slug.current=="${slug}" ]{
    title,summary,image,content,publishedAt,
    author->{name,about,image}
    }[0]`;

  const post = await client.fetch(query);
  console.log(post);

  return (
    <article className="pt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8 justify-center bg-[#FAFAFA]">
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-center text-[#333333]">
        {post.title}
      </h1>

      <div className="flex justify-center my-6">
        <Image
          src={urlFor(post.image).url()}
          width={800}
          height={800}
          alt="AI for everyone"
          className="rounded w-full h-auto md:w-[800px] md:h-[500px] lg:w-[1232px] lg:h-[680px] object-contain"
        />
      </div>

      <p className="font-semibold text-3xl text-[#333333]">
        Published:{" "}
        <span
          className="font-normal text-[#333333]
      "
        >
          {new Date(post.publishedAt).toDateString()}
        </span>
      </p>

      <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
        <Image
          src={urlFor(post.author.image).url()}
          width={200}
          height={200}
          alt="author"
          className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
        />
        <div className="flex flex-col gap-1 pt-4 ">
          <h3 className="text-xl font-semibold text-[#333333]">
            Author:{" "}
            <span className="text-xl font-medium">{post.author.name}</span>
          </h3>
          <p className="italic text-xs xs:text-sm sm:text-base text-[#333333]">
            {post.author.about}
          </p>
        </div>
      </section>

      <section className="text-lg leading-normal text-[#333333]">
        <PortableText value={post.content} />
      </section>

      <section>
        <h2 className="text-xl xs:text-2xl md:text-3xl font-semibold text-[#333333] mb-5">
          Summary:
        </h2>
        <p className="text-base md:text-xl leading-relaxed text-justify text-[#333333]">
          {post.summary}
        </p>
      </section>

      <CommentsSection />
    </article>
  );
}
