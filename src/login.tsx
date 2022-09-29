import React, {useState} from "react";
import AuthService from "./services/AuthService";
import {useNavigate} from "react-router-dom";
import useToken from "./useToken";

export default function Login() {
    const { setToken } = useToken();
    const navigate = useNavigate();
    const [password, setPassword] = useState("")
    const [user, setUser] = useState("")

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        await AuthService.login(user, password).then(r => setToken(r.data['token']));
        navigate('/')
    }

    return (
        <div className=" min-h-screen bg-gray-50 flex flex-col justify-center">
            <div className="max-w-md w-full mx-auto">
                <div className="text-3xl mt-2 font-bold text-gray-900 text-center"> Login</div>
            </div>
            <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
                <form action="" className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="text-sm font-bold text-gray-600 block">Username or Email</label>
                        <input name="user" type="text" onChange={e => setUser(e.target.value)}
                               className="w-full p-2 border border-gray-300 rounded mt-1 text-gray-600"
                               placeholder="Enter Username or Email" autoComplete="off" />
                    </div>
                    <div>
                        <label className="text-sm font-bold text-gray-600 block">Password</label>
                        <input name="password" type="password" onChange={e => setPassword(e.target.value)}
                               className="w-full p-2 border border-gray-300 rounded mt-1 text-gray-600"
                               placeholder="Enter Password" autoComplete="off"/>
                    </div>
                    <div>
                        <button className="w-full bg-blue-600 rounded text-white">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}