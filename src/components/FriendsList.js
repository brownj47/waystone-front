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
						<div className="mt-6">
							<a
								href="#"
								className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-lime-200"
							>
								View all
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
export default FriendsList;
