/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

const user = {
	name: 'Tom Cook',
	email: 'tom@example.com',
	imageUrl:
		'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
	{ name: 'Dashboard', href: '#', current: true },
	{ name: 'Team', href: '#', current: false },
	{ name: 'Projects', href: '#', current: false },
	{ name: 'Calendar', href: '#', current: false },
	{ name: 'Reports', href: '#', current: false },
];
const userNavigation = [
	{ name: 'Your Profile', href: '#' },
	{ name: 'Settings', href: '#' },
	{ name: 'Sign out', href: '#' },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export function Home() {
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
				<Disclosure as="nav" className="bg-gray-800">
					{({ open }) => (
						<>
							<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
								<div className="flex h-16 items-center justify-between">
									<div className="flex items-center">
										<div className="flex-shrink-0">
											<img
												className="h-8 w-8"
												src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
												alt="Workflow"
											/>
										</div>
										<div className="hidden md:block">
											<div className="ml-10 flex items-baseline space-x-4">
												{navigation.map((item) => (
													<a
														key={item.name}
														href={item.href}
														className={classNames(
															item.current
																? 'bg-gray-900 text-white'
																: 'text-gray-300 hover:bg-gray-700 hover:text-white',
															'px-3 py-2 rounded-md text-sm font-medium'
														)}
														aria-current={item.current ? 'page' : undefined}
													>
														{item.name}
													</a>
												))}
											</div>
										</div>
									</div>
									<div className="hidden md:block">
										<div className="ml-4 flex items-center md:ml-6">
											<button
												type="button"
												className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
											>
												<span className="sr-only">View notifications</span>
												<BellIcon className="h-6 w-6" aria-hidden="true" />
											</button>

											{/* Profile dropdown */}
											<Menu as="div" className="relative ml-3">
												<div>
													<Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
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
													enter="transition ease-out duration-100"
													enterFrom="transform opacity-0 scale-95"
													enterTo="transform opacity-100 scale-100"
													leave="transition ease-in duration-75"
													leaveFrom="transform opacity-100 scale-100"
													leaveTo="transform opacity-0 scale-95"
												>
													<Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
														{userNavigation.map((item) => (
															<Menu.Item key={item.name}>
																{({ active }) => (
																	<a
																		href={item.href}
																		className={classNames(
																			active ? 'bg-gray-100' : '',
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
									</div>
									<div className="-mr-2 flex md:hidden">
										{/* Mobile menu button */}
										<Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
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
										</Disclosure.Button>
									</div>
								</div>
							</div>

							<Disclosure.Panel className="md:hidden">
								<div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
									{navigation.map((item) => (
										<Disclosure.Button
											key={item.name}
											as="a"
											href={item.href}
											className={classNames(
												item.current
													? 'bg-gray-900 text-white'
													: 'text-gray-300 hover:bg-gray-700 hover:text-white',
												'block px-3 py-2 rounded-md text-base font-medium'
											)}
											aria-current={item.current ? 'page' : undefined}
										>
											{item.name}
										</Disclosure.Button>
									))}
								</div>
								<div className="border-t border-gray-700 pt-4 pb-3">
									<div className="flex items-center px-5">
										<div className="flex-shrink-0">
											<img
												className="h-10 w-10 rounded-full"
												src={user.imageUrl}
												alt=""
											/>
										</div>
										<div className="ml-3">
											<div className="text-base font-medium leading-none text-white">
												{user.name}
											</div>
											<div className="text-sm font-medium leading-none text-gray-400">
												{user.email}
											</div>
										</div>
										<button
											type="button"
											className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
										>
											<span className="sr-only">View notifications</span>
											<BellIcon className="h-6 w-6" aria-hidden="true" />
										</button>
									</div>
									<div className="mt-3 space-y-1 px-2">
										{userNavigation.map((item) => (
											<Disclosure.Button
												key={item.name}
												as="a"
												href={item.href}
												className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
											>
												{item.name}
											</Disclosure.Button>
										))}
									</div>
								</div>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>

				<header className="bg-white shadow">
					<div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
						<h1 className="text-3xl font-bold tracking-tight text-gray-900">
							Dashboard
						</h1>
					</div>
				</header>
				<main>
					<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
						{/* Replace with your content */}
						<div className="px-4 py-6 sm:px-0">
							<div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
						</div>
						{/* /End replace */}
					</div>
				</main>
			</div>
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
										<div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
											<div className="px-4 py-6 sm:px-6">
												<div className="flex items-start justify-between">
													<h2
														id="slide-over-heading"
														className="text-lg font-medium text-gray-900"
													>
														Profile
													</h2>
													<div className="ml-3 flex h-7 items-center">
														<button
															type="button"
															className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
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
																src="https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&h=600&q=80"
																alt=""
															/>
														</div>
														<div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
															<div className="sm:flex-1">
																<div>
																	<div className="flex items-center">
																		<h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
																			Ashley Porter
																		</h3>
																		<span className="ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400">
																			<span className="sr-only">Online</span>
																		</span>
																	</div>
																	<p className="text-sm text-gray-500">
																		@ashleyporter
																	</p>
																</div>
																<div className="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3">
																	<button
																		type="button"
																		className="inline-flex w-full flex-shrink-0 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:flex-1"
																	>
																		Message
																	</button>
																	<button
																		type="button"
																		className="inline-flex w-full flex-1 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
																	>
																		Call
																	</button>
																	<div className="ml-3 inline-flex sm:ml-0">
																		<Menu
																			as="div"
																			className="relative inline-block text-left"
																		>
																			<Menu.Button className="inline-flex items-center rounded-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-400 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
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
																				<Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
																					<div className="py-1">
																						<Menu.Item>
																							{({ active }) => (
																								<a
																									href="#"
																									className={classNames(
																										active
																											? 'bg-gray-100 text-gray-900'
																											: 'text-gray-700',
																										'block px-4 py-2 text-sm'
																									)}
																								>
																									View profile
																								</a>
																							)}
																						</Menu.Item>
																						<Menu.Item>
																							{({ active }) => (
																								<a
																									href="#"
																									className={classNames(
																										active
																											? 'bg-gray-100 text-gray-900'
																											: 'text-gray-700',
																										'block px-4 py-2 text-sm'
																									)}
																								>
																									Copy profile link
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
												<div className="px-4 pt-5 pb-5 sm:px-0 sm:pt-0">
													<dl className="space-y-8 px-4 sm:space-y-6 sm:px-6">
														<div>
															<dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
																Bio
															</dt>
															<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
																<p>
																	Enim feugiat ut ipsum, neque ut. Tristique mi
																	id elementum praesent. Gravida in tempus
																	feugiat netus enim aliquet a, quam
																	scelerisque. Dictumst in convallis nec in
																	bibendum aenean arcu.
																</p>
															</dd>
														</div>
														<div>
															<dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
																Location
															</dt>
															<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
																New York, NY, USA
															</dd>
														</div>
														<div>
															<dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
																Website
															</dt>
															<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
																ashleyporter.com
															</dd>
														</div>
														<div>
															<dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
																Birthday
															</dt>
															<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
																<time dateTime="1988-06-23">June 23, 1988</time>
															</dd>
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
