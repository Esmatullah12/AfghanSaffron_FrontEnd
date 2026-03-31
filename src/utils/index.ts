export * from './localStorageHelpers';
const baseURL = import.meta.env.VITE_API_URL;

// utils/image.ts
export const resolveImageUrl = (img?: string) => {
  if (!img) return "";

  if (img.startsWith("http")) return img;

  return `${baseURL}/${img}`;
};