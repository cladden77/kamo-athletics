// Shared TypeScript types for Sanity data

export interface SanityImageAsset {
  _ref: string;
  _type: string;
}

export interface SanityImage {
  asset: SanityImageAsset;
  alt?: string;
}

export interface SanityColor {
  hex?: string;
}

export interface SanityBlockContent {
  _type: string;
  children: Array<{
    _type: string;
    text: string;
  }>;
}
