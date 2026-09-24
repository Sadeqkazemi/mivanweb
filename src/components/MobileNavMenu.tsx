"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "@/app/home.module.css";

type MobileNavMenuProps = {
  links: readonly (readonly string[])[];
  activeHref?: string;
};

export function MobileNavMenu({ links, activeHref }: MobileNavMenuProps) {
  const menuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    function closeMenu(event: PointerEvent) {
      const menu = menuRef.current;
      if (menu?.open && event.target instanceof Node && !menu.contains(event.target)) {
        menu.open = false;
      }
    }

    function closeMenuWithEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && menuRef.current?.open) {
        menuRef.current.open = false;
        menuRef.current.querySelector("summary")?.focus();
      }
    }

    document.addEventListener("pointerdown", closeMenu);
    document.addEventListener("keydown", closeMenuWithEscape);
    return () => {
      document.removeEventListener("pointerdown", closeMenu);
      document.removeEventListener("keydown", closeMenuWithEscape);
    };
  }, []);

  return (
    <details ref={menuRef} className={styles.mobileMenu}>
      <summary aria-label="Toggle navigation">☰</summary>
      <nav aria-label="Mobile navigation">
        {links.map(([label = "", href = ""]) => (
          <Link
            href={href}
            key={href}
            aria-current={href === activeHref ? "page" : undefined}
            onClick={() => { if (menuRef.current) menuRef.current.open = false; }}
          >
            {label}
          </Link>
        ))}
      </nav>
    </details>
  );
}
