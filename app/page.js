import Link from "next/link";
import StudentInfo from "./student-info";

export default function Home() {
  return (
    <main>
      <h1>CPRG-306: Web Development 2 Assignments</h1>
      <StudentInfo />
      <Link href="/week7">Week 7 </Link>
    </main>
  );
}
