import React, {useState} from "react";
import {useForm } from 'react-hook-form';

function Login() {
    const [name, setName] = useState('Haha');
    const {register, handleSubmit } = useForm();
    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })

    return (
        <div className=" min-h-screen bg-gray-50 flex flex-col justify-center">
            <div className="text-gray-900 text-center"> Login </div>
            <div className="max-w-md w-full mx-auto bg-white border border-gray-300">
                <form action="" className="space-y-6" onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="" className="text-sm font-bold text-gray-600 block">Email</label>
                        <input {...register("email")} name="email" type="text" className="w-full p-2 border border-gray-300 rounded mt-1 text-gray-600"/>
                    </div>
                    <div>
                        <label htmlFor="" className="text-sm font-bold text-gray-600 block ">Password</label>
                        <input {...register("password")} name="password" type="password" className="w-full p-2 border border-gray-300 rounded mt-1 text-gray-600"/>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <label htmlFor="" className="text-gray-600">Remember me</label>
                            <input {...register("remember")} name="remember" type="checkbox" className="h-4 w-4 text-blue-300 rounded"/>
                        </div>
                        <div>
                            <a href="" className="text-blue-500">Forgot password?</a>
                        </div>
                    </div>
                    <div>
                        <button className="w-full bg-blue-600 rounded text-white">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login