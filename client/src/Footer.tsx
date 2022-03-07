import { Box } from '@mui/material'
import React from 'react'
import Copyright from './Copyright'
import Version from './Version'

const Footer: React.FC = () => {
    return (
        <Box>
            <Version />
            <Copyright />
        </Box>
    )
}

export default Footer