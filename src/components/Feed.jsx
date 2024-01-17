import { Box } from '@mui/material';
import React from 'react';
import Cards from './Cards';
import img from "..//images/premium_photo-1675034393381-7e246fc40755.avif"
import img1 from "..//images/nature.avif"
import img2 from "..//images/file-1705123271268-pro.avif"
import img3 from "..//images/future-fortress-desktop-ij9tfce5ucd9w7t5.webp"

export default function Feed() {
  return (
    <Box p={2} flex={4} sx={{mt:"70px"}}>
      <Cards image={img3}/>
      <Cards image={img1}/>
      <Cards image={img}/>
      <Cards image={img2}/>
    </Box>
  );
}
