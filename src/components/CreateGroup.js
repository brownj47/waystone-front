import React, { useState } from 'react';
const URL_PREFIX = 'https://waystoneapi.herokuapp.com/';

const CreateGroup = (props) => {
	const [groupName, setGroupName] = useState('');
	const [membersToAdd, setMembersToAdd] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch(`${URL_PREFIX}api/groups`, {
			method: 'POST',
			body: JSON.stringify({
				group_name: groupName,
				admin: props.user._id,
				members: [props.user._id],
				inbox: [],
				outbox: [...membersToAdd],
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				console.log('group created!');
			})
			.catch((err) => console.log(err));
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label
					htmlFor="group-name"
					className="block text-xl font-medium text-lime-200"
				>
					Group Name:
				</label>
				<br />
				<input
					type="text"
					id="group-name"
					name="groupname"
					value={groupName}
					onChange={(e) => {
						setGroupName(e.target.value);
					}}
					className="block w-full border-0 pt-2.5 text-xl font-medium placeholder-gray-500 px-2 rounded "
				/>

				<div className="flex-shrink-0 justify-items-end ">
					<button
						type="submit"
						className="inline-flex items-center rounded-md border border-transparent bg-lime-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					>
						Submit
					</button>
				</div>
			</form>
			<div className="border rounded p-2">
				<h1 className="text-lime-400 text-xl">Add to Group:</h1>
				{props.user.friends.map(function (friend) {
					return (
						<div key={friend._id}>
							<button
								onClick={(e) => {
									setMembersToAdd([...membersToAdd, friend._id]);
									e.target.showComponent = false;
								}}
								className="text-lime-200 text-lg"
							>
								{friend.username} ✅
							</button>

							<br />
						</div>
					);
				})}
			</div>
		</>
	);
};

export default CreateGroup;
