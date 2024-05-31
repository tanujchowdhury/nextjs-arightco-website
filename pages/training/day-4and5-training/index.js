import Link from "next/link";

export default function Day4and5TrainingHomePage() {
  return (
    <div className="p-10 flex flex-col gap-6">
      <Link className="absolute top-0 left-0 p-4" href="/training">
        ← Back to Training Home Page
      </Link>
      <h1 className="text-3xl pt-10">Day 4 & 5 Training</h1>
      <Link href="/training/day-4and5-training/overview">Overview</Link>
    </div>
  );
}
