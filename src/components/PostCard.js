import React from 'react';

function PostCard(post) {
	console.log(post)
	return (
		<div className="py-4">
			<h1>{post.title}</h1>
			<h1>{post.username}</h1>
			<h2>{post.post_body}</h2>
			<h2>{post.createdAt}</h2>
		</div>
	);
}
export default PostCard;
