import { PostFragment } from '../generated/graphql';
import { Card } from './card';
import { LargeCard } from './large-card';

type Props = {
	posts: PostFragment[];
	context: 'home';
};

export const Cards = ({ posts }: Props) => {
	if (posts.length == 0) {
		return <p>No Posts Yet!</p>;
	}

	const totalPosts = posts.length;
	const mainPost = posts[0];
	const restPosts = posts.slice(1, totalPosts);

	return (
		<>
			<section>
				<LargeCard post={mainPost} />
			</section>
			<section className="grid grid-cols-1 md:grid-cols-2 ">
				{restPosts.map((post) => (
					<Card key={post.id} post={post} />
				))}
				{restPosts.map((post) => (
					<Card key={post.id} post={post} />
				))}
				{restPosts.map((post) => (
					<Card key={post.id} post={post} />
				))}
			</section>
		</>
	);
};
