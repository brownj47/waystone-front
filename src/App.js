import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import {
	Route,
	Routes,
	Link,
	useNavigate,
	Navigate,
	Outlet,
} from 'react-router-dom';
import { Home } from './pages/Home';
import CreateUser from './pages/CreateUser';
import GroupPage from './pages/groupPage';
import Login from './pages/login';
import API from './utils/API';
import { data } from 'autoprefixer';
import Profile from './pages/profile';

const URL_PREFIX = 'https://waystoneapi.herokuapp.com/';

const navigation = {
	main: [
		{ name: 'Justus Brown', href: 'https://github.com/brownj47' },
		{ name: 'Tucker Reiland', href: 'https://github.com/tuckerreiland' },
		{ name: 'Jonathan Knight', href: 'https://github.com/knight19jonathan' },
		{ name: 'Austin Gentz', href: 'https://github.com/Ajimoto' },
	],
	social: [
		{
			name: 'GitHub',
			href: 'https://github.com/brownj47/waystone-front',
			icon: (props) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path
						fillRule="evenodd"
						d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
	],
};

const ProtectedRoute = ({ user }) => {
	return user ? <Outlet /> : <Navigate to={'/waystone-front/login'} />;
};
const App = () => {
	const navigate = useNavigate();

	const [user, setUser] = useState({
		email: '',
		UserId: '',
		username: '',
		img_url: '',
	});
	const [token, setToken] = useState('');

	const handleLogin = async (email, password) => {
		setUser((user) => {
			// https://betterprogramming.pub/synchronous-state-in-react-using-hooks-dc77f43d8521
			const modifiedValue = {
				email,
				password,
			};

			const foundUser = {};

			console.log(modifiedValue);
			fetch(`${URL_PREFIX}login`, {
				method: 'POST',
				body: JSON.stringify(modifiedValue),
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then((res) => {
					if (!res.ok) {
						setUser({
							email: '',
							UserId: '',
							username: '',
							img_url: '',
						});
						setToken('');
						return;
					}
					return res.json();
				})
				.then((data) => {
					console.log('==============================================');
					console.log(data);
					foundUser.email = data.user.email;
					foundUser.username = data.user.username;
					foundUser.img_url = data.user.img_url;
					foundUser.UserId = data.user._id;
					setToken(data.token);
					localStorage.setItem('token', JSON.stringify(data.token));
					navigate('/waystone-front/home');
				});
			return foundUser;
		});
	};

	const handleUserCreate = async (email, password, username, bio, img_url) => {
		setUser((user) => {
			// https://betterprogramming.pub/synchronous-state-in-react-using-hooks-dc77f43d8521
			const modifiedValue = {
				email,
				password,
				username,
				bio,
				img_url,
			};
			const foundUser = {};
			console.log(modifiedValue);
			fetch(`${URL_PREFIX}api/users`, {
				method: 'POST',
				body: JSON.stringify(modifiedValue),
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then((res) => {
					if (!res.ok) {
						setUser({ username: '', email: '' });
						setToken('');
						return;
					}
					return res.json();
				})
				.then((data) => {
					console.log('==============================================');
					console.log(data);
					foundUser.email = data.user.email;
					foundUser.username = data.user.username;
					foundUser.img_url = data.user.img_url;
					foundUser.UserId = data.user._id;
					setToken(data.token);
					localStorage.setItem('token', JSON.stringify(data.token));
					navigate('/waystone-front/home');
				});
			return foundUser;
		});
	};

	const checkToken = (tokenToCheck) => {
		return fetch(`${URL_PREFIX}checkToken`, {
			headers: {
				Authorization: `Bearer ${tokenToCheck}`,
			},
		}).then((res) => {
			if (!res.ok) {
				console.log('invalid token!');
				localStorage.removeItem('token');
				setToken('');
				setUser({
					email: '',
					UserId: '',
					username: '',
					img_url: '',
				});
				navigate(`/waystone-front/login`);
			} else {
				console.log('valid token');
				res
					.json()
					.then((data) => {
						setToken(tokenToCheck);
						return data;
					})
					.then((user) => {
						console.log('=========================================');
						console.log(user);
						setUser({
							email: user.email,
							UserId: user.id,
							// ...user
						});
						navigate('/waystone-front/home');
					});
			}
		});
	};
	const handleLogout = () => {
		localStorage.removeItem('token');
		setToken('');
		setUser({
			email: '',
			password: '',
		});
		navigate('/waystone-front/login');
	};

	useEffect(() => {
		const storedToken = JSON.parse(localStorage.getItem('token'));
		console.log(storedToken);
		checkToken(storedToken);
	}, []);

	// edit profile page
	const handleEditUser = async (UserId, email, password, username, bio, img_url)=>{
		setUser((user) => { // https://betterprogramming.pub/synchronous-state-in-react-using-hooks-dc77f43d8521
			const modifiedValue = {
				UserId,
				username,
				email,
				password,
				bio,
				img_url
			}
	
			console.log(modifiedValue);
			fetch(`${URL_PREFIX}api/users/user/${UserId}`, {
				method: 'PUT',
				body: JSON.stringify(modifiedValue),
				headers: {
					'Content-Type': 'application/json'
				}
			}).then(res => {
				if (!res.ok) {
					setUser({ username: "", email: "" });
					setToken("")
					return;
				}
				return res.json()
			}).then((data) => {
				console.log('==============================================')
				console.log(data)
				modifiedValue.email = data.user.email
				modifiedValue.username = data.user.username
				modifiedValue.img_url = data.user.img_url
				modifiedValue.UserId = data.user._id
				setToken(data.token)
				localStorage.setItem('token', JSON.stringify(data.token))
				navigate('/home')
			})
			return modifiedValue;
		})
	}

	return (
		<>
			<Routes>
				<Route index element={<Login />} />

				{/* <ProtectedRouteTest user={user}>
					<Home/> https://brownj47.github.io/waystone-front
				</ProtectedRouteTest> */}
				<Route element={<ProtectedRoute user={user} />}>
					<Route
						path="/waystone-front/home"
						element={<Home user={user} handleLogout={handleLogout} />}
					/>
					<Route
						path="/waystone-front/groups"
						element={<GroupPage user={user} handleLogout={handleLogout} />}
					/>
				</Route>
				<Route
					path="/waystone-front/CreateUser"
					element={<CreateUser handleUserCreate={handleUserCreate} />}
				/>
				<Route
					path="/waystone-front/login"
					element={<Login handleLogin={handleLogin} />}
				/>
				<Route path="/waystone-front/profile" element={<Profile user={user} handleLogout={handleLogout} handleEditUser={handleEditUser}/>} />
				<Route path="/waystone-front/*" element={<h1>404 Page Not Found</h1>} />
				
			</Routes>

			<footer className="bg-zinc-800 h-96 p-5">
				<div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
					<nav
						className="-mx-5 -my-2 flex flex-wrap justify-center"
						aria-label="Footer"
					>
						{navigation.main.map((item) => (
							<div key={item.name} className="px-5 py-2">
								<a
									href={item.href}
									className="text-base text-lime-400 hover:text-gray-900"
								>
									{item.name}
								</a>
							</div>
						))}
					</nav>
					<div className="mt-8 flex justify-center space-x-6">
						{navigation.social.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="text-gray-400 hover:text-gray-500"
							>
								<span className="sr-only">{item.name}</span>
								<item.icon className="h-6 w-6" aria-hidden="true" />
							</a>
						))}
					</div>
					<p className="mt-8 text-center text-base text-gray-400">
						&copy; 2022 <span className="text-red-500">Hellfire</span> Club. You
						have the right to remain Beautiful.
					</p>
				</div>
			</footer>
		</>
	);
};

export default App;
