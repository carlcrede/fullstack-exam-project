import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../../services/User.service"

type User = {
    username: string;
    email: string;
    profilePicture: string;
}

const UserProfile = () => {
    const [user, setUser] = useState<User | null>(null);
    const [email, setEmail] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        UserService.getUserProfile().then(
            (response) => {
                setUser(response.data);
                setEmail(response.data.email);
                setUsername(response.data.username);
            }, (error) => {
                navigate('/login');
            }
        );
    }, []);
    
    const saveInfo = (e: { preventDefault: () => void; }) => {
        e.preventDefault();        
        UserService.updateUserProfile({email, username}).then(
            (response) => {
                setUser(prev => ({...prev, ...response.data}));
                setEmail(response.data.email);
                setUsername(response.data.username);
            },
            (error) => {
                setError(error.response.data);
            }
        );
    }

    const handleProfilePictureUpload = (e: { target: { files: any; }; }) => {
        const file = e.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('profilePicture', file);
            UserService.uploadProfilePicture(formData).then(
                (response) => {
                    setUser(prev => ({...prev, ...response.data}));
                },
                (error) => {
                    setError(error.response.data);
                }
        )}
    }

  return (
    <>
        <div className="flex justify-center">
            <div className="text-5xl">Hi, {user?.username}!</div>
        </div>
        <div className="grid grid-cols-3 justify-items-center gap-4 bg-[#282c34] p-5 rounded-md">
            <div className="bg-[#060D17]/50 bg-cover rounded-md p-4 w-full">
                <div className="flex">
                    <div className="basis-1/2">  
                        <div className="text-2xl">My Information</div>
                        <div className="text-lg">Email</div>
                        <input className="bg-[#282c34] rounded-md p-2 border-[1px]" type="email" placeholder={user?.email} onChange={e => setEmail(e.target.value)} />
                        <div className="text-lg">Username</div>
                        <input className="bg-[#282c34] rounded-md p-2 border-[1px]" type="text" placeholder={user?.username} onChange={e => setUsername(e.target.value)}/>
                        {error.length > 0 && (
                            <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-2 py-2 text-red-700 ">{error}</div>
                        )}
                        <button onClick={saveInfo} className="p-2 mt-5 bg-gradient-to-r from-pink-500 to-violet-500 background-animate rounded-lg text-lg">Save changes</button>
                    </div>
                    <div className="basis-1/2">
                        <div className="text-2xl">Profile picture</div>
                        <img className="w-20 h-20 object-cover rounded-full" src={user?.profilePicture} alt="" />
                        <input type="file" accept="image/*" multiple={false} 
                            className="block w-full text-sm text-slate-500 
                            file:px-4 file:rounded-full file:border-0 file:text-sm"
                            onChange={handleProfilePictureUpload}
                        />
                    </div>
                </div>
            </div>
            <div className="col-span-2 bg-[#060D17]/50 w-full p-4 rounded-md">
                <div className="text-2xl">My Favorites</div>
            </div>
        </div>
    </>
  )
};

export default UserProfile;