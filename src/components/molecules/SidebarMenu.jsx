import React, { useState } from 'react';   
import SchoolIcon from '@mui/icons-material/School';

function SidebarMenu() {

    const links = [
        {
            label: 'Freshman',
            icon: <SchoolIcon />,
            path: '/pages/Freshman',
        },
        {
            label: 'Sophomore',
            icon: <SchoolIcon />,
            path: '/pages/Sophomore',
        },
        {
            label: 'Junior',
            icon: <SchoolIcon />,
            path: '/pages/Junior',
        },
        {
            label: 'Senior',
            icon: <SchoolIcon />,
            path: '/pages/Senior',
        },
    ]
    
    return (
        <>
        </>
    )
}