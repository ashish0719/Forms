export async function getPage(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/pages?filters[slug][$eq]=${slug}&populate=*`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  return data.data[0];
}