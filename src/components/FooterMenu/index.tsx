const menus = [
  { title: "Man", items: ["Casual", "Sport", "Modern", "Futurist"] },
  { title: "Woman", items: ["Casual", "Sport", "Modern", "Futurist"] },
  { title: "Outlet", items: ["Man", "Woman"] },
  { title: "Stores", items: ["Stores", "e-commerce"] },
  { title: "About Us", items: ["Our Story", "Mission"] },
];

export const FooterMenu = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-8 ">
      {menus.map(({ title, items }) => (
        <nav key={title}>
          <ul className="flex flex-col gap-4">
            <li>
              <p className="font-regular text-surface-alt text-xl">{title}</p>
            </li>
            {items.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="font-medium text-surface-alt text-xl hover:text-text-tertiary transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </div>
  );
};
