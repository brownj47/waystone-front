import React from 'react';
import { Link } from 'react-router-dom';


export default function CreateUser() {
    return (
    <div className='bg-zinc-800'>
        <form className="space-y-8 divide-y divide-gray-200 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 " >
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div>
                    <div>
                        <h3 className="text-lg font-medium leading-6 text-lime-400">Profile</h3>
                        <p className="mt-1 max-w-2xl text-sm text-lime-400">
                            This information will be displayed publicly so be careful what you share.
                        </p>
                    </div>

                    <div className="mt-6 space-y-6 sm:mt-5 sm:space-y-5">
                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="username" className="block text-sm font-medium text-lime-400 sm:mt-px sm:pt-2">
                                Username
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <div className="flex max-w-lg rounded-md shadow-sm">
                                    <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-zinc-800 sm:text-sm">
                                        What's Your Tavern Handle?
                                    </span>
                                    <input
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
                            <label htmlFor="about" className="block text-sm font-medium text-lime-400 sm:mt-px sm:pt-2">
                                About
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <textarea
                                    id="about"
                                    name="about"
                                    rows={3}
                                    className="block w-full max-w-lg rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    defaultValue={''}
                                />
                                <p className="mt-2 text-sm text-lime-400">Write a few sentences about yourself.</p>
                            </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="photo" className="block text-sm font-medium text-lime-400">
                                Photo
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <div className="flex items-center">
                                    <span className="h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                                        <svg className="h-full w-full text-lime-400" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </span>
                                    <button
                                        type="button"
                                        className="ml-5 rounded-md border border-gray-300 bg-lime-400 py-2 px-3 text-sm font-medium leading-4 text-zinc-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Change
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="cover-photo" className="block text-sm font-medium text-lime-400 sm:mt-px sm:pt-2">
                                Cover photo
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <div className="flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                    <div className="space-y-1 text-center">
                                        <svg
                                            className="mx-auto h-12 w-12 text-lime-400"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 48 48"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <div className="flex text-sm text-lime-400">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs text-lime-400">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="overflow-hidden rounded-lg bg-white shadow">
                            <div className="px-4 py-5 sm:p-6">
                                Test
                                <div>
                                    <label htmlFor="location" className="block text-sm font-medium text-lime-400">
                                    User Criteria Role Playing Game Experience
                                    </label>
                                    <select
                                        id="Exp"
                                        name="location"
                                        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        defaultValue="1"
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>

                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="location" className="block text-sm font-medium text-lime-400">
                                    User Criteria Community Interation
                                    </label>
                                    <select
                                        id="Cha"
                                        name="location"
                                        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        defaultValue="1"
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>

                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="location" className="block text-sm font-medium text-lime-400">
                                    User Criteria #3
                                    </label>
                                    <select
                                        id="Placeholder3"
                                        name="location"
                                        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        defaultValue="1"
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>

                                    </select>
                                </div>


                                 Content goes here 
                            </div>
                        </div> */}



                    </div>
                </div>
            </div>
            <div className="pt-5">
                <div className="flex justify-end">
                    <button
                        type="button"
                        className="rounded-md border border-gray-300 bg-zinc-500 py-2 px-4 text-sm font-medium text-lime-400 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Cancel
                    </button>
                    <Link to={{ pathname: '/Home'}}>
                    <button
                        type="submit"
                        className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-lime-400 py-2 px-4 text-sm font-medium text-zinc-800 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Save
                    </button>
                    </Link>
                </div>
            </div>
        </form>
    </div>
    )

};

