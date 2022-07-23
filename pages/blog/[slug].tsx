import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import type { InferGetStaticPropsType } from "next";

type GetStaticProps = {
  frontMatter: {};
  slug: string;
  content: string;
};
const PostPage = ({
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <article className="prose dark:prose-invert lg:prose-xl m-auto ">
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

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const markdownWithMeta = fs.readFileSync(
    path.join(`posts/${slug}.md`),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);

  const props: GetStaticProps = { frontMatter, slug, content };

  return {
    props,
  };
}

export default PostPage;
