import React from 'react'
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import Avatar from '@mui/material/Avatar'
import "./navbaar.css"
import { NavLink } from 'react-router-dom';
const Navbaar = () => {
    return (
        <div>
            <header>
                <nav>
                    <div className='left'>
                        <div className='navlogo'>
                            {/* <img src="./amazon_PNG25.png" alt="logo" /> */}
                           <NavLink to='/'><h1 style={{ color: "red" }}>sujan ecommercein</h1></NavLink> 
                        </div>
                        <div className="nav_searchbaar">
                            <input type="text" name="" id="" />
                            <div className="search_icon">
                                <SavedSearchIcon></SavedSearchIcon>

                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className="nav_btn">
                            <NavLink to='./login'> sign in</NavLink>

                        </div>
                        <div className="cart_btn">
                            <Badge badgeContent={4} color="primary">
                                <AddShoppingCartIcon id="icon" />
                            </Badge>
                            <p>Cart</p>

                        </div>
                        <Avatar className='avtar' />

                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbaar
