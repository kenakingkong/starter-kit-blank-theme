import classNames from 'classnames';
import { PostFullFragment } from '../generated/graphql';
import { DateFormatter } from './date-formatter';

type Props = {
	post: PostFullFragment;
};

export const PostHeader = ({
	post: { title, publishedAt, author, coverImage, slug, tags },
}: Props) => {
	const postURL = `/${slug}`;
	const hasImage = !!coverImage?.url;
	return (
		<div className={classNames(hasImage && 'grid min-h-[50vh] lg:grid-cols-2')}>
			{!!coverImage?.url && (
				<img src={coverImage?.url} className="box h-full w-full object-cover" />
			)}
			<div className="box-lg h-full">
				<div className="flex h-full w-full flex-col justify-start gap-3 md:mx-auto md:max-w-screen-md">
					<h2 className="text-5xl font-bold transition-all md:text-7xl md:leading-none">{title}</h2>
					<p className="flex flex-row items-center justify-start gap-2">
						<p>By {author.name}</p>|
						<DateFormatter dateString={publishedAt} />
					</p>
					{!!tags && tags.length > 0 && (
						<ul className="flex flex-row flex-wrap items-end grow gap-2">
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
