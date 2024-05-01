"use client";
import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, useTheme } from '@mui/material';
import { motion } from "framer-motion";
import { Painting } from '@/lib/paintings';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

type FrontCardProps = Pick<Painting, "date" | "name" | "imgUrl">;

const FrontCard: React.FC<FrontCardProps> = ({ name, date, imgUrl }) => {
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
                <Image
                    width={200}
                    height={200}
                    src={imgUrl}
                    alt={name}
                    style={{
                        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
                    }}
                />
                <Box m="0.5rem" />

                <Typography
                    color="textSecondary"
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

export default FrontCard;