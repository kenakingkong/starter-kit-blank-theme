import Link from 'next/link';
import { PostFragment } from '../generated/graphql';
import { DateFormatter } from './date-formatter';

type Props = {
	post: PostFragment;
};

export const LargeCard = ({
	post: {
		title,
		publishedAt,
		author,
		brief,
		coverImage,
		slug,
		comments: { totalDocuments: totalComments },
	},
}: Props) => {
	const postURL = `/${slug}`;
	return (
		<Link href={postURL} title={title} className="group">
			<div className="grid min-h-[75vh] md:grid-cols-2">
				{coverImage?.url ? (
					<img src={coverImage?.url} className="h-full w-full box object-cover" />
				) : (
					<div className="box-sm bg-black dark:bg-white">
						<p className='text-white dark:text-black'>no img</p>
					</div>
				)}
				<div className="box-lg flex flex-col justify-between">
					<div className="grow space-y-6">
						<h2 className="dark-group-hover:text-purple-10 text-7xl font-bold leading-none transition-all group-hover:text-purple-600">
							{title}
						</h2>
						<p className="flex flex-row items-center gap-2">
							<p>By {author.name}</p>|
							<DateFormatter dateString={publishedAt} />|
							{totalComments > 0 && (
								<>
									<span>&middot;</span>
									{totalComments} comments
								</>
							)}
						</p>
					</div>
					<p className="font-light">{brief}</p>
				</div>
			</div>
		</Link>
	);
};
