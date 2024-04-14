import React from 'react';
import { Typography } from '@mui/material';

interface LandingTxtProps {
    header: string;
    subText: string;
}

const LandingTxt: React.FC<LandingTxtProps> = ({ header, subText }) => {
    return (
        <div>
            <Typography variant="h1">{header}</Typography>
            <Typography variant="subtitle1">{subText}</Typography>
        </div>
    );
};

export default LandingTxt;