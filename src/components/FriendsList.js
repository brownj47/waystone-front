import React from "react";

export function FriendsList({friends}){
    return(
        {/* FRIENDS */}
        <section aria-labelledby="recent-hires-title">
        <div className="overflow-hidden rounded-lg bg-gray-200 shadow">
            <div className="p-6">
                <h2
                    className="text-base font-medium text-gray-900"
                    id="recent-hires-title"
                >
                    Friends
                </h2>
                <div className="mt-6 flow-root">
                    <ul
                        role="list"
                        className="-my-5 divide-y divide-gray-200"
                    >
                        {friends.map((person) => (
                            <li key={person.handle} className="py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="h-8 w-8 rounded-full"
                                            src={person.imageUrl}
                                            alt=""
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-medium text-gray-900">
                                            {person.name}
                                        </p>
                                        <p className="truncate text-sm text-gray-500">
                                            {'@' + person.handle}
                                        </p>
                                    </div>
                                    <div>
                                        <a
                                            href={person.href}
                                            className="inline-flex items-center rounded-full border border-gray-300 bg-white px-2.5 py-0.5 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-lime-200"
                                        >
                                            View
                                        </a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-6">
                    <a
                        href="#"
                        className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-lime-200"
                    >
                        View all
                    </a>
                </div>
            </div>
        </div>
    </section>
    )
}