// Header.tsx
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

const BlogHeader: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const { data: session, status } = useSession();

  let left = (
    <div className="text-xl text-gray font-bold">
      <Link href="/blog" data-active={isActive("/blog")}>
        Feed
      </Link>
    </div>
  );

  let right = null;

  if (status === "loading") {
    left = (
      <div>
        <Link href="/blog" data-active={isActive("/blog")}>
          Feed
        </Link>
      </div>
    );
    right = (
      <div>
        <div>Validating session ...</div>
      </div>
    );
  }

  if (!session) {
    right = (
      <div className="text-xl text-blue-light font-bold">
        <Link href="/api/auth/signin" data-active={isActive("/signup")}>
          Log in
        </Link>
      </div>
    );
  }

  if (session) {
    left = (
      <div>
        <Link href="/blog" data-active={isActive("/blog")}>
          Feed
        </Link>
        <Link href="/blog/drafts" data-active={isActive("/blog/drafts")}>
          My drafts
        </Link>
      </div>
    );
    right = (
      <div>
        <div>
          {session.user!.name} {session.user!.email}
        </div>
        <Link href="/blog/create">
          <button>
            New post
          </button>
        </Link>
        <button onClick={() => signOut()}>
          Log out
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-row justify-between p-8">
      {left}
      {right}
    </div>
  );
};

export default BlogHeader;
