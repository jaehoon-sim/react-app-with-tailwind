export default function NavItem({ href, isActive, children }) {
  return (
    <li>
      <a
        href={href}
        className={`block px-3 py-2 rounded-md ${
          isActive ? "bg-indigo-500 text-white" : "bg-indigo-200"
        }`}
      >
        {children}
      </a>
    </li>
  );
}
