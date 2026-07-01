"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  placeholder: string;
};

export default function SearchBar({ placeholder }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentSearch = searchParams.get("search") || "";

      if (currentSearch === search.trim()) {
        return; // Nothing changed
      }

      const params = new URLSearchParams(searchParams);

      if (search.trim()) {
        params.set("search", search);
      } else {
        params.delete("search");
      }

      params.set("page", "1");

      router.replace(`/submission?${params.toString()}`);
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-green-500"
    />
  );
}
