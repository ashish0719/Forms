"use server";

type Props = {
  page?: number;
  limit?: number;
};

export async function getSubmissions({
  page = 1,
  limit = 100,
}: Props) {
  const response = await fetch(
    `${process.env.BASE_URL}/api/public/forms?page=${page}&limit=${limit}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch submissions");
  }

  return response.json();
}





export async function searchSubmissions(
  search: string,
  page: number = 1,
  limit: number = 10
) {
  try {
    const response = await fetch(
      `${process.env.BASE_URL}/api/public/forms?search=${encodeURIComponent(
        search
      )}&page=${page}&limit=${limit}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to search submissions");
    }

    return await response.json();
  } catch (error) {
    console.error(error);

    return {
      data: [],
      total: 0,
    };
  }
}


export async function getSubmissionById(id: string) {
  const response = await fetch(
    `${process.env.BASE_URL}/api/public/forms/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch submission");
  }

  const result = await response.json();

  
  return result.data ?? result;
}