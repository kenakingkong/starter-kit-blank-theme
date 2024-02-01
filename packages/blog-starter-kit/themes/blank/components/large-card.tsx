import Link from 'next/link';
import { PostFragment } from '../generated/graphql';
import { DateFormatter } from './date-formatter';

type Props = {
	post: PostFragment;
};

export const LargeCard = ({
	post: { title, publishedAt, author, brief, coverImage, slug },
}: Props) => {
	const postURL = `/${slug}`;
	return (
		<Link href={postURL} title={title} className="group">
			<div className="grid lg:min-h-[75vh] lg:grid-cols-2">
				{coverImage?.url ? (
					<img src={coverImage?.url} className="box h-full w-full object-cover" />
				) : (
					<div className="box-sm bg-black dark:bg-white">
						<p className="text-white dark:text-black">no img</p>
					</div>
				)}
				<div className="box-lg flex flex-col justify-between space-y-6">
					<div className="grow space-y-3">
						<h2 className="dark-group-hover:text-purple-10 text-5xl font-bold transition-all group-hover:text-purple-600 md:text-7xl md:leading-none">
							{title}
						</h2>
						<p className="flex flex-row items-center gap-2">
							<p>By {author.name}</p>|
							<DateFormatter dateString={publishedAt} />
						</p>
					</div>
					<p className="font-light">{brief}</p>
				</div>
			</div>
		</Link>
	);
};
