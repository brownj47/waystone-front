import React from 'react';

export default function UserCard(person) {
	return (
		<li key={person.friend.handle} className="py-4">
			<div className="flex items-center space-x-4">
				<div className="flex-shrink-0">
					<img
						className="h-8 w-8 rounded-full"
						src={person.friend.imageUrl}
						alt=""
					/>
				</div>
				<div className="min-w-0 flex-1">
					<p className="truncate text-sm font-medium text-gray-900">
						{person.friend.name}
					</p>
					<p className="truncate text-sm text-gray-500">
						{'@' + person.friend.handle}
					</p>
				</div>
				<div>
					<a
						href={person.friend.href}
						className="inline-flex items-center rounded-full border border-gray-300 bg-white px-2.5 py-0.5 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50"
					>
						View
					</a>
				</div>
			</div>
		</li>
	);
}
