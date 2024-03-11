"use client";

import Link from "next/link";
import styles from "./menuLink.module.css";
import { usePathname } from "next/navigation";

interface IMenuLink {
	path: string;
	icon: JSX.Element;
	title: string;
}

const MenuLink = ({ item }: { item: IMenuLink }) => {
	const pathname = usePathname();

	return (
		<Link
			href={item.path}
			className={`${styles.container} ${
				pathname === item.path && styles.active
			}`}
		>
			{item.icon}
			{item.title}
		</Link>
	);
};

export default MenuLink;
