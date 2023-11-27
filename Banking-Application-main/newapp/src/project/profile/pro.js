import React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Orders from './statement';
import { Box, Container, Grid } from '@mui/material';
import MiniDrawer from './maindash';

const UserProfile = () => {
  return (
    <div>
        <MiniDrawer/>
    <section >
      <Container style={{
          backgroundColor: "#fffb",
          backdropFilter: "blur(12px)",
          position: "absolute",
          top: "75%",
          left: "53%",
          transform: "translate(-50%,-50%)",
          borderColor:'black',
        //  marginTop:"1px"
        }}>
        <Box
          sx={{
            // marginT,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography sx={{ fontSize: 40, color: 'darkblue' }}>Account-Information</Typography>
          <br />
          <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center',paddingLeft:'250px' }}>
            <Grid item xs={5}>
              <Typography variant='h6' >Name </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='h6' >:Parthiban</Typography>
            </Grid>
            <Grid item xs={5}>
          <Typography variant='h6'>Account Number </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='h6'>:6370174</Typography>
            </Grid>
            <Grid item xs={5}>
          <Typography variant='h6'>Account-Type </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='h6'>:Major</Typography>
            </Grid>
            <Grid item xs={5}>
          <Typography variant='h6'>Mobile-Number </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='h6'>:6381882152</Typography>
            </Grid>
            <Grid item xs={5}>
          <Typography variant='h6'>Athar-Number </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='h6'>:xxxx-xxxx-4534</Typography>
            </Grid>
            <Grid item xs={5}>
          <Typography variant='h6'>CIF Number </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='h6'>:PBI6370178</Typography>
            </Grid>
            <Grid item xs={5}>
          <Typography variant='h6'>Branch </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='h6'>:Ukkadam</Typography>
            </Grid>
          </Grid>
          <hr />
        </Box>
      </Container>
    </section>
    </div>
  );
}

export default UserProfile;