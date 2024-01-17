import styled from '@emotion/styled';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Avatar, Box,  Button,  ButtonGroup,  Fab, IconButton, Modal, Stack, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import img from "..//images/7302829c17b36bbd51bc4d98d57508a2.jpg";
import TextField from '@mui/material/TextField';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import { Person } from '@mui/icons-material';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
export default function Add() {
  const ModelStyle= styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  })
  const UserBox= styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px"
  })
  const [open,setOpen]=useState(false)
  return (
    <Box sx={{position:"fixed", bottom:"20px",right:"20px"}} >
    <Tooltip title="Add" onClick={(e)=>{
setOpen(true)
    }}>
  <IconButton >
  <Fab color="primary" aria-label="add">
  <AddOutlinedIcon />
</Fab>

  </IconButton>
</Tooltip>   
<ModelStyle
  open={open}
  onClose={(e)=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} padding={3} borderRadius={5}  bgcolor={"background.default"} color={"text.primary"}>
    <Typography variant='h6' color="gray" textAlign="center"> 
    Create Post
    </Typography>
    <UserBox>
<Avatar src={img} 
sx={{width:30, height:30}}/>
<Typography variant='span' fontWeight={500}>
  Bassma Yousef
</Typography>
    </UserBox>
    <TextField fullWidth label="what do you think" id="fullWidth" marginBottom="60px" variant="filled" rows={2} />
    <Stack direction="row" gap={2} mb="15px" mt={1.5}>
<EmojiEmotionsOutlinedIcon color='primary' />
<VideoCameraFrontOutlinedIcon color='success'/>
<AddPhotoAlternateOutlinedIcon color='error'/>
<Person color='warning'/>

    </Stack>
    <ButtonGroup
    fullWidth
    >
    <Button  size="small" sx={{margin:"25px auto"}} color="primary" variant="contained" >
          post
        </Button>
    <Button  size="small" sx={{margin:"25px auto",width:"100px"}} color="primary" variant="contained" >
          <DateRangeOutlinedIcon/>
        </Button>
    </ButtonGroup>


  </Box>
</ModelStyle>  
    </Box>
  );
}
