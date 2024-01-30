import { PostFragment } from '../generated/graphql';
import { Card } from './card';
import { LargeCard } from './large-card';

type Props = {
	posts: PostFragment[];
	context: 'home';
};


/**
 * 
 * No Posts
 * - show nothing
 * 
 * 1 Post
 * - show Header
 * 
 * 2-5 Posts
 * - show all Hero Cards
 * 
 * 5+ Posts
 * - Hero + Small Cards
 * - - Hero can have 1-2 posts
 * - - Small Cards can have 2-4 posts
 * 
 * 
 * 1. First post has image -> big card
 * 2. First post
 * 
 */

export const Cards = ({ posts }: Props) => {
	if (posts.length == 0) {
		return <p>No Posts Yet!</p>;
	}

	const mainPost = posts[0];
	const restPosts = posts.slice(1, posts.length);

	return (
		<>
			<section>
				<LargeCard
					key={mainPost.id}
					title={mainPost.title}
					date={mainPost.publishedAt}
					author={{
						name: mainPost.author.name,
					}}
					brief={mainPost.brief}
					slug={mainPost.slug}
					coverImage={mainPost.coverImage}
					commentCount={mainPost.comments?.totalDocuments}
				/>
			</section>
			<section className="">
				{restPosts.map((post) => (
					<Card
						key={post.id}
						title={post.title}
						date={post.publishedAt}
						slug={post.slug}
						commentCount={post.comments?.totalDocuments}
					/>
				))}
				{restPosts.map((post) => (
					<Card
						key={post.id}
						title={post.title}
						date={post.publishedAt}
						slug={post.slug}
						commentCount={post.comments?.totalDocuments}
					/>
				))}
				{restPosts.map((post) => (
					<Card
						key={post.id}
						title={post.title}
						date={post.publishedAt}
						slug={post.slug}
						commentCount={post.comments?.totalDocuments}
					/>
				))}
			</section>
		</>
	);
};
