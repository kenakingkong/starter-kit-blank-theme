import classNames from 'classnames';
import Link from 'next/link';
import { PostFragment } from '../generated/graphql';
import { DateFormatter } from './date-formatter';

type Props = {
	post: PostFragment;
};

export const Card = ({
	post: {
		title,
		publishedAt,
		slug,
		coverImage,
		comments: { totalDocuments: totalComments },
	},
}: Props) => {
	const postURL = `/${slug}`;

	const hasImage = !!coverImage?.url;

	return (
		<Link href={postURL} title={title} className="group">
			<div className={classNames('h-40', hasImage && 'grid md:grid-cols-3')}>
				{hasImage && <img src={coverImage.url} className="box h-full w-full object-cover" />}
				<div
					className={classNames(
						'box-sm flex h-full flex-col justify-between',
						hasImage && 'col-span-2',
					)}
				>
					<h2 className="dark-group-hover:text-purple-100 text-xl font-bold transition-all group-hover:text-purple-600">
						{title}
					</h2>
					<p className="flex flex-row items-center gap-2">
						<DateFormatter dateString={publishedAt} />
						{totalComments > 2 && (
							<>
								<span>&middot;</span>
								{totalComments} comments
							</>
						)}
					</p>
				</div>
			</div>
		</Link>
	);
};
