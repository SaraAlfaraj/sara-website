import {
  logoOpenGraphImage,
  ogImageAlt,
  ogImageSize,
  ogImageContentType,
} from "@/lib/logo-og-image";

export const alt = ogImageAlt;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function Image() {
  return logoOpenGraphImage();
}
