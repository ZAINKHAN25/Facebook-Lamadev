import { useNavigate } from "react-router-dom";
import AvatarImg from '../../images/Avatar-Image.png'

export default function Closefriends({ user }) {
    const Navig = useNavigate()
    return (
        <li onClick={() => {
            Navig(`/profile/${user.username}`)
        }} className="sidebarfriend">
            <img src={user.profilePicture || AvatarImg} alt="" className="sidebarfrndimg" />
            <span className='sidebarfrndname'>{user.username}</span>
        </li>
    )
}