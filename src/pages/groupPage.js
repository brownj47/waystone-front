import { Fragment, useState, useEffect } from 'react';
import API from '../utils/API';
import { Menu, Popover, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import {
	AcademicCapIcon,
	BanknotesIcon,
	Bars3Icon,
	BellIcon,
	CheckBadgeIcon,
	ClockIcon,
	ReceiptRefundIcon,
	UsersIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import FriendsList from '../components/FriendsList';
import CreateGroup from '../components/CreateGroup';
import PostList from '../components/PostList';
import { Image } from 'cloudinary-react';
import CreatePost from '../components/CreatePost';

export default function GroupPage(props) {
	// user state and hooks
	console.log(props);
	const [userObj, setUserObj] = useState({});
	const [userGroupsObj, setUserGroupsObj] = useState([]);

	const [groupTab, setGroupTab] = useState('');

	useEffect(() => {
		API.getOneUser(props.user.UserId)
			.then((res) => res.json())
			.then((user) => {
				setUserObj(user);
				console.log(user);
			});

		API.getUsersGroups(props.user.UserId)
			.then((res) => res.json())
			.then((groups) => {
				setUserGroupsObj(groups);

				console.log('Users Groups:');
				console.log(groups);
			});
	}, [props.user.UserId]);

	return (
		<>
			<div className="min-h-full">
				<Popover
					as="header"
					className="bg-gradient-to-r from-lime-500 to-lime-400 pb-24"
				>
					{({ open }) => (
						<>
							<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
								<div className="relative flex flex-wrap items-center justify-center lg:justify-between">
									{/* Logo */}
									<div className="absolute left-0 flex-shrink-0 py-5 lg:static">
										<img
											className=" h-12 w-auto bg-lime-300 rounded-full m-4"
											// src="https://tailwindui.com/img/logos/workflow-mark.svg?color=lime&4hade=600"

											src="https://i.ibb.co/zmHz8jh/waystone.png"
											alt="Workflow"
										/>
										<Image
											cloudName="diuo4ygwd"
											publicId={userObj.img_url}
											className="rounded-full w-auto h-60"
										/>
									</div>
									<h1 className="text-3xl font-semibold">
										Hello {userObj.username}!
									</h1>

									{/* Right section on desktop */}
									<div className="hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5">
										<button
											type="button"
											className="flex-shrink-0 rounded-full p-1 text-lime-800 hover:bg-lime-400 hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
										>
											<span className="sr-only">View notifications</span>
											<BellIcon className="h-6 w-6" aria-hidden="true" />
										</button>

										{/* Profile dropdown */}
										<Menu as="div" className="relative ml-4 flex-shrink-0">
											<div>
												<Menu.Button className="flex rounded-full bg-lime-200 text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100">
													<span className="sr-only">Open user menu</span>
													<img
														className="h-8 w-8 rounded-full"
														src={userObj.img_url}
														alt="Profile Pic"
													/>
												</Menu.Button>
											</div>
											<Transition
												as={Fragment}
												leave="transition ease-in duration-75"
												leaveFrom="transform opacity-100 scale-100"
												leaveTo="transform opacity-0 scale-95"
											>
												<Menu.Items className="absolute -right-2 z-10 mt-2 w-48 origin-top-right rounded-md bg-lime-200 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
													<Menu.Item>
														<a
															href={'/waystone-front/profile'}
															className="block px-4 py-2 text-sm text-gray-700"
															onClick={() => {}}
														>
															Your Profile
														</a>
													</Menu.Item>
													<Menu.Item>
														<a
															href={'#'}
															className="block px-4 py-2 text-sm text-gray-700"
															onClick={props.handleLogout}
														>
															Logout
														</a>
													</Menu.Item>
												</Menu.Items>
											</Transition>
										</Menu>
									</div>

									<div className="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20">
										<div className="lg:grid lg:grid-cols-3 lg:items-center lg:gap-8">
											{/* Left nav */}
											<div className="hidden lg:col-span-2 lg:block">
												<nav className="flex space-x-4">
													<Link
														className="text-zinc-800 text-sm font-medium rounded-md bg-lime-200 bg-opacity-0 px-3 py-2 hover:bg-opacity-10"
														to={'/waystone-front/home'}
													>
														Home
													</Link>
													<Link
														className="text-zinc-800 text-sm font-medium rounded-md bg-lime-200 bg-opacity-0 px-3 py-2 hover:bg-opacity-10"
														to={'/waystone-front/profile'}
													>
														Profile
													</Link>

													<Link
														className="text-zinc-800 text-sm font-medium rounded-md bg-lime-200 bg-opacity-0 px-3 py-2 hover:bg-opacity-10"
														to={'/waystone-front/groups'}
													>
														Groups
													</Link>
												</nav>
											</div>
											<div className="px-12 lg:px-0">
												{/* Search */}
												<div className="mx-auto w-full max-w-xs lg:max-w-md">
													<label htmlFor="search" className="sr-only">
														Search
													</label>
													<div className="relative text-white focus-within:text-gray-600">
														<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
															<MagnifyingGlassIcon
																className="h-5 w-5"
																aria-hidden="true"
															/>
														</div>
														<input
															id="search"
															className="block w-full rounded-md border border-transparent bg-lime-200 bg-opacity-20 py-2 pl-10 pr-3 leading-5 text-white placeholder-white focus:border-transparent focus:bg-opacity-100 focus:text-gray-900 focus:placeholder-gray-500 focus:outline-none focus:ring-0 sm:text-sm"
															placeholder="Search"
															type="search"
															name="search"
														/>
													</div>
												</div>
											</div>
										</div>
									</div>

									{/* Menu button */}
									<div className="absolute right-0 flex-shrink-0 lg:hidden">
										{/* Mobile menu button */}
										<Popover.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-zinc-800 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
											<span className="sr-only">Open main menu</span>
											{open ? (
												<XMarkIcon
													className="block h-6 w-6"
													aria-hidden="true"
												/>
											) : (
												<Bars3Icon
													className="block h-6 w-6"
													aria-hidden="true"
												/>
											)}
										</Popover.Button>
									</div>
								</div>
							</div>

							<Transition.Root as={Fragment}>
								<div className="lg:hidden">
									<Transition.Child
										as={Fragment}
										enter="duration-150 ease-out"
										enterFrom="opacity-0"
										enterTo="opacity-100"
										leave="duration-150 ease-in"
										leaveFrom="opacity-100"
										leaveTo="opacity-0"
									>
										<Popover.Overlay className="fixed inset-0 z-20 bg-black bg-opacity-25" />
									</Transition.Child>

									<Transition.Child
										as={Fragment}
										enter="duration-150 ease-out"
										enterFrom="opacity-0 scale-95"
										enterTo="opacity-100 scale-100"
										leave="duration-150 ease-in"
										leaveFrom="opacity-100 scale-100"
										leaveTo="opacity-0 scale-95"
									>
										<Popover.Panel
											focus
											className="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition"
										>
											<div className="divide-y divide-zinc-800 rounded-lg bg-lime-200 shadow-lg ring-1 ring-black ring-opacity-5">
												<div className="pt-3 pb-2">
													<div className="flex items-center justify-between px-4">
														<div>
															<img
																className="h-8 w-auto"
																src="https://tailwindui.com/img/logos/workflow-mark.svg?color=cyan&shade=600"
																alt="Workflow"
															/>
														</div>
														<div className="-mr-2">
															<Popover.Button className="inline-flex items-center justify-center rounded-md bg-lime-200 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-800">
																<span className="sr-only">Close menu</span>
																<XMarkIcon
																	className="h-6 w-6"
																	aria-hidden="true"
																/>
															</Popover.Button>
														</div>
													</div>
													<div className="mt-3 space-y-1 px-2">
														<Link
															className="text-zinc-800 text-sm font-medium rounded-md bg-lime-200 bg-opacity-0 px-3 py-2 hover:bg-opacity-10"
															to={'/waystone-front/home'}
														>
															Home
														</Link>
														<Link
															className="text-zinc-800 text-sm font-medium rounded-md bg-lime-200 bg-opacity-0 px-3 py-2 hover:bg-opacity-10"
															to={'/waystone-front/profile'}
														>
															Profile
														</Link>
														<Link
															className="text-zinc-800 text-sm font-medium rounded-md bg-lime-200 bg-opacity-0 px-3 py-2 hover:bg-opacity-10"
															to={'/waystone-front/groups'}
														>
															Groups
														</Link>
													</div>
												</div>
												<div className="pt-4 pb-2">
													<div className="flex items-center px-5">
														<div className="flex-shrink-0">
															<img
																className="h-10 w-10 rounded-full"
																src={userObj.imageUrl}
																alt="Profile pic"
															/>
														</div>
														<div className="ml-3 min-w-0 flex-1">
															<div className="truncate text-base font-medium text-gray-800">
																{userObj.name}
															</div>
															<div className="truncate text-sm font-medium text-gray-500">
																{userObj.email}
															</div>
														</div>
														<button
															type="button"
															className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-zinc-800 focus:ring-offset-2"
														>
															<span className="sr-only">
																View notifications
															</span>
															<BellIcon
																className="h-6 w-6"
																aria-hidden="true"
															/>
														</button>
													</div>
													<div className="mt-3 space-y-1 px-2">
														<a
															href={'/waystone-front/profile'}
															className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
														>
															Your Profile
														</a>
														<a
															href={'#'}
															className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
															onClick={props.handleLogout}
														>
															Logout
														</a>
													</div>
												</div>
											</div>
										</Popover.Panel>
									</Transition.Child>
								</div>
							</Transition.Root>
						</>
					)}
				</Popover>
				<main className="-mt-24 pb-8 bg-gradient-to-r from-zinc-800 to-zinc-700">
					<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
						<h1 className="sr-only">Profile</h1>
						{/* Main 3 column grid */}
						<div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8 overflow-auto ">
							{/* Left column */}
							<PostList user={userObj} />

							<div className="grid grid-cols-1 gap-4">
								{/* {userObj.friends ? <FriendsList friends={userObj.friends} /> : <></>} */}
								{userObj.friends ? (
									<CreateGroup user={{ ...userObj }} />
								) : (
									<></>
								)}
								{/* {<CreatePost user={userObj} />} */}
								<h1 className="block text-xl font-medium text-lime-200">
									Groups:
								</h1>
								<div className="overflow-hidden rounded-lg bg-gray-200 shadow h-10 m-2 p-1 text-lg">
									<nav>
										<ul>
											{userGroupsObj.map((element, index) => {
												return (
													<li key={index}>
														<button
															onClick={() => {
																setGroupTab(element._id);
															}}
														>
															{element.group_name}
														</button>
													</li>
												);
											})}
										</ul>
									</nav>
								</div>
							</div>
							{/* Right column */}
						</div>
					</div>
				</main>
			</div>
		</>
	);
}
