"use client";
import React from 'react';
import Image from 'next/image';
import { Box, Typography, styled, useTheme } from '@mui/material';

const Wrapper = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    [theme.breakpoints.down("sm")]: {
        padding: 10,
    },
}));

const TextWrapper = styled('div')(({ theme }) => ({
    width: "40%",
    margin: 10,
    marginRight: 50,
    [theme.breakpoints.down("sm")]: {
        width: "75%",
        marginRight: 10,
    },
}));

const ProfilePic = styled(Image)(({ theme }) => ({
    borderRadius: "10%",
    width: "30%",
    [theme.breakpoints.down("sm")]: {
        width: "50%",
    },
}));

const Intro = () => {
    const theme = useTheme();
    const introtext1 = "Hi, I'm Jostein Hauge."
    const introtext2 = "I'm a software developer based in Oslo, Norway."
    return (
       <Wrapper>
        <TextWrapper>
            <Box m="2rem" />
            <Typography variant="h2" color={theme.palette.text.secondary}>
                {introtext1}
            </Typography>
            <Typography variant="h4" color="initial">
                {introtext2}
            </Typography>
        </TextWrapper>
        <ProfilePic
            src="/img/profile_pic.JPG"
            alt="Profile Image"
            width={200}
            height={220} />
       </Wrapper>
    );
};

export default Intro;