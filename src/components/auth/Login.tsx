import { useState } from "react";
import AuthService from "../../services/AuthService";
import { setAuthToken } from "./Auth";
import toast from "react-hot-toast";

const Login = () => {
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setErrorMessage('');
        toast.promise(
            AuthService.login(user, password),
            {
                loading: 'Logging in...',
                success: (res) => {
                    setAuthToken(res.data['token']);
                    window.location.href = '/';
                    return <b>Logged in!</b>
                },
                error: (err) => {
                    setErrorMessage(err.response.data.message);
                    return <b>Failed to log in. {err.response.data.message}</b>
                },
            },
        );
    }

    return (
        <div className="flex flex-row justify-center">
            <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300 rounded-lg text-gray-900">
                <div className="text-3xl font-bold text-center mb-4">Login</div>
                <form action="" className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <input required={true} name="user" type="text" onChange={e => setUser(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            placeholder="Enter Username or Email" autoComplete="off" />
                    </div>
                    <div>
                        <input required={true} name="password" type="password" onChange={e => setPassword(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            placeholder="Enter Password" autoComplete="off" />
                    </div>
                    <div className="bg-gradient-to-r 
                                    from-pink-500 to-violet-500 rounded-lg p-2">
                        <button className="w-full rounded text-white font-bold select-none">Log in</button>
                    </div>
                </form>
                {errorMessage.length > 0 && (
                    <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">{errorMessage}</div>
                )}
            </div>
        </div>
    )
}

export default Login;