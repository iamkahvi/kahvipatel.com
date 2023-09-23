export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Query = {
  __typename?: "Query";
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  highlight?: Maybe<Highlight>;
  highlightCollection?: Maybe<HighlightCollection>;
  bookListItem?: Maybe<BookListItem>;
  bookListItemCollection?: Maybe<BookListItemCollection>;
  blogPost?: Maybe<BlogPost>;
  blogPostCollection?: Maybe<BlogPostCollection>;
  bookShelf?: Maybe<BookShelf>;
  bookShelfCollection?: Maybe<BookShelfCollection>;
  entryCollection?: Maybe<EntryCollection>;
};

export type QueryAssetArgs = {
  id: Scalars["String"];
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type QueryAssetCollectionArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
  where?: Maybe<AssetFilter>;
  order?: Maybe<Array<Maybe<AssetOrder>>>;
};

export type QueryHighlightArgs = {
  id: Scalars["String"];
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type QueryHighlightCollectionArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
  where?: Maybe<HighlightFilter>;
  order?: Maybe<Array<Maybe<HighlightOrder>>>;
};

export type QueryBookListItemArgs = {
  id: Scalars["String"];
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type QueryBookListItemCollectionArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
  where?: Maybe<BookListItemFilter>;
  order?: Maybe<Array<Maybe<BookListItemOrder>>>;
};

export type QueryBlogPostArgs = {
  id: Scalars["String"];
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type QueryBlogPostCollectionArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
  where?: Maybe<BlogPostFilter>;
  order?: Maybe<Array<Maybe<BlogPostOrder>>>;
};

export type QueryBookShelfArgs = {
  id: Scalars["String"];
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type QueryBookShelfCollectionArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
  where?: Maybe<BookShelfFilter>;
  order?: Maybe<Array<Maybe<BookShelfOrder>>>;
};

export type QueryEntryCollectionArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
  where?: Maybe<EntryFilter>;
  order?: Maybe<Array<Maybe<EntryOrder>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: "Asset";
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  contentType?: Maybe<Scalars["String"]>;
  fileName?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Int"]>;
  url?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: Maybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: Maybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: Maybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: Maybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: Maybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  transform?: Maybe<ImageTransformOptions>;
  locale?: Maybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: Maybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: Maybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type Sys = {
  __typename?: "Sys";
  id: Scalars["String"];
  spaceId: Scalars["String"];
  environmentId: Scalars["String"];
  publishedAt?: Maybe<Scalars["DateTime"]>;
  firstPublishedAt?: Maybe<Scalars["DateTime"]>;
  publishedVersion?: Maybe<Scalars["Int"]>;
};

export type ContentfulMetadata = {
  __typename?: "ContentfulMetadata";
  tags: Array<Maybe<ContentfulTag>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: "ContentfulTag";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type ImageTransformOptions = {
  /** Desired width in pixels. Defaults to the original image width. */
  width?: Maybe<Scalars["Dimension"]>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: Maybe<Scalars["Dimension"]>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: Maybe<Scalars["Quality"]>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: Maybe<Scalars["Int"]>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: Maybe<ImageResizeStrategy>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: Maybe<ImageResizeFocus>;
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: Maybe<Scalars["HexColor"]>;
  /** Desired image format. Defaults to the original image format. */
  format?: Maybe<ImageFormat>;
};

export enum ImageResizeStrategy {
  /** Resizes the image to fit into the specified dimensions. */
  Fit = "FIT",
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = "PAD",
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = "FILL",
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = "SCALE",
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = "CROP",
  /** Creates a thumbnail from the image. */
  Thumb = "THUMB",
}

export enum ImageResizeFocus {
  /** Focus the resizing on the center. */
  Center = "CENTER",
  /** Focus the resizing on the top. */
  Top = "TOP",
  /** Focus the resizing on the top right. */
  TopRight = "TOP_RIGHT",
  /** Focus the resizing on the right. */
  Right = "RIGHT",
  /** Focus the resizing on the bottom right. */
  BottomRight = "BOTTOM_RIGHT",
  /** Focus the resizing on the bottom. */
  Bottom = "BOTTOM",
  /** Focus the resizing on the bottom left. */
  BottomLeft = "BOTTOM_LEFT",
  /** Focus the resizing on the left. */
  Left = "LEFT",
  /** Focus the resizing on the top left. */
  TopLeft = "TOP_LEFT",
  /** Focus the resizing on the largest face. */
  Face = "FACE",
  /** Focus the resizing on the area containing all the faces. */
  Faces = "FACES",
}

export enum ImageFormat {
  /** JPG image format. */
  Jpg = "JPG",
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = "JPG_PROGRESSIVE",
  /** PNG image format */
  Png = "PNG",
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = "PNG8",
  /** WebP image format. */
  Webp = "WEBP",
  Avif = "AVIF",
}

export type AssetLinkingCollections = {
  __typename?: "AssetLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type AssetLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type EntryCollection = {
  __typename?: "EntryCollection";
  total: Scalars["Int"];
  skip: Scalars["Int"];
  limit: Scalars["Int"];
  items: Array<Maybe<Entry>>;
};

export type Entry = {
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
};

export type AssetCollection = {
  __typename?: "AssetCollection";
  total: Scalars["Int"];
  skip: Scalars["Int"];
  limit: Scalars["Int"];
  items: Array<Maybe<Asset>>;
};

export type AssetFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars["Boolean"]>;
  title?: Maybe<Scalars["String"]>;
  title_not?: Maybe<Scalars["String"]>;
  title_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  title_contains?: Maybe<Scalars["String"]>;
  title_not_contains?: Maybe<Scalars["String"]>;
  description_exists?: Maybe<Scalars["Boolean"]>;
  description?: Maybe<Scalars["String"]>;
  description_not?: Maybe<Scalars["String"]>;
  description_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  description_contains?: Maybe<Scalars["String"]>;
  description_not_contains?: Maybe<Scalars["String"]>;
  url_exists?: Maybe<Scalars["Boolean"]>;
  url?: Maybe<Scalars["String"]>;
  url_not?: Maybe<Scalars["String"]>;
  url_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  url_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  url_contains?: Maybe<Scalars["String"]>;
  url_not_contains?: Maybe<Scalars["String"]>;
  size_exists?: Maybe<Scalars["Boolean"]>;
  size?: Maybe<Scalars["Int"]>;
  size_not?: Maybe<Scalars["Int"]>;
  size_in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  size_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  size_gt?: Maybe<Scalars["Int"]>;
  size_gte?: Maybe<Scalars["Int"]>;
  size_lt?: Maybe<Scalars["Int"]>;
  size_lte?: Maybe<Scalars["Int"]>;
  contentType_exists?: Maybe<Scalars["Boolean"]>;
  contentType?: Maybe<Scalars["String"]>;
  contentType_not?: Maybe<Scalars["String"]>;
  contentType_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  contentType_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  contentType_contains?: Maybe<Scalars["String"]>;
  contentType_not_contains?: Maybe<Scalars["String"]>;
  fileName_exists?: Maybe<Scalars["Boolean"]>;
  fileName?: Maybe<Scalars["String"]>;
  fileName_not?: Maybe<Scalars["String"]>;
  fileName_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  fileName_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  fileName_contains?: Maybe<Scalars["String"]>;
  fileName_not_contains?: Maybe<Scalars["String"]>;
  width_exists?: Maybe<Scalars["Boolean"]>;
  width?: Maybe<Scalars["Int"]>;
  width_not?: Maybe<Scalars["Int"]>;
  width_in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  width_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  width_gt?: Maybe<Scalars["Int"]>;
  width_gte?: Maybe<Scalars["Int"]>;
  width_lt?: Maybe<Scalars["Int"]>;
  width_lte?: Maybe<Scalars["Int"]>;
  height_exists?: Maybe<Scalars["Boolean"]>;
  height?: Maybe<Scalars["Int"]>;
  height_not?: Maybe<Scalars["Int"]>;
  height_in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  height_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  height_gt?: Maybe<Scalars["Int"]>;
  height_gte?: Maybe<Scalars["Int"]>;
  height_lt?: Maybe<Scalars["Int"]>;
  height_lte?: Maybe<Scalars["Int"]>;
  OR?: Maybe<Array<Maybe<AssetFilter>>>;
  AND?: Maybe<Array<Maybe<AssetFilter>>>;
};

