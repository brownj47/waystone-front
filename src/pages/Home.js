import { Fragment, useState, useEffect } from 'react';
import API from '../utils/API';
import { Menu, Popover, Transition, Dialog } from '@headlessui/react';
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
import {
	MagnifyingGlassIcon,
	EllipsisVerticalIcon,
} from '@heroicons/react/20/solid';
import FriendsList from '../components/FriendsList';
import CreateGroup from '../components/CreateGroup';
import PostList from '../components/PostList';
import FriendRequestList from '../components/FriendRequstList';
import { Image } from 'cloudinary-react';
import CreatePost from '../components/CreatePost';
import RandFriendPopOut from '../components/RandFriendPopOut';
import PostCard from '../components/PostCard';
function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export function Home(props) {
	// user state and hooks
	console.log(props);
	const [userObj, setUserObj] = useState({});
	const [randUserObj, setRandUserObj] = useState({});
	const [open, setOpen] = useState(false);

	useEffect(() => {
		console.log(props);
		API.getOneUser(props.user.UserId)
			.then((res) => res.json())
			.then((user) => {
				setUserObj(user);
				console.log(user);
			})
			.catch((err) => console.error(err));
	}, [props.user.UserId]);

	useEffect(() => {
		API.randomUser()
			.then((res) => res.json())
			.then((user) => {
				setRandUserObj(user);
				console.log(user);
			})
			.catch((err) => console.error(err));
	}, []);

	const findNewRandUser = () => {
		API.randomUser()
			.then((res) => res.json())
			.then((user) => {
				setRandUserObj(user);
				console.log(user);
			})
			.catch((err) => console.error(err));
	};

	const sendFriendRequest = (UserId, RecipientId) => {
		console.log(UserId)
		console.log(RecipientId)
		API.requestFriend(UserId, RecipientId)
			.then((res) => res.json())
			.then(() => {
				findNewRandUser()
				console.log("REQUEST SENT!");
			})
			.catch((err) => console.error(err));
	};

	const acceptFriendRequest = (UserId, SenderId) => {
		console.log(UserId)
		console.log(SenderId)
		API.acceptFriend(UserId, SenderId)
			.then((res) => res.json())
			.then(() => {
				findNewRandUser()
				console.log("ACCEPTED!");
			})
			.catch((err) => console.error(err));
	};

	const denyFriendRequest = (UserId, SenderId) => {
		console.log(UserId)
		console.log(SenderId)
		API.denyFriend(UserId, SenderId)
			.then((res) => res.json())
			.then(() => {
				findNewRandUser()
				console.log("DENIED!");
			})
			.catch((err) => console.error(err));
	};

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
											className="mx-auto h-12 w-auto bg-lime-300 rounded-full"
											// src="https://tailwindui.com/img/logos/workflow-mark.svg?color=lime&4hade=600"

											src="https://i.ibb.co/zmHz8jh/waystone.png"
											alt="Workflow"
										/>
										<Image
											cloudName="diuo4ygwd"
											publicId={userObj.img_url}
											style={{ width: 250 }}
										/>
									</div>
									<h1>Hello {userObj.username}!</h1>

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
															href={'/profile'}
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
															onClick={() => {}}
														>
															Settings
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
														to={'/waystone-front/friends'}
													>
														Friends
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
												{/* Random Friend pop out button */}
												<div className="mx-auto w-full max-w-xs lg:max-w-md">
													<button
														type="button"
														className="inline-flex w-full flex-shrink-0 items-center justify-center rounded-md border border-transparent hover:bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:flex-1"
														onClick={(e) => {
															e.preventDefault();
															setOpen(true);
														}}
													>
														Random Friend
													</button>
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
															className="text-zinc-800 text-sm font-medium rounded-md bg-lime-200  px-3 py-2 hover:bg-lime-200"
															to={'/waystone-front/home'}
														>
															Home
														</Link>
														<Link
															className="text-zinc-800 text-sm font-medium rounded-md bg-lime-200  px-3 py-2 hover:bg-lime-200"
															to={'/waystone-front/waystone-front/profile'}
														>
															Profile
														</Link>
														<Link
															className="text-zinc-800 text-sm font-medium rounded-md bg-lime-200  px-3 py-2 hover:bg-lime-200"
															to={'/waystone-front/friends'}
														>
															Friends
														</Link>
														<Link
															className="text-zinc-800 text-sm font-medium rounded-md bg-lime-200  px-3 py-2 hover:bg-lime-200"
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
															href={'#'}
															className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
														>
															Your Profile
														</a>
														<a
															href={'#'}
															className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
														>
															Settings
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
						{<CreatePost user={userObj} />}
						{/* Main 3 column grid */}
						<div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8 overflow-auto ">
							{/* Left column */}
							<PostList user={userObj}/>

							{/* Right column */}
							<div className="grid grid-cols-1 gap-4 m-2">
								{userObj.friends ? (
									<FriendsList friends={userObj.friends} />
								) : (
									<></>
								)}
								{userObj.friends ? (
									<CreateGroup user={{ ...userObj }} />
								) : (
									<></>
								)}
								<FriendRequestList user={userObj} />
							</div>
						</div>
					</div>
				</main>
			</div>
			{/* RANDOM FRIEND */}
			<Transition.Root show={open} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={setOpen}>
					<div className="fixed inset-0" />

					<div className="fixed inset-0 overflow-hidden">
						<div className="absolute inset-0 overflow-hidden">
							<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
								<Transition.Child
									as={Fragment}
									enter="transform transition ease-in-out duration-500 sm:duration-700"
									enterFrom="translate-x-full"
									enterTo="translate-x-0"
									leave="transform transition ease-in-out duration-500 sm:duration-700"
									leaveFrom="translate-x-0"
									leaveTo="translate-x-full"
								>
									<Dialog.Panel className="pointer-events-auto w-screen max-w-md">
										<div className="flex h-full flex-col overflow-y-scroll bg-gradient-to-r from-lime-500 to-lime-400 shadow-xl">
											<div className="px-4 py-6 sm:px-6">
												<div className="flex items-start justify-between">
													<h2
														id="slide-over-heading"
														className="text-lg font-medium text-gray-900"
													>
														Random Friend!
													</h2>
													<div className="ml-3 flex h-7 items-center">
														<button
															type="button"
															className="rounded-md bg-lime-500 text-red-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
															onClick={() => setOpen(false)}
														>
															<span className="sr-only">Close panel</span>
															<XMarkIcon
																className="h-6 w-6"
																aria-hidden="true"
															/>
														</button>
													</div>
												</div>
											</div>
											{/* Main */}
											<div>
												<div className="pb-1 sm:pb-6">
													<div>
														<div className="relative h-40 sm:h-56">
															<img
																className="absolute h-full w-full object-cover"
																src={randUserObj.img_url}
																alt=""
															/>
														</div>
														<div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
															<div className="sm:flex-1">
																<div>
																	<div className="flex items-center">
																		<h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
																			{/* RandomUSer Username */}
																			{randUserObj.username}
																		</h3>
																		<span className="ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400">
																			<span className="sr-only">Online</span>
																		</span>
																	</div>
																	<p className="text-sm text-gray-700">
																	{randUserObj.username}
																	</p>
																</div>
																<div className="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3">
																	<button
																		type="button"
																		className="inline-flex w-full flex-shrink-0 items-center justify-center rounded-md border border-transparent hover:bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:flex-1"
																		onClick={()=> findNewRandUser()}
																	>
																		Skip
																	</button>
																	<button
																		type="button"
																		className="inline-flex w-full flex-shrink-0 items-center justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:flex-1"
																		onClick={()=> sendFriendRequest(userObj.id, randUserObj.id)}
																	>
																		Request Friend
																	</button>
																	<div className="ml-3 inline-flex sm:ml-0">
																		<Menu
																			as="div"
																			className="relative inline-block text-left"
																		>
																			<Menu.Button className="inline-flex items-center rounded-md   bg-lime-500 p-2 text-sm font-medium text-black shadow-sm hover:bg-lime-300 focus:outline-none ">
																				<span className="sr-only">
																					Open options menu
																				</span>
																				<EllipsisVerticalIcon
																					className="h-5 w-5"
																					aria-hidden="true"
																				/>
																			</Menu.Button>
																			<Transition
																				as={Fragment}
																				enter="transition ease-out duration-100"
																				enterFrom="transform opacity-0 scale-95"
																				enterTo="transform opacity-100 scale-100"
																				leave="transition ease-in duration-75"
																				leaveFrom="transform opacity-100 scale-100"
																				leaveTo="transform opacity-0 scale-95"
																			>
																				<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-lime-300 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
																					<div className="py-1">
																						<Menu.Item>
																							{({ active }) => (
																								<a
																									href="#"
																									className={classNames(
																										active
																											? 'bg-lime-200  text-black'
																											: 'text-black',
																										'block px-4 py-2 text-sm'
																									)}
																								>
																									View profile
																								</a>
																							)}
																						</Menu.Item>
																					</div>
																				</Menu.Items>
																			</Transition>
																		</Menu>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												{/* under the skip/request buttons */}
												<div className="px-4 pt-5 pb-5 sm:px-0 sm:pt-0">
													<dl className="space-y-8 px-4 sm:space-y-6 sm:px-6">
														<div>
															<h1 className="font-bold text-lg">Bio:</h1>
															<p>
																{/* insert SelectedRandomUser.bio */}
																{randUserObj.bio}
															</p>
														</div>
														<div>
															{/* insert random user post here */}
															{randUserObj.posts && randUserObj.posts.length?
															(<div className="grid grid-cols-1 gap-4 lg:col-span-2 overflow-auto">
																<section aria-labelledby="quick-links-title">
																	<div className="bg-white w-full  rounded-lg">
																		<ul role="list" className="divide-y divide-lime-400">
																			{randUserObj.posts.map((post) => (
																				<PostCard {...post} user={userObj} key={post._id} />
																			))}
																		</ul>
																		<p>test</p>
																	</div>
																</section>
															</div>)
															:
															(<div className="grid grid-cols-1 gap-4 lg:col-span-2 overflow-auto">
															 	{/* POST PANEL */}
																<section aria-labelledby="quick-links-title">
																	<div className="bg-white w-full  rounded-lg">
																		<h1>This user has no posts.</h1>
																	</div>
																</section>
															</div>)
															}
														</div>
													</dl>
												</div>
											</div>
										</div>
									</Dialog.Panel>
								</Transition.Child>
							</div>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</>
	);
}
