import React, { useState } from 'react';
import SidebarMenu from 'components/molecules/SidebarMenu';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => setIsOpen(!isOpen);
    
    return (
        <>
            <SidebarMenu />
        </>
    )
}

export default Sidebar;