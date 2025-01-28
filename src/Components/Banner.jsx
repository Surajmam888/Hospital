import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import banner from '../assets/image/gettyimagesnew.png';
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "400px",
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />
      <Box sx={{ position: "relative", zIndex: 2,textAlign:"left" }}>
        <Typography variant="h3" gutterBottom>
          Welcome to Our Hospital
        </Typography>
        <Typography variant="h6">
          Your health is our top priority. Book your appointment today!
        </Typography>
      </Box>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button
            component={Link}
            to="/bookappointment"
            variant="contained"
            color="primary"
            size="large"
            sx={{ paddingX: 4 }}
          >
            Book Appointment
          </Button>
        </Grid>
        <Grid item>
          <Button
            component={Link}
            to="/login"
            variant="outlined"
            color="primary"
            size="large"
            sx={{ paddingX: 4, color: "#000", backgroundColor: "#a12f2a" }}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
