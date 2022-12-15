import { FaHome, FaUsers, FaUserTie } from 'react-icons/fa'

import { FiSettings } from 'react-icons/fi'

import { AiOutlinePartition } from 'react-icons/ai'

export const menu = [
    {
        title: 'Home',
        path: '/',
        icon: FaHome
    },
    {
        title: 'Users',
        path: '/users',
        icon: FaUsers
    },
    {
        title: 'Partners',
        path: '/partners',
        icon: AiOutlinePartition
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: FiSettings
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: FaUserTie
    }
]