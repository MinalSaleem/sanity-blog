import BlogCard from "@/components/(pages)/BlogCard";
import { client } from "@/sanity/lib/client";

export const revalide = 10; //seconds

export default async function Blog() {
  const query = `*[_type == 'post']{
    title,image,summary,publishedAt,
      "slug":slug.current
    }`;
  const posts: Post[] = await client.fetch(query);
  console.log(posts);

  return (
    <main className="flex min-h-screen flex-col bg-[#FAFAFA] pt-5">
      <section className="text-center py-12 sm:px-3">
        <p className="text-[#666666] font-bold">OUR BLOGS</p>
        <h1 className="text-5xl font-bold my-9 text-center sm:text-3xl lg:text-5xl text-[#333333]">
          Find our all blogs from here
        </h1>
        <p className="text-[#666666]">
          our blogs are written from very research research and well known
          writers writers so that we can provide you
          <br /> the best blogs and articles articles for you to read them all
          along
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-20 my-16">
        {posts.map((post: Post) => (
          <BlogCard post={post} key={post.slug} />
        ))}
      </section>
    </main>
  );
}
