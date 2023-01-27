import Link from "next/link";

export default function JobCard({
  jobTitle,
  jobCategory,
  jobType,
  jobLocation,
  href,
}: {
  jobTitle: string;
  jobCategory: string;
  jobType: string;
  jobLocation: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <div className="flex flex-col">
        <div>{jobTitle}</div>
        <div>{jobCategory}</div>
        <div>{jobType}</div>
        <div>{jobLocation}</div>
        <div>More Details →</div>
      </div>
    </Link>
  );
}
