import {useState} from "react";
import AuthService from "../../services/AuthService";
import {useNavigate} from "react-router-dom";
import { setAuthToken } from "./Auth";

const Login = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setErrorMessage('');
        try {
            const response = await AuthService.login(user, password);
            setAuthToken(response.data['token']);
            navigate('/');
        } catch (err: any) {
            setErrorMessage(err.response.data.message);
        }
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
                               placeholder="Enter Password" autoComplete="off"/>
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