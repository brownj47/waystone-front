import { Fragment, useState, useEffect } from 'react';
import { Menu, Popover, Transition } from '@headlessui/react';
import API from '../utils/API';
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
import PostList from '../components/PostList';
import { Image } from 'cloudinary-react';

const user = {
	name: 'Chelsea Hagon',
	email: 'chelsea.hagon@example.com',
	role: 'Human Resources Manager',
	imageUrl:
		'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
	{ name: 'Home', href: '#', current: true },
	{ name: 'Profile', href: '#', current: false },
	{ name: 'Friends', href: '#', current: false },
];
const userNavigation = [
	{ name: 'Your Profile', href: '#' },
	{ name: 'Settings', href: '#' },
	{ name: 'Sign out', href: '#' },
];
const stats = [
	{ label: 'Friends Online', value: 12 },
	{ label: 'Requests', value: 4 },
	{ label: 'Messages', value: 2 },
];

const posts = [
	{ id: 1, content: 'post1' },
	{ id: 2, content: 'post2' },
	{ id: 3, content: 'post3' },
	{ id: 4, content: 'post4' },
	// More items...
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export function Home(props) {
// user state and hooks
	console.log(props)
	const [userObj, setUserObj] = useState({})
	const [UserId, setUserId] = useState(props.user.UserId)
	const [username, setUsername] = useState()
	const [password, setPassword] = useState()
	const [email, setEmail] = useState()
	const [isDeactivated, setIsDeactivated] = useState(false)

	useEffect(()=> {
			API.getOneUser(props.user.UserId).then(res=>res.json()).then(user=>{
			setUserObj(user)
			console.log(user)
			})
		}, [props.user.UserId])

	// useEffect(()=>{
	// 	API.getOneUser(UserId).then(res=>res.json()).then(user=>{
	// 	setUserObj(user)
	// 	})
	// }, [])

	// const updateUser=e=>{
    //     e.preventDefault();
    //     API.updateUser(UserId, username, email, password).then(res=>res.json()).then(user=>{
    //         console.log(user);
    //     })
    // }

	// const requestFriend=e=>{
    //     e.preventDefault();
    //     API.requestFriend(UserId, FriendId).then(res=>res.json()).then(user=>{
    //         console.log(user);
    //     })
    // }

	// const acceptFriend=e=>{
    //     e.preventDefault();
    //     API.acceptFriend(UserId, FriendId).then(res=>res.json()).then(user=>{
    //         console.log(user);
    //     })
    // }

	// const denyFriend=e=>{
    //     e.preventDefault();
    //     API.denyFriend(UserId, FriendId).then(res=>res.json()).then(user=>{
    //         console.log(user);
    //     })
    // }

	// const deactivateUser=e=>{
    //     e.preventDefault();
	// 	setIsDeactivated(true)
    //     API.deactivateUser(UserId, isDeactivated).then(res=>res.json()).then(user=>{
    //         console.log(user);
    //     })
    // }


	return (
		<>
			{/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
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
										<Image cloudName="diuo4ygwd" publicId={user.img_url} style={{ width: 250 }} />
									</div>

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
														src={user.imageUrl}
														alt=""
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
													{userNavigation.map((item) => (
														<Menu.Item key={item.name}>
															{({ active }) => (
																<a
																	href={item.href}
																	className={classNames(
																		active ? 'bg-lime-400' : '',
																		'block px-4 py-2 text-sm text-gray-700'
																	)}
																>
																	{item.name}
																</a>
															)}
														</Menu.Item>
													))}
												</Menu.Items>
											</Transition>
										</Menu>
									</div>

									<div className="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20">
										<div className="lg:grid lg:grid-cols-3 lg:items-center lg:gap-8">
											{/* Left nav */}
											<div className="hidden lg:col-span-2 lg:block">
												<nav className="flex space-x-4">
													{navigation.map((item) => (
														<a
															key={item.name}
															href={item.href}
															className={classNames(
																item.current ? 'text-white' : 'text-zinc-800',
																'text-sm font-medium rounded-md bg-lime-200 bg-opacity-0 px-3 py-2 hover:bg-opacity-10'
															)}
															aria-current={item.current ? 'page' : undefined}
														>
															{item.name}
														</a>
													))}
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
														{navigation.map((item) => (
															<a
																key={item.name}
																href={item.href}
																className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
															>
																{item.name}
															</a>
														))}
													</div>
												</div>
												<div className="pt-4 pb-2">
													<div className="flex items-center px-5">
														<div className="flex-shrink-0">
															<img
																className="h-10 w-10 rounded-full"
																src={user.imageUrl}
																alt=""
															/>
														</div>
														<div className="ml-3 min-w-0 flex-1">
															<div className="truncate text-base font-medium text-gray-800">
																{user.name}
															</div>
															<div className="truncate text-sm font-medium text-gray-500">
																{user.email}
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
														{userNavigation.map((item) => (
															<a
																key={item.name}
																href={item.href}
																className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
															>
																{item.name}
															</a>
														))}
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
						<div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
							<h1>Hello {userObj.username}!</h1>
							{/* Left column */}
							<PostList />

							{/* Right column */}
							<div className="grid grid-cols-1 gap-4">
								{/* <FriendsList friends = {userObj.friends} /> */}
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	);
}
