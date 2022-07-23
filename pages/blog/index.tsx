import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";

type Posts = { posts: Post[] };
type Post = {
  slug: string;
  frontMatter: {
    title: string;
    description: string;
    date: string;
    words: number;
  };
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
                  <div className="flex flex-row items-center text-purple-500">
                    <h2 className=" text-xl font-bold">{frontMatter.title}</h2>
                    <ArrowCircleRightIcon className=" h-10 w-10  " />
                  </div>
                  <p className="">{frontMatter.description}</p>
                  <p className="italic">{`Tiempo de lectura: ${
                    Math.round(frontMatter.words / 200) + 3
                  } minutos`}</p>
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
