import classNames from 'classnames';
import { PostFullFragment } from '../generated/graphql';
import { DateFormatter } from './date-formatter';

type Props = {
	post: PostFullFragment;
};

export const PostHeader = ({
	post: {
		title,
		publishedAt,
		author,
		coverImage,
		slug,
		tags,
		comments: { totalDocuments: totalComments },
	},
}: Props) => {
	const postURL = `/${slug}`;
	const hasImage = !!coverImage?.url;
	return (
		<div className={classNames(hasImage && 'grid min-h-[50vh] lg:grid-cols-2')}>
			{!!coverImage?.url && (
				<img src={coverImage?.url} className="box h-full w-full object-cover" />
			)}
			<div className="box-lg h-full">
				<div className="flex h-full w-full flex-col justify-start gap-3 md:max-w-screen-md md:mx-auto">
					<h2 className="text-5xl font-bold leading-none transition-all md:text-7xl">{title}</h2>
					<p className="flex grow flex-row items-center justify-start gap-2">
						<p>By {author.name}</p>|
						<DateFormatter dateString={publishedAt} />|
						{totalComments > 0 && (
							<>
								<span>&middot;</span>
								{totalComments} comments
							</>
						)}
					</p>
					{!!tags && tags.length > 0 && (
						<ul className="flex flex-row flex-wrap items-center gap-2">
							{tags.map((tag) => (
								<li key={tag.id}>#{tag.slug}</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</div>
	);
};
