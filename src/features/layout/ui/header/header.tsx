import { Logo } from '@/assets/icons/logo';
import { LanguageSwitcher } from '@/shared/ui/language-switcher/language-switcher';
import clsx from 'clsx';
import Link from 'next/link';
import styles from './header.module.css';
import { HeaderProps } from './header.props';

export const Header = ({ logoClassName, className, ...props }: HeaderProps) => {
	return (
		<header className={clsx(styles.header, className)} {...props}>
			<Link href="/">
				<Logo className={logoClassName} />
			</Link>
			<LanguageSwitcher />
		</header>
	);
};
