"use client";
import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, useTheme } from '@mui/material';
import { motion } from "framer-motion";
import { Painting } from '../../lib/paintings';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

type BackCardProps = Pick<Painting, "path" | "name" | "subtitle" | "date" | "price" >;

const BackCard: React.FC<BackCardProps> = ({ path, name, subtitle, date, price }) => {
    const router = useRouter();
    const theme = useTheme();

    return (
        <motion.div whileHover={{ scale: 1.05 }}>
            <Card
                // onClick={() => router.push(`/painting/${path}`)} // Added backticks and forward slash before "project"
                style={{
                    width: 250,
                    height: "auto",
                    backgroundColor: theme.palette.secondary.main, // Removed quotes around theme.palette.primary.main
                    boxShadow: "0",
                    margin: "1rem",
                    cursor: "pointer",
                    borderRadius: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    padding: "1.5rem",
                }}
            >
                <Typography color="textPrimary" align="center" variant="h6">
                    {name}
                </Typography>

                <Box m="0.25rem" />

                <Typography color="textPrimary" variant="body2" textAlign="center">
                    {subtitle}
                </Typography>

                <Box m="0.25rem" />

                <Typography
                    color="textPrimary"
                    align="center"
                    variant="body2"
                    fontStyle="italic"
                >
                    {date}
                </Typography>
            </Card>
        </motion.div>
    );
};

export default BackCard;