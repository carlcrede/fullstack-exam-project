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
    <div className="select-none flex justify-center">
        <div>
            <div className="text-2xl">Hi, </div>
            <div className="text-5xl">{user?.username}</div>
        </div>
    </div>
  )
};

export default UserProfile;