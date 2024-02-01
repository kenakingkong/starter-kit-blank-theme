import Link from 'next/link';
import { PublicationNavbarItem } from '../generated/graphql';
import { useAppContext } from './contexts/appContext';

function hasUrl(
	navbarItem: PublicationNavbarItem,
): navbarItem is PublicationNavbarItem & { url: string } {
	return !!navbarItem.url && navbarItem.url.length > 0;
}

export const Header = () => {
	const { publication } = useAppContext();

	const navbarItems = publication.preferences.navbarItems.filter(hasUrl);

	return (
		<header>
			<nav className="box-sm flex flex-wrap w-full items-center justify-between gap-6">
				<h1 className="text-lg font-bold leading-none md:text-2xl">
					<Link href="/" aria-label={`${publication.author.name}'s blog home page`}>
						{publication.title}
					</Link>
				</h1>
				<ul className="flex flex-wrap items-center gap-3">
					{navbarItems.map((item) => (
						<li key={item.url}>
							<Link
								href={item.url}
								target="_blank"
								rel="noopener noreferrer"
								className="text-xs font-medium md:text-base"
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};
