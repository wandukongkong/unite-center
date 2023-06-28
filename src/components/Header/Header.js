import React, {Fragment, useState} from 'react'
import {
    Button,
    Drawer,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemText
} from '@mui/material'

import './Header.css'


const Header = () => {
    const [oepn, setOpen] = useState(false)
    const Menu = () => {
        return (
            <Box sx={
                    {
                        width: '250px',
                        height: '100%'
                    }
                }
                role="presentation"
            >
                <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={()=>setOpen(false)}>
                          <ListItemText primary={'close'}></ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        )
    }

    return (
        <div className='header'>
            <Fragment key={'left'}>
                <Button variant='outlined'
                    onClick={
                        () => setOpen(true)
                }>Menu</Button>
                <Drawer anchor='left'
                    open={oepn}
                    onClose={()=>setOpen(false)}>
                      <Menu></Menu>
                    </Drawer>
            </Fragment>
        </div>
    )
}

export default Header