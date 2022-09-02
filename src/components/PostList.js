import React, {useState, useEffect} from 'react';
import API from '../utils/API';
import PostCard from './PostCard';

function PostList() {
	const posts = [
		{ id: 1, content: 'post1' },
		{ id: 2, content: 'post2' },
		{ id: 3, content: 'post3' },
		{ id: 4, content: 'post4' },
		// More items...
];
// post hooks
	const [allPosts, setAllPosts] = useState([])
	useEffect(()=>{
		API.getAllPosts().then(res=>res.json()).then(posts=>{
			setAllPosts(posts)
		})
	}, [])
	
	return (
		<div className="grid grid-cols-1 gap-4 lg:col-span-2">
			{/* POST PANEL */}
			<section aria-labelledby="quick-links-title">
				<div className="bg-white w-full h-screen rounded-lg">
					<ul role="list" className="divide-y divide-lime-400">
						{allPosts.map((post) => (<PostCard {...post} key={post._id} />))}
					</ul>
				</div>
			</section>
		</div>
	);
}
export default PostList;
