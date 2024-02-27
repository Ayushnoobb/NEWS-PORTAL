export const getImgSrc = (endpoint: string) => {
  const CLOUDINARY_URL =
    "https://res.cloudinary.com/dcljf43v8/image/upload/v1707096048/github/news-portal/";

  return `${CLOUDINARY_URL}${endpoint}`;
};
