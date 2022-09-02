import React from 'react';

function PostCard(content) {
	return (
		<li key={content.post.id} className="py-4">
			{content.post.content}
		</li>
	);
}
export default PostCard;
