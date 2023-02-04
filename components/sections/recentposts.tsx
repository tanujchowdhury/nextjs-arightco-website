import React from "react";

export default function RecentArticles({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full min-[1350px]:px-32 items-stretch">
      {children}
    </div>
  );
}