export type SysFilter = {
  id_exists?: Maybe<Scalars["Boolean"]>;
  id?: Maybe<Scalars["String"]>;
  id_not?: Maybe<Scalars["String"]>;
  id_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  id_contains?: Maybe<Scalars["String"]>;
  id_not_contains?: Maybe<Scalars["String"]>;
  publishedAt_exists?: Maybe<Scalars["Boolean"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  publishedAt_not?: Maybe<Scalars["DateTime"]>;
  publishedAt_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  publishedAt_gt?: Maybe<Scalars["DateTime"]>;
  publishedAt_gte?: Maybe<Scalars["DateTime"]>;
  publishedAt_lt?: Maybe<Scalars["DateTime"]>;
  publishedAt_lte?: Maybe<Scalars["DateTime"]>;
  firstPublishedAt_exists?: Maybe<Scalars["Boolean"]>;
  firstPublishedAt?: Maybe<Scalars["DateTime"]>;
  firstPublishedAt_not?: Maybe<Scalars["DateTime"]>;
  firstPublishedAt_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  firstPublishedAt_not_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  firstPublishedAt_gt?: Maybe<Scalars["DateTime"]>;
  firstPublishedAt_gte?: Maybe<Scalars["DateTime"]>;
  firstPublishedAt_lt?: Maybe<Scalars["DateTime"]>;
  firstPublishedAt_lte?: Maybe<Scalars["DateTime"]>;
  publishedVersion_exists?: Maybe<Scalars["Boolean"]>;
  publishedVersion?: Maybe<Scalars["Float"]>;
  publishedVersion_not?: Maybe<Scalars["Float"]>;
  publishedVersion_in?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  publishedVersion_not_in?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  publishedVersion_gt?: Maybe<Scalars["Float"]>;
  publishedVersion_gte?: Maybe<Scalars["Float"]>;
  publishedVersion_lt?: Maybe<Scalars["Float"]>;
  publishedVersion_lte?: Maybe<Scalars["Float"]>;
};

export type ContentfulMetadataFilter = {
  tags_exists?: Maybe<Scalars["Boolean"]>;
  tags?: Maybe<ContentfulMetadataTagsFilter>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: Maybe<Array<Maybe<Scalars["String"]>>>;
  id_contains_some?: Maybe<Array<Maybe<Scalars["String"]>>>;
  id_contains_none?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export enum AssetOrder {
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC",
  ContentTypeAsc = "contentType_ASC",
  ContentTypeDesc = "contentType_DESC",
  FileNameAsc = "fileName_ASC",
  FileNameDesc = "fileName_DESC",
  WidthAsc = "width_ASC",
  WidthDesc = "width_DESC",
  HeightAsc = "height_ASC",
  HeightDesc = "height_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

/** Content type for the highlights from my book [See type definition](https://app.contentful.com/spaces/rbthbhshshw9/content_types/highlight) */
export type Highlight = Entry & {
  __typename?: "Highlight";
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<HighlightLinkingCollections>;
  book?: Maybe<BookListItem>;
  slug?: Maybe<Scalars["String"]>;
  body?: Maybe<HighlightBody>;
};

/** Content type for the highlights from my book [See type definition](https://app.contentful.com/spaces/rbthbhshshw9/content_types/highlight) */
export type HighlightLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** Content type for the highlights from my book [See type definition](https://app.contentful.com/spaces/rbthbhshshw9/content_types/highlight) */
export type HighlightBookArgs = {
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
  where?: Maybe<BookListItemFilter>;
};

/** Content type for the highlights from my book [See type definition](https://app.contentful.com/spaces/rbthbhshshw9/content_types/highlight) */
export type HighlightSlugArgs = {
  locale?: Maybe<Scalars["String"]>;
};

/** Content type for the highlights from my book [See type definition](https://app.contentful.com/spaces/rbthbhshshw9/content_types/highlight) */
export type HighlightBodyArgs = {
  locale?: Maybe<Scalars["String"]>;
};

export type HighlightLinkingCollections = {
  __typename?: "HighlightLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type HighlightLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
};

/** A Book Item [See type definition](https://app.contentful.com/spaces/rbthbhshshw9/content_types/bookListItem) */
export type BookListItem = Entry & {
  __typename?: "BookListItem";
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<BookListItemLinkingCollections>;
  bookTitle?: Maybe<Scalars["String"]>;
  bookAuthor?: Maybe<Scalars["String"]>;
  dateFinished?: Maybe<Scalars["DateTime"]>;
  bookDescription?: Maybe<BookListItemBookDescription>;
};

/** A Book Item [See type definition](https://app.contentful.com/spaces/rbthbhshshw9/content_types/bookListItem) */
export type BookListItemLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** A Book Item [See type definition](https://app.contentful.com/spaces/rbthbhshshw9/content_types/bookListItem) */
export type BookListItemBookTitleArgs = {
  locale?: Maybe<Scalars["String"]>;
};

/** A Book Item [See type definition](https://app.contentful.com/spaces/rbthbhshshw9/content_types/bookListItem) */
export type BookListItemBookAuthorArgs = {
  locale?: Maybe<Scalars["String"]>;
};

/** A Book Item [See type definition](https://app.contentful.com/spaces/rbthbhshshw9/content_types/bookListItem) */
export type BookListItemDateFinishedArgs = {
  locale?: Maybe<Scalars["String"]>;
};

/** A Book Item [See type definition](https://app.contentful.com/spaces/rbthbhshshw9/content_types/bookListItem) */
export type BookListItemBookDescriptionArgs = {
  locale?: Maybe<Scalars["String"]>;
};

export type BookListItemLinkingCollections = {
  __typename?: "BookListItemLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  highlightCollection?: Maybe<HighlightCollection>;
  bookShelfCollection?: Maybe<BookShelfCollection>;
};

export type BookListItemLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type BookListItemLinkingCollectionsHighlightCollectionArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
  order?: Maybe<
    Array<Maybe<BookListItemLinkingCollectionsHighlightCollectionOrder>>
  >;
};

export type BookListItemLinkingCollectionsBookShelfCollectionArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
  order?: Maybe<
    Array<Maybe<BookListItemLinkingCollectionsBookShelfCollectionOrder>>
  >;
};

export type HighlightCollection = {
  __typename?: "HighlightCollection";
  total: Scalars["Int"];
  skip: Scalars["Int"];
  limit: Scalars["Int"];
  items: Array<Maybe<Highlight>>;
};

export enum BookListItemLinkingCollectionsHighlightCollectionOrder {
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export type BookShelfCollection = {
  __typename?: "BookShelfCollection";
  total: Scalars["Int"];
  skip: Scalars["Int"];
  limit: Scalars["Int"];
  items: Array<Maybe<BookShelf>>;
};

/** A Book Shelf [See type definition](https://app.contentful.com/spaces/rbthbhshshw9/content_types/bookShelf) */
export type BookShelf = Entry & {
  __typename?: "BookShelf";
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<BookShelfLinkingCollections>;
  title?: Maybe<Scalars["String"]>;
  intro?: Maybe<BookShelfIntro>;
  bookListCollection?: Maybe<BookShelfBookListCollection>;
};

/** A Book Shelf [See type definition](https://app.contentful.com/spaces/rbthbhshshw9/content_types/bookShelf) */
export type BookShelfLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** A Book Shelf [See type definition](https://app.contentful.com/spaces/rbthbhshshw9/content_types/bookShelf) */
export type BookShelfTitleArgs = {
  locale?: Maybe<Scalars["String"]>;
};

/** A Book Shelf [See type definition](https://app.contentful.com/spaces/rbthbhshshw9/content_types/bookShelf) */
export type BookShelfIntroArgs = {
  locale?: Maybe<Scalars["String"]>;
};

/** A Book Shelf [See type definition](https://app.contentful.com/spaces/rbthbhshshw9/content_types/bookShelf) */
export type BookShelfBookListCollectionArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
  where?: Maybe<BookListItemFilter>;
  order?: Maybe<Array<Maybe<BookShelfBookListCollectionOrder>>>;
};

export type BookShelfLinkingCollections = {
  __typename?: "BookShelfLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type BookShelfLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type BookShelfIntro = {
  __typename?: "BookShelfIntro";
  json: Scalars["JSON"];
  links: BookShelfIntroLinks;
};

export type BookShelfIntroLinks = {
  __typename?: "BookShelfIntroLinks";
  entries: BookShelfIntroEntries;
  assets: BookShelfIntroAssets;
  resources: BookShelfIntroResources;
};

export type BookShelfIntroEntries = {
  __typename?: "BookShelfIntroEntries";
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type BookShelfIntroAssets = {
  __typename?: "BookShelfIntroAssets";
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type BookShelfIntroResources = {
  __typename?: "BookShelfIntroResources";
  block: Array<ResourceLink>;
};

export type ResourceLink = {
  __typename?: "ResourceLink";
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: "ResourceSys";
  type: Scalars["String"];
  urn: Scalars["String"];
  linkType: Scalars["String"];
};

export type BookShelfBookListCollection = {
  __typename?: "BookShelfBookListCollection";
  total: Scalars["Int"];
  skip: Scalars["Int"];
  limit: Scalars["Int"];
  items: Array<Maybe<BookListItem>>;
};

export type BookListItemFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  bookTitle_exists?: Maybe<Scalars["Boolean"]>;
  bookTitle?: Maybe<Scalars["String"]>;
  bookTitle_not?: Maybe<Scalars["String"]>;
  bookTitle_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  bookTitle_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  bookTitle_contains?: Maybe<Scalars["String"]>;
  bookTitle_not_contains?: Maybe<Scalars["String"]>;
  bookAuthor_exists?: Maybe<Scalars["Boolean"]>;
  bookAuthor?: Maybe<Scalars["String"]>;
  bookAuthor_not?: Maybe<Scalars["String"]>;
  bookAuthor_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  bookAuthor_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  bookAuthor_contains?: Maybe<Scalars["String"]>;
  bookAuthor_not_contains?: Maybe<Scalars["String"]>;
  dateFinished_exists?: Maybe<Scalars["Boolean"]>;
  dateFinished?: Maybe<Scalars["DateTime"]>;
  dateFinished_not?: Maybe<Scalars["DateTime"]>;
  dateFinished_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  dateFinished_not_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  dateFinished_gt?: Maybe<Scalars["DateTime"]>;
  dateFinished_gte?: Maybe<Scalars["DateTime"]>;
  dateFinished_lt?: Maybe<Scalars["DateTime"]>;
  dateFinished_lte?: Maybe<Scalars["DateTime"]>;
  bookDescription_exists?: Maybe<Scalars["Boolean"]>;
  bookDescription_contains?: Maybe<Scalars["String"]>;
  bookDescription_not_contains?: Maybe<Scalars["String"]>;
  OR?: Maybe<Array<Maybe<BookListItemFilter>>>;
  AND?: Maybe<Array<Maybe<BookListItemFilter>>>;
};

export enum BookShelfBookListCollectionOrder {
  BookTitleAsc = "bookTitle_ASC",
  BookTitleDesc = "bookTitle_DESC",
  BookAuthorAsc = "bookAuthor_ASC",
  BookAuthorDesc = "bookAuthor_DESC",
  DateFinishedAsc = "dateFinished_ASC",
  DateFinishedDesc = "dateFinished_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export enum BookListItemLinkingCollectionsBookShelfCollectionOrder {
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export type BookListItemBookDescription = {
  __typename?: "BookListItemBookDescription";
  json: Scalars["JSON"];
  links: BookListItemBookDescriptionLinks;
};

export type BookListItemBookDescriptionLinks = {
  __typename?: "BookListItemBookDescriptionLinks";
  entries: BookListItemBookDescriptionEntries;
  assets: BookListItemBookDescriptionAssets;
  resources: BookListItemBookDescriptionResources;
};

export type BookListItemBookDescriptionEntries = {
  __typename?: "BookListItemBookDescriptionEntries";
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type BookListItemBookDescriptionAssets = {
  __typename?: "BookListItemBookDescriptionAssets";
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type BookListItemBookDescriptionResources = {
  __typename?: "BookListItemBookDescriptionResources";
  block: Array<ResourceLink>;
};

export type HighlightBody = {
  __typename?: "HighlightBody";
  json: Scalars["JSON"];
  links: HighlightBodyLinks;
};

export type HighlightBodyLinks = {
  __typename?: "HighlightBodyLinks";
  entries: HighlightBodyEntries;
  assets: HighlightBodyAssets;
  resources: HighlightBodyResources;
};

export type HighlightBodyEntries = {
  __typename?: "HighlightBodyEntries";
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type HighlightBodyAssets = {
  __typename?: "HighlightBodyAssets";
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type HighlightBodyResources = {
  __typename?: "HighlightBodyResources";
  block: Array<ResourceLink>;
};

export type HighlightFilter = {
  book?: Maybe<CfBookListItemNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  book_exists?: Maybe<Scalars["Boolean"]>;
  slug_exists?: Maybe<Scalars["Boolean"]>;
  slug?: Maybe<Scalars["String"]>;
  slug_not?: Maybe<Scalars["String"]>;
  slug_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  slug_contains?: Maybe<Scalars["String"]>;
  slug_not_contains?: Maybe<Scalars["String"]>;
  body_exists?: Maybe<Scalars["Boolean"]>;
  body_contains?: Maybe<Scalars["String"]>;
  body_not_contains?: Maybe<Scalars["String"]>;
  OR?: Maybe<Array<Maybe<HighlightFilter>>>;
  AND?: Maybe<Array<Maybe<HighlightFilter>>>;
};

export type CfBookListItemNestedFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  bookTitle_exists?: Maybe<Scalars["Boolean"]>;
  bookTitle?: Maybe<Scalars["String"]>;
  bookTitle_not?: Maybe<Scalars["String"]>;
  bookTitle_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  bookTitle_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  bookTitle_contains?: Maybe<Scalars["String"]>;
  bookTitle_not_contains?: Maybe<Scalars["String"]>;
  bookAuthor_exists?: Maybe<Scalars["Boolean"]>;
  bookAuthor?: Maybe<Scalars["String"]>;
  bookAuthor_not?: Maybe<Scalars["String"]>;
  bookAuthor_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  bookAuthor_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  bookAuthor_contains?: Maybe<Scalars["String"]>;
  bookAuthor_not_contains?: Maybe<Scalars["String"]>;
  dateFinished_exists?: Maybe<Scalars["Boolean"]>;
  dateFinished?: Maybe<Scalars["DateTime"]>;
  dateFinished_not?: Maybe<Scalars["DateTime"]>;
  dateFinished_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  dateFinished_not_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  dateFinished_gt?: Maybe<Scalars["DateTime"]>;
  dateFinished_gte?: Maybe<Scalars["DateTime"]>;
  dateFinished_lt?: Maybe<Scalars["DateTime"]>;
  dateFinished_lte?: Maybe<Scalars["DateTime"]>;
  bookDescription_exists?: Maybe<Scalars["Boolean"]>;
  bookDescription_contains?: Maybe<Scalars["String"]>;
  bookDescription_not_contains?: Maybe<Scalars["String"]>;
  OR?: Maybe<Array<Maybe<CfBookListItemNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfBookListItemNestedFilter>>>;
};

export enum HighlightOrder {
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export type BookListItemCollection = {
  __typename?: "BookListItemCollection";
  total: Scalars["Int"];
  skip: Scalars["Int"];
  limit: Scalars["Int"];
  items: Array<Maybe<BookListItem>>;
};

export enum BookListItemOrder {
  BookTitleAsc = "bookTitle_ASC",
  BookTitleDesc = "bookTitle_DESC",
  BookAuthorAsc = "bookAuthor_ASC",
  BookAuthorDesc = "bookAuthor_DESC",
  DateFinishedAsc = "dateFinished_ASC",
  DateFinishedDesc = "dateFinished_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/rbthbhshshw9/content_types/blogPost) */
export type BlogPost = Entry & {
  __typename?: "BlogPost";
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<BlogPostLinkingCollections>;
  postTitle?: Maybe<Scalars["String"]>;
  dateWritten?: Maybe<Scalars["DateTime"]>;
  postBody?: Maybe<BlogPostPostBody>;
};

/** [See type definition](https://app.contentful.com/spaces/rbthbhshshw9/content_types/blogPost) */
export type BlogPostLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/rbthbhshshw9/content_types/blogPost) */
export type BlogPostPostTitleArgs = {
  locale?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/rbthbhshshw9/content_types/blogPost) */
export type BlogPostDateWrittenArgs = {
  locale?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/rbthbhshshw9/content_types/blogPost) */
export type BlogPostPostBodyArgs = {
  locale?: Maybe<Scalars["String"]>;
};

export type BlogPostLinkingCollections = {
  __typename?: "BlogPostLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type BlogPostLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type BlogPostPostBody = {
  __typename?: "BlogPostPostBody";
  json: Scalars["JSON"];
  links: BlogPostPostBodyLinks;
};

export type BlogPostPostBodyLinks = {
  __typename?: "BlogPostPostBodyLinks";
  entries: BlogPostPostBodyEntries;
  assets: BlogPostPostBodyAssets;
  resources: BlogPostPostBodyResources;
};

export type BlogPostPostBodyEntries = {
  __typename?: "BlogPostPostBodyEntries";
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type BlogPostPostBodyAssets = {
  __typename?: "BlogPostPostBodyAssets";
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type BlogPostPostBodyResources = {
  __typename?: "BlogPostPostBodyResources";
  block: Array<ResourceLink>;
};

export type BlogPostCollection = {
  __typename?: "BlogPostCollection";
  total: Scalars["Int"];
  skip: Scalars["Int"];
  limit: Scalars["Int"];
  items: Array<Maybe<BlogPost>>;
};

export type BlogPostFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  postTitle_exists?: Maybe<Scalars["Boolean"]>;
  postTitle?: Maybe<Scalars["String"]>;
  postTitle_not?: Maybe<Scalars["String"]>;
  postTitle_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  postTitle_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  postTitle_contains?: Maybe<Scalars["String"]>;
  postTitle_not_contains?: Maybe<Scalars["String"]>;
  dateWritten_exists?: Maybe<Scalars["Boolean"]>;
  dateWritten?: Maybe<Scalars["DateTime"]>;
  dateWritten_not?: Maybe<Scalars["DateTime"]>;
  dateWritten_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  dateWritten_not_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  dateWritten_gt?: Maybe<Scalars["DateTime"]>;
  dateWritten_gte?: Maybe<Scalars["DateTime"]>;
  dateWritten_lt?: Maybe<Scalars["DateTime"]>;
  dateWritten_lte?: Maybe<Scalars["DateTime"]>;
  postBody_exists?: Maybe<Scalars["Boolean"]>;
  postBody_contains?: Maybe<Scalars["String"]>;
  postBody_not_contains?: Maybe<Scalars["String"]>;
  OR?: Maybe<Array<Maybe<BlogPostFilter>>>;
  AND?: Maybe<Array<Maybe<BlogPostFilter>>>;
};

export enum BlogPostOrder {
  PostTitleAsc = "postTitle_ASC",
  PostTitleDesc = "postTitle_DESC",
  DateWrittenAsc = "dateWritten_ASC",
  DateWrittenDesc = "dateWritten_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export type BookShelfFilter = {
  bookList?: Maybe<CfBookListItemNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars["Boolean"]>;
  title?: Maybe<Scalars["String"]>;
  title_not?: Maybe<Scalars["String"]>;
  title_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  title_contains?: Maybe<Scalars["String"]>;
  title_not_contains?: Maybe<Scalars["String"]>;
  intro_exists?: Maybe<Scalars["Boolean"]>;
  intro_contains?: Maybe<Scalars["String"]>;
  intro_not_contains?: Maybe<Scalars["String"]>;
  bookListCollection_exists?: Maybe<Scalars["Boolean"]>;
  OR?: Maybe<Array<Maybe<BookShelfFilter>>>;
  AND?: Maybe<Array<Maybe<BookShelfFilter>>>;
};

export enum BookShelfOrder {
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export type EntryFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  OR?: Maybe<Array<Maybe<EntryFilter>>>;
  AND?: Maybe<Array<Maybe<EntryFilter>>>;
};

export enum EntryOrder {
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}
