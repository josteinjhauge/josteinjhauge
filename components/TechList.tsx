"use client";
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const TechList: React.FC = () => {
    return (
        <List>
            <ListItem>
                <ListItemText primary="React" />
            </ListItem>
            <ListItem>
                <ListItemText primary="TypeScript" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Material-UI" />
            </ListItem>
        </List>
    );
};

export default TechList;