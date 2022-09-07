import React, {useState} from 'react';
import CommentCard from './CommentCard'
import API from '../utils/API';

function PostCard(post) {
	const [comment, setComment] = useState('')
	console.log(post.comments)
	const UserId = post.user.id
	const username = post.user.username
	const ParentId = post.id
	const PostId = ParentId
	const comment_body = comment



	const postComment = (comment_body, UserId, ParentId, PostId, username) => {
			// console.log('=================================')
			// console.log(comment_body)
			// console.log(UserId)
			// console.log(username)
			// console.log(PostId)
			// console.log(ParentId)
			// console.log('=================================')

		API.createNewComment(comment_body, UserId, ParentId, PostId, username)
	}

	return (
		<div className="py-4 px-2 m-2">
			<h1 className="font-bold text-xl ">{post.title}</h1>
			<h1 className="font-medium text-lg">{post.username}</h1>
			<h2 className="indent-4">{post.post_body}</h2>
			<h2 className="font-medium p-2 ">{post.createdAt}</h2>
			<input
				onChange={(e) => setComment(e.target.value)}
				value={comment}
				type="text"
				name="email"
				id="comment"
				className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-900 shadow-lg bg-zinc-100 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
			/>
			<button onClick={()=>postComment(comment_body, UserId, ParentId, PostId, username)} className="inline-flex items-center rounded-md border border-transparent bg-lime-400 px-4 py-2 text-base font-medium text-zinc shadow-sm hover:bg-lime-200 focus:outline-none focus:ring-2 focus:ring-lime-00 focus:ring-offset-2">Comment</button>
			<h1 className="font-bold text-md ">Comments:</h1>
			{post && post.comments && post.comments.length? (
				post.comments.map((comment) => ((<CommentCard comment = {comment} user={post.user} key={comment} />)))
			) : (
				<></>
			)}
		</div>
	);
}
export default PostCard;
