import { useNavigate } from "react-router-dom";
import AvatarImg from '../../images/Avatar-Image.png'


export default function Online({user}) {
    const Navig = useNavigate()
    return (
        <li className="rightbarfriend" onClick={()=>{
            Navig(`/profile/${user.username}`)
        }}>
            <div className="rightbarprofileimgcontainer">
                <img className='rightbarprofileimg' src={user.profilePicture || AvatarImg} alt="" />
                <div className="rightbaronline"></div>
            </div>
            <span className="rightbarusername">{user.username}</span>
        </li>
    )
}