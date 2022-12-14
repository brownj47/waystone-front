import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import cloudinary from 'cloudinary-core';
import { Image } from 'cloudinary-react';

let logoUrl = '';

export default function CreateUser(props) {
	const handleSubmit = (e) => {
		e.preventDefault();
		props.handleUserCreate(username, email, password, bio, img_url);
		setUsername('');
		setEmail('');
		setPassword('');
		setBio('');
		setImg_url('');
	};
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [bio, setBio] = useState('');
	const [img_url, setImg_url] = useState('');
	const [token, setToken] = useState('');

	const [imageSelected, setImageSelected] = useState('');

	const uploadImage = () => {
		const formData = new FormData();
		formData.append('file', imageSelected);
		formData.append('upload_preset', 'waystone');

		Axios.post(
			'https://api.cloudinary.com/v1_1/diuo4ygwd/image/upload',
			formData
		).then((res) => {
			console.log(res);
			console.log(res.data.secure_url);
			setImg_url(res.data.secure_url);
			console.log(img_url);
		});
	};

	return (
		<div className="bg-zinc-800 p-5 ">
			<form
				onSubmit={handleSubmit}
				className="space-y-8 divide-y divide-gray-200 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 rounded-md border border-lime-400 "
			>
				<div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
					<div>
						<div>
							<h3 className="text-2xl font-bold leading-6 text-lime-400 mt-3">
								Profile
							</h3>
							<p className="mt-1 max-w-2xl text-sm text-lime-400">
								This information will be displayed publicly so be careful what
								you share.
							</p>
						</div>

						<div className="mt-6 space-y-6 sm:mt-5 sm:space-y-5">
							<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
								<label
									htmlFor="username"
									className="block text-lg font-medium text-lime-400 sm:mt-px sm:pt-2"
								>
									Username
								</label>
								<div className="mt-1 sm:col-span-2 sm:mt-0">
									<div className="flex max-w-lg rounded-md shadow-sm">
										<span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-zinc-800 sm:text-sm">
											What's Your Tavern Handle?
										</span>
										<input
											onChange={(e) => setUsername(e.target.value)}
											value={username}
											type="text"
											name="username"
											id="username"
											autoComplete="username"
											className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
										/>
									</div>
								</div>
							</div>
							<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
								<label
									htmlFor="password"
									className="block text-lg font-medium text-lime-400 sm:mt-px sm:pt-2"
								>
									Password: This will be your permanent password, choose wisely...
								</label>
								<div className="mt-1 sm:col-span-2 sm:mt-0">
									<div className="flex max-w-lg rounded-md shadow-sm">
										<span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-zinc-800 sm:text-sm">
											Password
										</span>
										<input
											onChange={(e) => setPassword(e.target.value)}
											value={password}
											type="text"
											name="password"
											id="password"
											autoComplete="password"
											className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
										/>
									</div>
								</div>
							</div>
							<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
								<label
									htmlFor="email"
									className="block text-lg font-medium text-lime-400 sm:mt-px sm:pt-2"
								>
									email
								</label>
								<div className="mt-1 sm:col-span-2 sm:mt-0">
									<div className="flex max-w-lg rounded-md shadow-sm">
										<span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-zinc-800 sm:text-sm">
											Email
										</span>
										<input
											onChange={(e) => setEmail(e.target.value)}
											value={email}
											type="text"
											name="email"
											id="email"
											autoComplete="email"
											className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
										/>
									</div>
								</div>
							</div>

							<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
								<label
									htmlFor="about"
									className="block text-lg font-medium text-lime-400 sm:mt-px sm:pt-2"
								>
									About
								</label>
								<div className="mt-1 sm:col-span-2 sm:mt-0">
									<textarea
										onChange={(e) => setBio(e.target.value)}
										value={bio}
										id="about"
										name="about"
										rows={3}
										className="block w-full max-w-lg rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
									/>
									<p className="mt-2 text-sm text-lime-400">
										Write a few sentences about yourself.
									</p>
								</div>
							</div>

							<div className="sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
								<Image
									cloudName="diuo4ygwd"
									publicId={img_url}
									style={{ width: 250 }}
								/>

								<label
									htmlFor="photo"
									className="block text-sm font-medium text-lime-400"
								>
									Photo
								</label>
								<div className="mt-1 sm:col-span-2 sm:mt-0">
									<div className="flex items-center">
										<span className="h-12 w-12 overflow-hidden rounded-full bg-gray-100">
											<svg
												className="h-full w-full text-lime-400"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
											</svg>
										</span>
										<input
											type="file"
											name="photo"
											id="photo"
											className=""
											onChange={(e) => {
												setImageSelected(e.target.files[0]);
											}}
										/>
										<button
											type="button"
											onClick={() => uploadImage()}
											className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-lime-400 py-2 px-4 text-sm font-medium text-zinc-800 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 "
										>
											Upload Picutre
										</button>
									</div>
								</div>
							</div>
							<div className="pt-5">
								<div className="flex justify-end">
									<Link to={'/waystone-front/login'}>
										<button
											type="button"
											className="rounded-md border border-gray-300 bg-zinc-500 py-2 px-4 text-sm font-medium text-lime-400 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mb-2"
										>
											Cancel
										</button>
									</Link>
									<button
										type="submit"
										className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-lime-400 py-2 px-4 text-sm font-medium text-zinc-800 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mb-2"
									>
										Create Account
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}
