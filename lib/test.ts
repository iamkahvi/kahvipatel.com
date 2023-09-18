import { getBlogPostEntries, getAboutPageData } from "./source-markdown";
import { getBookShelfData } from "./source-contentful";

console.log(await getAboutPageData());
