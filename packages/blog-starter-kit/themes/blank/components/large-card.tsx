import Link from 'next/link';
import { PostCoverImage, User } from '../generated/graphql';
import { DateFormatter } from './date-formatter';

type Author = Pick<User, 'name'>;
type CoverImage = Pick<PostCoverImage, 'url'>;

type Props = {
	title: string;
	date: string;
	brief: string;
	author: Author;
	slug: string;
	commentCount: number;
	coverImage?: CoverImage;
};

export const LargeCard = ({ title, date, author, brief, coverImage, slug, commentCount }: Props) => {
	const postURL = `/${slug}`;

	return (
		<Link href={postURL} title={title} className="h-full">
			<div className="grid h-[60vh] md:grid-cols-2">
				<div className="border-2 border-black">
					<img src={coverImage?.url} />
				</div>
				<div className=" flex flex-col justify-between border-2 border-black p-8">
					<div className="grow space-y-6">
						<h2 className="text-lg leading-tight tracking-tight text-black dark:text-white">
							<p className="text-7xl font-bold leading-none">{title}</p>
						</h2>
						<p className="flex flex-row items-center gap-2">
							<p>By {author.name}</p>|
							<DateFormatter dateString={date} />|
							{commentCount > 0 && (
								<>
									<span>&middot;</span>
									{commentCount} comments
								</>
							)}
						</p>
					</div>
					<p className="font-ligth">{brief}</p>
				</div>
			</div>
		</Link>
	);
};
