import React from 'react';

export default function UserCard(person) {
	return (
		<li key={person.username} className="py-4">
			<div className="flex items-center space-x-4">
				<div className="flex-shrink-0">
					<img className="h-8 w-8 rounded-full" src={person.friend.img_url} alt="" />
				</div>
				<div className="min-w-0 flex-1">
					<p className="truncate text-sm font-medium text-gray-900">
						{person.friend.email}
					</p>
					<p className="truncate text-sm text-gray-500">
						{'@' + person.friend.username}
					</p>
				</div>
				
			</div>
		</li>
	);
}
