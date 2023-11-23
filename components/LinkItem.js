import Link from "next/link";

function LinkItem({ text, href }) {
  return <Link href={href}>{text}</Link>;
}

export default LinkItem;
