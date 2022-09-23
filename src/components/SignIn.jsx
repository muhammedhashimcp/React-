import React, { useEffect, useState } from 'react';
import { GoogleButton } from 'react-google-button';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/authContext';

const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();
	const { signIn, user } = UserAuth();
	const handleSignIn = async (e) => {
		e.preventDefault();
		try {
			console.log(
				'🚀 ~ file: SignIn.jsx ~ line 15 ~ handleGoogleSignIn ~ handleGoogleSignIn '
			);
			await signIn(email, password);
			navigate('/account')
		} catch (error) {
			setError(error.message);
			console.log(error.message);
		}
	};
	useEffect(() => {
		if (user != null) {
			navigate('/account');
		}
	}, [user]);
	return (
		<>
			<div>
				<h1 className="text-center text-3xl font-bold py-8">Sign in</h1>
				<div className="max-w-[240px] m-auto py-4">
					<GoogleButton onClick={handleSignIn} />
				</div>
			</div>
			<div className="max-w-[700px] mx-auto my-16 p-4">
				<div>
					<h1 className="text-2xl font-bold py-2">
						Sign in to your account
					</h1>
					<p className="py-2">
						Don't have an account yet?{' '}
						<Link to="/sign-Up" className="underline">
							Sign Up.
						</Link>
					</p>
				</div>
				<form>
					<div className="flex flex-col py-2">
						<label className="py-2 font-medium">
							Email Address
						</label>
						<input
							onChange={(e) => setEmail(e.target.value)}
							className="border p-3"
							type="email"
						/>
					</div>
					<div className="flex flex-col py-2">
						<label className="py-2 font-medium">Password</label>
						<input
							onChange={(e) => setPassword(e.target.value)}
							 className="border p-3"
							type="password"
						/>
					</div>
					<button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white">
						Sign In
					</button>
				</form>
			</div>
		</>
	);
};

export default SignIn;
