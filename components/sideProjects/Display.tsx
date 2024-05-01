"use client";
import { Painting } from '../../lib/paintings';
import { Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import paintings from '../../lib/paintings';
import FrontCard from './FrontCard';
import BackCard from './BackCard';


const Display = () => {
    const [flip, setFlip] = useState(true);

    return (
        <Container maxWidth="lg">
            <Grid
            container
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            >
                {paintings.map((item, i) => (
                    <motion.div
                    layout 
                    key={i}
                    onClick={() => setFlip((prevState) => !prevState)}
                    style={{ width: "20rem", height: "10rem" }}
                    transition={{ duration: 0.7 }}
                    animate={{ rotateY: flip ? 0 : 180 }}
                  >
                    <motion.div
                      transition={{ duration: 0.7 }}
                      animate={{ rotateY: flip ? 0 : 180 }}
                      className="Card"
                    >
                      <motion.div
                        transition={{ duration: 0.7 }}
                        animate={{ rotateY: flip ? 0 : 180 }}
                        className="front"
                      >
                        <FrontCard
                          name={item.name}
                          date={item.date}
                          imgUrl={item.imgUrl} 
                        />
                      </motion.div>
                      <motion.div
                        initial={{ rotateY: 180 }}
                        animate={{ rotateY: flip ? 180 : 0 }}
                        style={{ display: flip ? "none" : "block" }}
                        transition={{ duration: 0.7 }}
                        className="back"
                      >
                        <BackCard path={item.path} name={item.name} date={item.date} subtitle={item.subtitle}  
                        price={item.price} />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
                
    
            </Grid>
      </Container>
    );
};

export default Display;