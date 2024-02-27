export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const params = ["f_auto", "c_limit", `w_${width}`, `q_${quality || "auto"}`];
  return `https://res.cloudinary.com/dcljf43v8/image/upload/${params.join(
    ","
  )}/v1707096048/github/news-portal/${src}`;
}
