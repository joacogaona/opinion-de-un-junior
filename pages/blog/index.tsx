import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
type Posts = { posts: Post[] };
type Post = {
  slug: string;
  frontMatter: { title: string; description: string; date: string };
};
const Blog = ({ posts }: Posts) => {
  return (
    <div className="h-screen flex flex-col justify-center">
      {posts.map((post) => {
        const { frontMatter, slug } = post;
        return (
          <div
            key={slug}
            className=" border-purple-500 border-2 rounded-xl p-2"
          >
            <Link href={`/blog/${slug}`}>
              <a>
                <div>
                  <h2 className="text-purple-500 text-xl font-bold">
                    {frontMatter.title}
                  </h2>
                  <p className="">{frontMatter.description}</p>
                </div>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontMatter } = matter(markdownWithMeta);
    return { slug, frontMatter };
  });

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
