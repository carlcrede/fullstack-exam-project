import React, {useState} from "react";
import {useForm} from 'react-hook-form';
import AuthService from "./services/AuthService";

interface formData {
    user: string,
    password: string
}

function Login() {
    const [password, setPassword] = useState("")
    const [user, setUser] = useState("")
    const {register, handleSubmit} = useForm<formData>({mode: "onChange"});
    const onSubmit = handleSubmit(({user, password}) => {
        AuthService.login(user, password).then(r => console.log(r))
    })

    function SubmitButton() {
        if (user.length > 0 && password.length > 0) {
            return <button className="w-full bg-blue-600 rounded text-white">Submit</button>
        } else {
            return <button disabled className="w-full bg-red-600 rounded text-white">Submit</button>
        }
    }

    return (
        <div className=" min-h-screen bg-gray-50 flex flex-col justify-center">
            <div className="max-w-md w-full mx-auto">
                <div className="text-3xl mt-2 font-bold text-gray-900 text-center"> Login</div>
            </div>
            <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
                <form action="" className="space-y-6" onSubmit={onSubmit}>
                    <div>
                        <label className="text-sm font-bold text-gray-600 block">Email</label>
                        <input {...register("user")}
                               name="user" type="text" onChange={e => setUser(e.target.value)}
                               className="w-full p-2 border border-gray-300 rounded mt-1 text-gray-600"
                               placeholder="Enter Username or Email"/>
                    </div>
                    <div>
                        <label className="text-sm font-bold text-gray-600 block">Password</label>
                        <input {...register("password")}
                               name="password" type="password" onChange={e => setPassword(e.target.value)}
                               className="w-full p-2 border border-gray-300 rounded mt-1 text-gray-600"
                               placeholder="Enter Password"/>
                    </div>
                    // TODO: do we have this func?
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <label className="text-gray-600">Remember me</label>
                            <input name="remember" type="checkbox" className="h-4 w-4 text-blue-300 rounded"/>
                        </div>
                        <div>
                            <a href="" className="text-blue-500">Forgot password?</a>
                        </div>
                    </div>
                    <div>
                        <SubmitButton/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login