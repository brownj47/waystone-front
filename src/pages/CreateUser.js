import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import cloudinary from 'cloudinary-core';
import { Image } from 'cloudinary-react'

let logoUrl = '';



export default function CreateUser() {
    const [user, setUser] = useState({
        userId: '',
        email: '',
        password: '',
        username: '',
        bio: '',
        img_url: '',
        bio: '',
    });
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bio, setBio] = useState('');
    const [img_url, setImg_url] = useState('');
    const [token, setToken] = useState('');

    const [imageSelected, setImageSelected] = useState('');

   
    
    const assignProfile = async () => {
		console.log(email, password, username, bio, img_url, bio,)
		setUser({email, password, username, bio, img_url, bio})
		console.log(user)
		fetch('http://localhost:3001/CreateUser', {
			method: 'POST',
			body: JSON.stringify(user),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(res => res.json()).then((data) => {
			console.log(data)
			if (data.token){
				setToken(data.token)
				localStorage.setItem('token', JSON.stringify(data.token))
				
			}
		})
	}


    const uploadImage = () => {

        const formData = new FormData()
        formData.append('file', imageSelected)
        formData.append('upload_preset', 'waystone')

        Axios.post('https://api.cloudinary.com/v1_1/diuo4ygwd/image/upload', formData).then(res => {
            console.log(res)
            console.log(res.data.secure_url)
            setImg_url(res.data.secure_url)
            console.log(img_url)
        })
    };



    // const myWidget = cloudinary.createUploadWidget({
    //     cloudName: 'diuo4ygwd', 
    //     uploadPreset: 'waystone'}, (error, result) => { 
    //       if (!error && result && result.event === "success") { 
    //         // console.log('Done! Here is the image info: ', result.info); 
    //         console.log(result.info.url)
    //         logoUrl = result.info.url
    //       }
    //     }
    //   )

    // document.getElementById("upload_widget").addEventListener("click", e=>{
    //     e.preventDefault();
    //       myWidget.open();
    //     }, false);


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
                                            onChange={e => { setUsername(e.target.value) }}
                                            type="text"
                                            name="username"
                                            id="username"
                                            autoComplete="username"
                                            className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <label htmlFor="email" className="block text-sm font-medium text-lime-400 sm:mt-px sm:pt-2">
                                    email
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                    <div className="flex max-w-lg rounded-md shadow-sm">
                                        <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-zinc-800 sm:text-sm">
                                            What's Your email?
                                        </span>
                                        <input
                                            onChange={e => { setEmail(e.target.value) }}
                                            type="text"
                                            name="email"
                                            id="email"
                                            autoComplete="email"
                                            className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <label htmlFor="password" className="block text-sm font-medium text-lime-400 sm:mt-px sm:pt-2">
                                    Password
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                    <div className="flex max-w-lg rounded-md shadow-sm">
                                        <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-zinc-800 sm:text-sm">
                                            What's Your Password?
                                        </span>
                                        <input
                                            onChange={e => { setPassword(e.target.value) }}
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
                                <label htmlFor="about" className="block text-sm font-medium text-lime-400 sm:mt-px sm:pt-2">
                                    About
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                    <textarea
                                        onChange={e => { setBio(e.target.value) }}
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
                                <Image cloudName="diuo4ygwd" publicId={img_url} style={{ width: 250 }} />

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
                                        <input type="file" name="photo" id="photo" className="" onChange={(e) => { setImageSelected(e.target.files[0]) }} />
                                        <button
                                            type="button"
                                            onClick={() => uploadImage()}
                                            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-lime-400 py-2 px-4 text-sm font-medium text-zinc-800 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                            Upload Picutre
                                        </button>


                                    </div>
                                </div>
                            </div>




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
                        
                            <button
                                type="button"
                                onClick={() => assignProfile()}
                                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-lime-400 py-2 px-4 text-sm font-medium text-zinc-800 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Create Account
                            </button>
                        
                    </div>
                </div>
            </form>
        </div>

    )

};

