import React, {useState} from "react";
import {useForm} from 'react-hook-form';
import AuthService from "./services/AuthService";
import PasswordChecklist from "react-password-checklist"

interface formData {
    email: string,
    username: string,
    password: string
}

function Signup() {
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const {register, handleSubmit} = useForm<formData>({mode: "onChange"});
    const onSubmit = handleSubmit(({email, username, password}) => {
        AuthService.register(email, username, password).then(r => console.log(r))
    })

    function SubmitButton() {
        if (username.length > 2 && username.length < 21 && email.includes("@")) {
            return <button className="w-full bg-blue-600 rounded text-white">Submit</button>
        } else {
            return <button disabled className="w-full bg-red-600 rounded text-white">Submit</button>
        }
    }

    return (
        <div className=" min-h-screen bg-gray-50 flex flex-col justify-center">
            <div className="max-w-md w-full mx-auto">
                <div className="text-3xl mt-2 font-bold text-gray-900 text-center"> Register new user</div>
            </div>
            <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
                <form action="" className="space-y-6" onSubmit={onSubmit}>
                    <div>
                        <label className="text-sm font-bold text-gray-600 block">Email</label>
                        <input {...register("email")}
                               name="email" type="email" required
                               onChange={e => setEmail(e.target.value)}
                               className="w-full p-2 border border-gray-300 rounded mt-1 text-gray-600"
                               placeholder="Enter Email"/>
                    </div>
                    <div>
                        <label className="text-sm font-bold text-gray-600 block">Username</label>
                        <input {...register("username")}
                               name="username" type="text" onChange={e => setUsername(e.target.value)}
                               className="w-full p-2 border border-gray-300 rounded mt-1 text-gray-600"
                               placeholder="Enter Username"/>
                    </div>
                    <div>
                        <label className="text-sm font-bold text-gray-600 block ">Password</label>
                        <input {...register("password")}
                               name="password" type="password" onChange={e => setPassword(e.target.value)}
                               className="w-full p-2 border border-gray-300 rounded mt-1 text-gray-600"
                               placeholder="Enter Password"/>

                    </div>
                    <PasswordChecklist className="text-black"
                                       rules={["minLength", "specialChar", "number", "capital"]}
                                       minLength={5}
                                       value={password}
                                       onChange={(isValid) => {
                                       }}

                    />
                    <div>
                        <SubmitButton/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup