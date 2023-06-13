'use client';
import React from 'react'
import { BiUser } from 'react-icons/bi'
import { BsKey } from 'react-icons/bs'
import api from '@/services/api';

export default function Login() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const data = {
            username,
            password,
        };

        try {
            const response = await api.post('auth/signin', data);
            console.log(response)

            localStorage.setItem('username', username);
            localStorage.setItem('accessToken', response.data.token);

            window.location.href = "/"
        } catch (err) {
            alert('Login failed! Try again!');
        }
    };

    return (
        <div className='bg-blue-500 w-full h-screen flex flex-col justify-center'>
            <div className="flex flex-col w-full max-w-xl max-h-min  bg-slate-100 p-12 ml-auto mr-auto">

                <h1 className='text-4xl text-black font-bold'>Login</h1>
                <h3 className='text-xl text-gray-600'>Welcome to CCEAK</h3>

                <form onSubmit={event => onSubmit(event)} className='flex flex-col w-full h-full mt-4'>
                    <label className='flex flex-col pb-4 pt-4' htmlFor='username'>
                        <span className='uppercase'>username</span>
                        <div className='flex w-full'>
                            <span className='bg-blue-500 p-4 text-xl text-white'>
                                <BiUser />
                            </span>
                            <input onChange={e => setUsername(e.target.value)} className='bg-slate-300 w-full p-4' type="text" name="username" id='username' />
                        </div>
                    </label>
                    <label className='flex flex-col pb-4 pt-4' htmlFor='password'>
                        <span className='uppercase'>password</span>
                        <div className='flex w-full'>
                            <span className='bg-blue-500 p-4 text-xl text-white'>
                                <BsKey />
                            </span>
                            <input onChange={e => setPassword(e.target.value)} className='bg-slate-300 w-full p-4' type="password" name="password" id='password' />
                        </div>
                    </label>
                    <button className='focus:border-2 focus:border-blue-500 focus:bg-blue-800 bg-blue-500 p-4 uppercase text-white mt-8' type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}