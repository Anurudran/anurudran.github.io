import React, { useState } from 'react';
import {AiOutlineMenu} from "react-icons/ai"

const Navigation = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <div>
            <AiOutlineMenu />
        </div>
    );
};

export default Navigation;

//className = "absolute top-4 right-4 z-[99] md:hidden"