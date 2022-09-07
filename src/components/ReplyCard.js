import React, { useState } from 'react';
import API from '../utils/API';
import CommentCard from './CommentCard'

function PostCard(comment) {
	console.log(comment)
	const [reply, setReply] = useState('')
	const UserId = comment.UserId
	const username = comment.username
	const ParentId = comment.PostId
	const PostId = comment.id

	const postReply = (comment_body, UserId, ParentId, PostId, username) => {
		API.commentReply(comment_body, UserId, ParentId, PostId, username)
	}
	return (
		<div className="py-4 px-2 m-2">
			<h1 className="font-medium text-lg">{comment.username}</h1>
			<h2 className="indent-4">{comment.comment_body}</h2>
			<h2 className="font-medium p-2 ">{comment.createdAt}</h2>

			<input
				onChange={(e) => setReply(e.target.value)}
				value={reply}
				type="text"
				name="email"
				id="comment"
				className="block w-full min-w-0 flex-1 rounded-none rounded-r-md shadow-lg bg-zinc-100 border-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
			/>
			<button onClick={()=>postReply(reply, UserId, ParentId, PostId, username)} className="inline-flex items-center rounded-md border border-transparent bg-lime-400 px-4 py-2 text-base font-medium text-zinc shadow-sm hover:bg-lime-200 focus:outline-none focus:ring-2 focus:ring-lime-800 focus:ring-offset-2">Reply</button>
			<h1 className="font-bold text-md ">Replies:</h1>

			{comment.comment && comment.comment.replies.length? (
				comment.comment.replies.map((reply) => (
					<CommentCard {...reply} user={comment.user} key={reply._id} />
				))
			) : (
				<></>
			)}

		</div>
	);
}
export default PostCard;
