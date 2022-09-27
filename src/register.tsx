import React, {useState} from "react";
import {useForm} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';
import AuthService from "./services/AuthService";

interface formData {
    email: string,
    username: string,
    password: string
}

function Signup() {
    const [name, setName] = useState('Haha');
    const {register, handleSubmit, formState: {errors}} = useForm<formData>({mode: "onChange"});
    const onSubmit = handleSubmit(({email, username, password}) => {
        AuthService.register(email, username, password).then(r => console.log(r))
    })

    return (
        <div className=" min-h-screen bg-gray-50 flex flex-col justify-center">
            <div className="max-w-md w-full mx-auto">
                <div className="text-3xl mt-2 font-bold text-gray-900 text-center"> Register new user</div>
            </div>
            <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
                <form action="" className="space-y-6" onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="" className="text-sm font-bold text-gray-600 block">Email</label>
                        <input {...register("email", {required: true, minLength: 3, maxLength: 50})}
                               style={{borderColor: errors.email ? "red" : ""}}
                               name="email" type="text"
                               className="w-full p-2 border border-gray-300 rounded mt-1 text-gray-600"
                               placeholder="Enter Email"/>
                        <ErrorMessage
                            errors={errors}
                            name="email"
                            render={({message = "this is required"}) => <p>{message}</p>}
                        />
                    </div>
                    <div>
                        <label htmlFor="" className="text-sm font-bold text-gray-600 block">Username</label>
                        <input {...register("username", {required: true, minLength: 3, maxLength: 20})}
                               style={{borderColor: errors.username ? "red" : ""}}
                               name="username" type="text"
                               className="w-full p-2 border border-gray-300 rounded mt-1 text-gray-600"
                               placeholder="Enter Username"/>
                        <ErrorMessage
                            errors={errors}
                            name="username"
                            render={({message = "this is required"}) => <p>{message}</p>}
                        />
                    </div>
                    <div>
                        <label htmlFor="" className="text-sm font-bold text-gray-600 block ">Password</label>
                        <input {...register("password", {
                            required: "This is required.",
                            minLength: 6,
                            maxLength: 20
                        })}
                               style={{borderColor: errors.password ? "red" : ""}}
                               name="password" type="password"
                               className="w-full p-2 border border-gray-300 rounded mt-1 text-gray-600"
                               placeholder="Enter Password"/>
                        <ErrorMessage
                            errors={errors}
                            name="password"
                            render={({message}) => <p>{message}</p>}
                        />
                    </div>
                    <div>
                        <button className="w-full bg-blue-600 rounded text-white">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup