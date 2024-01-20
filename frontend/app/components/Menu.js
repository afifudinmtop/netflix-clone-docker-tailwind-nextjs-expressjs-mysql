import Link from "next/link";

export default function Menu(props) {
  return (
    <Link
      href={props.href}
      className={
        props.xclass + " my-auto text-slate-50 no-underline me-5 text-sm"
      }
    >
      {props.menu}
    </Link>
  );
}
