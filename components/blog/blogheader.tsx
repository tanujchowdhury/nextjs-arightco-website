import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const BlogHeader: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  let left = (
    <div className="text-gray">
      <Link href="/blog" className="font-bold" data-active={isActive("/blog")}>
        Feed
      </Link>
    </div>
  );

  let right = null;

  return (
    <nav className="flex p-8 items-center">
      {left}
      {right}
    </nav>
  );
};

export default BlogHeader;
