import React from 'react';

function PostCard(post) {
	return (
		<div className="py-4 px-2 m-2">
			<h1 className="font-bold text-xl ">{post.title}</h1>
			<h1 className="font-medium text-lg">{post.username}</h1>
			<h2 className="indent-4">{post.post_body}</h2>
			<h2 className="font-medium p-2 ">{post.createdAt}</h2>
		</div>
	);
}
export default PostCard;
