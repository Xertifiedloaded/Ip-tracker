import React from 'react'
import { useRoutes } from 'react-router-dom'
import MainLayout from './mainLayout/mainLayout'

const Routes = () => {
    return useRoutes([
        {
            path: "/",
            element:<MainLayout/>
    
}
    ]

    )
}

export default Routes