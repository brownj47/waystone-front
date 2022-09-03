import { useState } from 'react';
import API from '../utils/API';

export default function CreatePost(props) {
	const [title, setTitle] = useState('');
	const [post_body, setPost_body] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		const post = {
			title,
			post_body,
			username: props.user.username,
			userId: props.user._id,
			GroupId: 1,
		};
		console.log(post);
		return API.createNewPost(
			post.title,
			post.post_body,
			post.username,
			post.GroupId
		);
	};
	return (
		<>
			<h1>New Post</h1>
			<form action="#" className="relative" onSubmit={handleSubmit}>
				<div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm ">
					<label htmlFor="title" className="sr-only">
						Title
					</label>
					<input
						type="text"
						name="title"
						id="title"
						className="block w-full border-0 pt-2.5 text-xl font-medium placeholder-gray-500 "
						placeholder="Title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<label htmlFor="description" className="sr-only">
						Description
					</label>
					<textarea
						rows={2}
						name="description"
						id="description"
						className="block w-full h-20 resize-none border-0 py-1 placeholder-gray-500  sm:text-sm"
						placeholder="Write a description..."
						value={post_body}
						onChange={(e) => setPost_body(e.target.value)}
					/>

					{/* Spacer element to match the height of the toolbar */}
					<div>
						<div className="h-px" />
						<div className="py-2">
							<div className="py-px">
								<div className="h-9" />
							</div>
						</div>
					</div>
				</div>

				<div className="absolute inset-x-px bottom-0">
					{/* Actions: These are just examples to demonstrate the concept, replace/wire these up however makes sense for your project. */}
					<div className="flex flex-nowrap justify-end space-x-2 py-2 px-2 sm:px-3"></div>
					<div className="flex items-center justify-between space-x-3 border-t border-gray-400 px-2 py-2 sm:px-3">
						<div className="flex">
							<button
								type="button"
								className="group -my-2 -ml-2 inline-flex items-center rounded-full px-3 py-2 text-left text-gray-400"
							></button>
						</div>
						<div className="flex-shrink-0 ">
							<button
								type="submit"
								className="inline-flex items-center rounded-md border border-transparent bg-lime-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							>
								Create
							</button>
						</div>
					</div>
				</div>
			</form>
		</>
	);
}
