import { useEffect, useState } from "react";
import UserService from "../../services/User.service"

type User = {
    username: string;
    email: string;
}

const UserProfile = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        UserService.getUserProfile().then((response) => {
            setUser(response.data);
        });
    }, []);
    

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
                        <input className="bg-[#282c34] rounded-md p-2 border-[1px]" type="text" placeholder={user?.email} />
                        <div className="text-lg">Username</div>
                        <input className="bg-[#282c34] rounded-md p-2 border-[1px]" type="text" placeholder={user?.username}/>
                        <div className="">
                            <button className="p-2 mt-5 bg-gradient-to-r from-pink-500 to-violet-500 background-animate rounded-lg text-lg">Save changes</button>
                        </div>
                    </div>
                    <div className="basis-1/2">
                        <div className="text-2xl">Profile picture</div>
                        <img className="h-16 w-16 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="" />
                        <input type="file" className="block w-full text-sm text-slate-500 
                            file:px-4 file:rounded-full file:border-0 file:text-sm
                            
                        "/>
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