import {useState} from 'react'
import './NavBar.scss'
import './NavBar-Media.scss'


export default () => {

    const [dropdown,setDropdown] = useState(false)

    return (
        <>
            <div className="container">
                <ul className={'Menu-list'}>
                    <div className="menu-list">
                        <div className="Logo">
                            <li>
                                <a href="">Mosaic</a>
                            </li>
                        </div>
                        <div className="List">
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">About</a>
                            </li>
                            <li>
                                <a href="">Project</a>
                            </li>
                            <li>
                                <a href="">Services</a>
                            </li>
                            <li>
                                <a href="">Team</a>
                            </li>
                            <li>
                                <a href="">Blog</a>
                            </li>
                            <li>
                                <a href="">Contact</a>
                            </li>
                        </div>
                        <div
                            className="BarIcon"
                            onClick={()=>setDropdown(!dropdown)}
                        >
                            <div className="icon-menu" >
                                <span className="material-icons">menu</span>
                                <p>Menu</p>
                            </div>
                        </div>
                    </div>

                    {dropdown?
                        <div className="dropDownList">
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">About</a>
                            </li>
                            <li>
                                <a href="">Project</a>
                            </li>
                            <li>
                                <a href="">Services</a>
                            </li>
                            <li>
                                <a href="">Team</a>
                            </li>
                            <li>
                                <a href="">Blog</a>
                            </li>
                            <li>
                                <a href="">Contact</a>
                            </li>
                        </div>:null
                    }
                </ul>
            </div>
        </>
    )
}