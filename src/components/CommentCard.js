import React, { useState } from 'react';
import API from '../utils/API';
import ReplyCard from './ReplyCard'

function PostCard(comment) {
	console.log(comment)
	const [reply, setReply] = useState('')
	const UserId = comment.user.id
	console.log(comment.user.id)
	const username = comment. user.username
	const ParentId = comment.comment.PostId
	const PostId = comment.comment.id

	const postReply = (comment_body, UserId, ParentId, PostId, username) => {
		API.commentReply(comment_body, UserId, ParentId, PostId, username)
	}
	return (
		<div className="py-4 px-2 m-2">
			<h1 className="font-medium text-lg">{comment.comment.username}</h1>
			<h2 className="indent-4">{comment.comment.comment_body}</h2>
			<h2 className="font-medium p-2 ">{comment.comment.createdAt}</h2>

				<input
					onChange={(e) => setReply(e.target.value)}
					value={reply}
					type="text"
					name="email"
					id="comment"
					className="block w-full min-w-0 py-2 flex-1 rounded-none rounded-r-md border-gray-900 shadow-lg bg-zinc-100 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
					placeholder='Write a reply...'/>
				<button onClick={()=>postReply(reply, UserId, ParentId, PostId, username)} className="inline-flex items-center rounded-md border border-transparent bg-lime-400 px-4 py-2 text-base font-medium text-zinc shadow-sm hover:bg-lime-200 focus:outline-none focus:ring-2 focus:ring-lime-800 focus:ring-offset-2">Reply</button>
				<h1 className="font-bold text-md ">Replies:</h1>

				{comment.comment && comment.comment.replies.length? (
					comment.comment.replies.map((reply) => (
						<ReplyCard {...reply} key={reply._id} user={comment.user} reply={reply}/>
					))
				) : (
					<></>
				)}

		</div>
	);
}
export default PostCard;
