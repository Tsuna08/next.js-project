import Link from "next/link";

function LinkItem({ text, href, className }) {
  return (
    <Link href={href} className={className}>
      {text}
    </Link>
  );
}

export default LinkItem;
