import React from 'react';
import UserCard from './UserCard';

function FriendsList() {
	const friends = [
		{
			name: 'Leonard Krasner',
			handle: 'leonardkrasner',
			imageUrl:
				'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			href: '#',
		},
		{
			name: 'Floyd Miles',
			handle: 'floydmiles',
			imageUrl:
				'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			href: '#',
		},
		{
			name: 'Emily Selman',
			handle: 'emilyselman',
			imageUrl:
				'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			href: '#',
		},
		{
			name: 'Kristin Watson',
			handle: 'kristinwatson',
			imageUrl:
				'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			href: '#',
		},
	];
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
								{friends.map((item) => (
									<UserCard friend={item} />
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
