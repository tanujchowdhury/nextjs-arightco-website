import Link from "next/link";

export default function Day1TrainingHomePage() {
  return (
    <div className="p-10 flex flex-col gap-6">
      <Link className="absolute top-0 left-0 p-4" href="/training">
        ← Back to Training Home Page
      </Link>
      <h1 className="text-3xl pt-10">Day 1 Training</h1>
      <Link href="/training/day-1-training/overview">Overview</Link>
      <Link href="/training/day-1-training/it-manager-call">
        IT Manager Call
      </Link>
      <Link href="/training/day-1-training/hr-manager-call">
        HR Manager Call
      </Link>
      <Link href="/training/day-1-training/training-manager-call">
        Training Manager Call
      </Link>
      <Link href="/training/day-1-training/training-manager-call">
        Bill Training (Formally Bill.com)
      </Link>
    </div>
  );
}
