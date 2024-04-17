"use client";
import { links } from '@/lib/links';
import { AppBar, Box, Container, IconButton, Link, List, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

import NextLink from 'next/link';
import { MdClose, MdMailOutline } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa6';
import { ICON_SIZE } from '@/lib/theme';
import { HiMenuAlt3 } from 'react-icons/hi';
import { TfiMenu } from 'react-icons/tfi';
import { IoClose } from 'react-icons/io5';

const Navbar: React.FC = () => {
    const theme = useTheme();

    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    
    return (
        <AppBar>
           <Toolbar>
            <Container 
            style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
            maxHeight: "10vh",
          }}>
                <NextLink href="/" >
                <Typography variant="h5" color="initial">
                    Jostein Hauge
                </Typography>
                </NextLink>

                {isMobile ? (
            <Box>
              <IconButton
                onClick={() => setDrawerOpen(true)}
                aria-label="Side Drawer Open Button"
              >
                <TfiMenu size={ICON_SIZE} color={theme.palette.text.primary} />
              </IconButton>

              <SwipeableDrawer
                anchor="right"
                color='primary'
                open={drawerOpen}
                onOpen={() => setDrawerOpen(true)}
                onClose={() => setDrawerOpen(false)}
              >
                <div
                  style={{ width: 250, marginLeft: 15 }}
                  onClick={() => setDrawerOpen(false)}
                >
                  <div
                    style={{
                      width: 250,
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <IconButton
                      style={{ marginTop: 15, marginRight: 15 }}
                      aria-label="Close Button"
                    >
                      <IoClose color={theme.palette.text.primary} size={ICON_SIZE} />
                    </IconButton>
                  </div>

                  <List>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={links.github}
                    >
                      <ListItemButton aria-label="GitHub Button">
                        <ListItemIcon>
                          <FaGithub color={theme.palette.text.primary} size={ICON_SIZE} />
                        </ListItemIcon>
                        <ListItemText primary="GitHub" />
                      </ListItemButton>
                    </Link>

                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={links.linkedin}
                    >
                      <ListItemButton aria-label="LinkedIn Button">
                        <ListItemIcon>
                          <FaLinkedin color={theme.palette.text.primary} size={ICON_SIZE} />
                        </ListItemIcon>
                        <ListItemText primary="LinkedIn" />
                      </ListItemButton>
                    </Link>

                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={links.email}
                    >
                      <ListItemButton aria-label="Email Button">
                        <ListItemIcon>
                          <MdMailOutline color={theme.palette.text.primary} size={ICON_SIZE} />
                        </ListItemIcon>
                        <ListItemText primary="Email" />
                      </ListItemButton>
                    </Link>
                  </List>
                </div>
              </SwipeableDrawer>
            </Box>
          ) : (
                <Box>
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={links.github}
                    >
                        <IconButton aria-label="GitHub Button">
                            <FaGithub size={ICON_SIZE} color={theme.palette.text.primary}  />
                        </IconButton>
                    </Link>
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={links.linkedin}
                    >
                        <IconButton aria-label="LinkedIn Button">
                            <FaLinkedin size={ICON_SIZE} color={theme.palette.text.primary} />
                        </IconButton>
                    </Link>
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={links.email}
                    >
                        <IconButton aria-label="Email Button">
                            <MdMailOutline size={ICON_SIZE} color={theme.palette.text.primary} />
                        </IconButton>
                    </Link>
            </Box>
          )}
            </Container>
           </Toolbar>
        </AppBar>
    );
};

export default Navbar;