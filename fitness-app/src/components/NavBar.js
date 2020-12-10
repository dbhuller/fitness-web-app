import React from "react";
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';

function NavBar(props) {
    return (
        <List component='nav'>
            <ListItem component='div'>
                <ListItemText inset>
                    <Typography color='inherit' variant='title'>
                        Home
                    </Typography>
                </ListItemText>

                <ListItemText inset>
                    <Typography color='inherit' variant='title'>
                        Pages
                    </Typography>
                </ListItemText>

                <ListItemText inset>
                    <Typography color='inherit' variant='title'>
                        Gallery
                    </Typography>
                </ListItemText>

                <ListItemText inset>
                    <Typography color='inherit' variant='title'>
                        Blog
                    </Typography>
                </ListItemText>

                <ListItemText inset>
                    <Typography color='inherit' variant='title'>
                        Contact
                    </Typography>
                </ListItemText>
            </ListItem>
        </List>
    )
}

export default NavBar;

