/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import PostList from './PostList';
// import { useState } from 'react';
import API from '../utils/API';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function RandFriendPopOut() {
	const [open, setOpen] = useState(true);

	return (
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
														<XMarkIcon className="h-6 w-6" aria-hidden="true" />
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
																		{/* RandomUSer Username */}
																		Ashley Porter
																	</h3>
																	<span className="ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400">
																		<span className="sr-only">Online</span>
																	</span>
																</div>
																<p className="text-sm text-gray-700">
																	@ashleyporter
																</p>
															</div>
															<div className="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3">
																<button
																	type="button"
																	className="inline-flex w-full flex-shrink-0 items-center justify-center rounded-md border border-transparent hover:bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:flex-1"
																>
																	Skip
																</button>
																<button
																	type="button"
																	className="inline-flex w-full flex-shrink-0 items-center justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:flex-1"
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
															Bio goes here for the random user Bio goes here
															for the random user Bio goes here for the random
															user Bio goes here for the random user Bio goes
															here for the random user Bio goes here for the
															random user Bio goes here for the random user Bio
															goes here for the random user Bio goes here for
															the random user
														</p>
													</div>
													<div>
														{/* insert random user post here */}
														<PostList />
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
	);
}
