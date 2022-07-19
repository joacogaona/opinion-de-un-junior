import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

import Link from "next/link";
const PostPage = ({ frontMatter: { title }, slug, content }) => {
  return (
    <div className="flex flex-col items-center">
      <Link href="/">
        <a className="self-start">Atrás</a>
      </Link>

      <article className="prose dark:prose-invert lg:prose-xl ">
        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
      </article>
    </div>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join(`posts/${slug}.md`),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontMatter,
      slug,
      content,
    },
  };
}

export default PostPage;
