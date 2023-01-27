import {
  faBriefcase,
  faBullhorn,
  faLocation,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <div className="flex flex-col border border-gray-light p-4 text-gray-dark text-sm gap-2 shadow-sm hover:shadow-lg">
        <div className="text-xl font-bold text-black pb-2">{jobTitle}</div>
        <div className="flex flex-row items-center gap-1">
          <FontAwesomeIcon icon={faBriefcase} className="w-3 h-3" />
          {jobCategory}
        </div>
        <div className="flex flex-row items-center gap-1">
          <FontAwesomeIcon icon={faBullhorn} className="w-3 h-3" />
          {jobType}
        </div>
        <div className="flex flex-row items-center gap-1">
          <FontAwesomeIcon icon={faLocationDot} className="w-3 h-3"/>
          {jobLocation}
        </div>
        <div className="text-orange">More Details →</div>
      </div>
    </Link>
  );
}
