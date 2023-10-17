import './topbar.css'
import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import AvatarImg from '../../images/Avatar-Image.png'


export default function Topbar() {
    const navig = useNavigate();
    let [mobileresponsvie, setmobileresponsvie] = useState(false)

    function getCurrentDimension() {
        if (window.innerWidth <= 680) {
            setmobileresponsvie(true)
        } else {
            setmobileresponsvie(false)
        }
    }

    useEffect(() => {
        getCurrentDimension()
    }, [])

    return (
        <div className='topbarcontainer'>
            {mobileresponsvie === false ? (
                <>
                    <div className="topbarLeft">
                        <Link to={'/'} style={{ textDecoration: 'none' }}>
                            <span className="logo">Zainsocial</span>
                        </Link>
                    </div>
                    <div className="topbarCenter">
                        <div className="searchbardiv">
                            <i className="fa-solid fa-magnifying-glass search-icon"></i>
                            <input placeholder='Search for Posts, Friends or video' className="searchInput" />
                        </div>
                    </div>
                    <div className="topbarRight">
                        <div className="topbarlinks">
                            <span className="topbarlink">Home Page</span>
                            <span className="topbarlink">Timeline</span>
                        </div>
                        <div className="topbaricons">
                            <div className="topbariconitem">
                                <i className="fa-solid fa-user"></i>
                                <span className="topbariconbatch">1</span>
                            </div>
                            <div className="topbariconitem">
                                <i className="fa-solid fa-message"></i>
                                <span className="topbariconbatch">2</span>
                            </div>
                            <div className="topbariconitem">
                                <i className="fa-solid fa-bell"></i>
                                <span className="topbariconbatch">13</span>
                            </div>
                        </div>
                        <img src={AvatarImg} alt="" className="topbarimg" />
                        <i title='logout' onClick={() => {
                            localStorage.setItem("loginperson", JSON.stringify(''))
                            navig('/login')
                        }} className="fa-solid fa-right-from-bracket logouticon"></i>
                    </div>
                </>
            ) : (
                <Mobilenav />
            )}
        </div>
    )
}

function Mobilenav() {
    let [mobileresponsetrue, setmobileresponsetrue] = useState(false)

    const navig = useNavigate();

    return (
        <div className='mobileresponsivenavbar'>
            <i onClick={() => { setmobileresponsetrue(!mobileresponsetrue) }} className="fa-solid fa-bars barofmobileresponsive"></i>
            {mobileresponsetrue && (
                <div>
                    <div className="topbarLeft">
                        <Link to={'/'} style={{ textDecoration: 'none' }}>
                            <span className="logo">Zainsocial</span>
                        </Link>
                    </div>
                    <div className="topbarCenter">
                        <div className="searchbardiv">
                            <i className="fa-solid fa-magnifying-glass search-icon"></i>
                            <input placeholder='Search for Posts, Friends or video' className="searchInput" />
                        </div>
                    </div>
                    <div className="topbarRight">
                        <div className="topbarlinks">
                            <span className="topbarlink">Home Page</span>
                            <span className="topbarlink">Timeline</span>
                        </div>
                        <div className="topbaricons">
                            <div className="topbariconitem">
                                <i className="fa-solid fa-user"></i>
                                <span className="topbariconbatch">1</span>
                            </div>
                            <div className="topbariconitem">
                                <i className="fa-solid fa-message"></i>
                                <span className="topbariconbatch">2</span>
                            </div>
                            <div className="topbariconitem">
                                <i className="fa-solid fa-bell"></i>
                                <span className="topbariconbatch">13</span>
                            </div>
                        </div>
                        <img src={AvatarImg} alt="" className="topbarimg" />
                        <span>
                            <i title='logout' onClick={() => {
                                localStorage.setItem("loginperson", JSON.stringify(''))
                                navig('/login')
                            }} className="fa-solid fa-right-from-bracket logouticon"></i> Logout
                        </span>

                    </div>
                </div>
            )
            }
        </div>
    )
}