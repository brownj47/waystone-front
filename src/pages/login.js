import React from 'react';




import { LockClosedIcon } from '@heroicons/react/20/solid'

export default function Login() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-lime-50">
        <body class="h-full">
        ```
      */}
      
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-zinc-800">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark.svg?color=lime&4hade=600"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-lime-500">
              Welcome to Mordekainen's Waystone, come find your party!
              Sign in to get started.
            </h2>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-lime-400 py-2 px-4 text-sm font-medium text-white hover:bg-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-200 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-lime-200 group-hover:text-lime-400" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-lime-300 px-3 py-2 text-lime-900 placeholder-lime-500 focus:z-10 focus:border-lime-200 focus:outline-none focus:ring-lime-200 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-lime-300 px-3 py-2 text-lime-900 placeholder-lime-500 focus:z-10 focus:border-lime-200 focus:outline-none focus:ring-lime-200 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-lime-300 text-lime-400 focus:ring-lime-200"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-lime-300">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-lime-400 hover:text-lime-200">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-lime-400 py-2 px-4 text-sm font-medium text-white hover:bg-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-200 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-lime-200 group-hover:text-lime-400" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
