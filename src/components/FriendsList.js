import React from 'react';
import UserCard from './UserCard';

function FriendsList(props) {
	console.log(props);
	return (
		<>
			{/* FRIENDS */}
			<section aria-labelledby="recent-hires-title">
				<div className="overflow-hidden rounded-lg bg-gray-200 shadow">
					<div className="p-6">
						<h2
							className="text-base font-medium text-gray-900"
							id="recent-hires-title"
						>
							Friends
						</h2>
						<div className="mt-6 flow-root">
							<ul role="list" className="-my-5 divide-y divide-gray-200">
								{props.friends.map((friend) => (
									<UserCard friend={friend} key={friend._id} />
								))}
							</ul>
						</div>
						
					</div>
				</div>
			</section>
		</>
	);
}
export default FriendsList;
