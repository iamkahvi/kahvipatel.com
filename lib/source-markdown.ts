import { readdir } from "node:fs/promises";
import { join } from "node:path";
import matter from "gray-matter";
import moment from "moment";

export interface BlogPost {
  excerpt: string;
  html: string;
  frontmatter: {
    title: string;
    displayDate: string;
    displayDateSmall: string;
    description: string;
  };
}

export function getBlogPost(slug: string): BlogPost {
  return {};
}

export interface BlogPostEntry {
  year: string;
  displayDate: string;
  displayDateSmall: string;
  title: string;
  description: string;
}

const POSTS_PATH = join(process.cwd(), "content/posts");

export async function getBlogPostEntries(): Promise<BlogPostEntry[]> {
  const paths = await readdir(POSTS_PATH);

  const entryPromises = paths.map<Promise<BlogPostEntry>>(
    async (path: string) => {
      const file = Bun.file(join(POSTS_PATH, path));
      const text = await file.text();

      const frontMatter = matter(text);
      const { title, date, description } = frontMatter.data;

      const momentDate = moment(date);

      const year = momentDate.format("YYYY");
      const displayDate = momentDate.format("MMMM Do, YYYY");
      const displayDateSmall = momentDate.format("MMM D");

      return {
        title,
        year,
        displayDate,
        displayDateSmall,
        description,
      };
    }
  );

  const entries = Promise.all(entryPromises);

  return entries;
}

type Highlight = {
  book: string;
  author: string;
  quote: string;
  page: number | null;
  location: {
    start: number;
    end: number;
  };
  dateAdded: number;
};

export function getMarkdownHighlights(): Highlight[] {
  return [];
}

/**
 * @param {string | Buffer | URL} directoryPath
 * @returns {Promise<string[]>} - Array of long file paths
 */
async function getFiles(directoryPath: string): Promise<string[]> {
  try {
    const fileNames = await readdir(directoryPath); // returns a JS array of just short/local file-names, not paths.
    const filePaths = fileNames.map((fn) => join(directoryPath, fn));
    return filePaths;
  } catch (err) {
    console.error(err); // depending on your application, this `catch` block (as-is) may be inappropriate; consider instead, either not-catching and/or re-throwing a new Error with the previous err attached.
    return [];
  }
}
