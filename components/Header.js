import LinkItem from "./LinkItem";

const navigation = [{ name: "Our instructors", href: "/instructors" }];

export default function Header() {
  return (
    <header>
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global navigation"
      >
        <div className="flex">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Time for adventure</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 lg:justify-center">
          {navigation.map((item) => (
            <LinkItem
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
              aria-current={item.current ? "page" : undefined}
              text={item.name}
            />
          ))}
        </div>
        <div></div>
      </nav>
    </header>
  );
}
