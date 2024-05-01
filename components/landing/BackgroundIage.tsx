import React from 'react';
import Image from 'next/image';
import { styled } from '@mui/material';

const BackgroundImageContainer = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    [theme.breakpoints.down("sm")]: {
        width: "50%",
    },
}));
    
const BackgroundImage = () => {
    return (
        <BackgroundImageContainer>
            <Image
                src="/img/background.jpg"
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
            />
        </BackgroundImageContainer>
    );
};

export default BackgroundImage;