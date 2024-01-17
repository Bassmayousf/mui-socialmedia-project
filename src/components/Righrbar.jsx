import { Avatar, AvatarGroup, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';
import pro from "..//images/pro1.webp"
import pro1 from "..//images/pro2.webp"
import pro2 from "..//images/pro4.webp"
import pro3 from "..//images/pro5.avif"
import pro6 from "..//images/pro6.avif"
import pro7 from "..//images/pro7.webp"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
export default function Righrbar() {
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      rows: 1,
      cols: 1,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      cols: 1,
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      rows: 1,

      cols: 1,

    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
      rows: 1,
      cols: 1,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      rows: 1,
      cols: 1,
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },

    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      cols: 2,
    },
  ];
  return (
    <Box p={2} flex={2}  sx={{display:{xs:"none",sm:"block"},mt:"70px",width:"100%"}}>
      <Box width={300} sx={{position:'static',}}>
<Typography variant='h6'sx={{fontWeight:"100",mb:"18px",mt:"10px"}}>
  Online Friends
</Typography>
<AvatarGroup max={7} total={60}>
      <Avatar alt="Remy Sharp" src={pro} />
      <Avatar alt="Travis Howard" src={pro1} />
      <Avatar alt="Agnes Walker" src={pro2}/>
      <Avatar alt="Trevor Henderson" src={pro3}/>
      <Avatar alt="Travis Howard" src="" />
      <Avatar alt="Agnes Walker" src={pro7}/>
      <Avatar alt="Trevor Henderson" src={pro6}/>
    </AvatarGroup>
    <Typography variant='h6'sx={{fontWeight:"100",mb:"20px",mt:"20px"}}>
  Latest Photos
</Typography>
<ImageList
  sx={{ width: "100%", height: 400 }}
  variant="quilted"
  cols={4}
  gap={5}
  rowHeight={100}
>
  {itemData.map((item) => (
    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
      <img
        {...srcset(item.img, 121, item.rows, item.cols)}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
<Typography variant='h6'sx={{fontWeight:"100"}}>
  Conversations
</Typography>
<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={pro2} />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={pro6} />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={pro3} />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

      </Box>
    </Box>
  );
}
