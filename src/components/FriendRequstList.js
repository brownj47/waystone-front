import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import API from '../utils/API';

const people = [
	{
		name: 'Jane Cooper',
		title: 'Regional Paradigm Technician',
		role: 'Admin',
		email: 'janecooper@example.com',
		telephone: '+1-202-555-0170',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
	},
	{
		name: 'Jane Cooper',
		title: 'Regional Paradigm Technician',
		role: 'Admin',
		email: 'janecooper@example.com',
		telephone: '+1-202-555-0170',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
	},
	// More people...
];

export default function FriendRequestList(user) {
	console.log(user.user);
	const denyRequest = (UserId, SenderId) => {
		API.denyFriend(UserId, SenderId);
	};

	const acceptRequest = (UserId, SenderId) => {
		API.acceptFriend(UserId, SenderId);
	};
	return (
		<>
			<h1 className="text-lime-200 text-2xl">Friend Requests</h1>
			<ul
				role="list"
				className="overflow-hidden rounded-lg bg-gray-200 shadow p-2"
			>
				{user.user && user.user.inbox && user.user.inbox.length ? (
					user.user.inbox.map((person) => (
						<li
							key={person.email}
							className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow m-2"
						>
							<div className="flex w-full items-center justify-between space-x-6 p-6">
								<div className="flex-1 truncate">
									<div className="flex items-center space-x-3">
										<h3 className="truncate text-xl font-medium text-gray-900">
											{person.username}
										</h3>
									</div>
								</div>
								<img
									className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
									src={person.img_url}
									alt=""
								/>
							</div>
							<div>
								<div className="-mt-px flex divide-x divide-gray-200">
									<div className="flex w-0 flex-1">
										<button
											onClick={() => denyRequest(user.user.id, person.id)}
											className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-lg font-medium text-black hover:text-2xl bg-red-600"
										>
											<span className="ml-3">Deny</span>
										</button>
									</div>
									<div className="-ml-px flex w-0 flex-1">
										<button
											onClick={() => acceptRequest(user.user.id, person.id)}
											className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-lg font-medium bg-lime-400 hover:text-2xl"
										>
											<span className="ml-3">Accept</span>
										</button>
									</div>
								</div>
							</div>
						</li>
					))
				) : (
					<></>
				)}
			</ul>
		</>
	);
}
