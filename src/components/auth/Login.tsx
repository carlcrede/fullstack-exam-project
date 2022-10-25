import {useState} from "react";
import AuthService from "../../services/AuthService";
import {useNavigate} from "react-router-dom";
import useToken from "../../useToken";

export default function Login() {
    const { setToken, token } = useToken();
    const navigate = useNavigate();
    const [password, setPassword] = useState("")
    const [user, setUser] = useState("")

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        await AuthService.login(user, password).then(r => {
            setToken(r.data['token']);
            navigate('/', { state: { token: r.data['token'] } });
        });
    }

    return (
        <div className="flex flex-row justify-center">
            <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300 rounded-lg text-gray-900">
                <div className="text-3xl font-bold text-center mb-4">Login</div>
                <form action="" className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <input name="user" type="text" onChange={e => setUser(e.target.value)}
                               className="w-full p-2 border border-gray-300 rounded mt-1"
                               placeholder="Enter Username or Email" autoComplete="off" />
                    </div>
                    <div>
                        <input name="password" type="password" onChange={e => setPassword(e.target.value)}
                               className="w-full p-2 border border-gray-300 rounded mt-1"
                               placeholder="Enter Password" autoComplete="off"/>
                    </div>
                    <div className="bg-gradient-to-r 
                                    from-pink-500 to-violet-500 rounded-lg p-2">
                        <button className="w-full rounded text-white font-bold select-none">Log in</button>
                    </div>
                </form>
            </div>
        </div>
    )
}