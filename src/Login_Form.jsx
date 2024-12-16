import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

const Login_Form = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Login form submitted');
  };

  const handleGoogleLogin = () => {
    // Add Google login logic here
    console.log('Google login');
  };

  const handleFacebookLogin = () => {
    // Add Facebook login logic here
    console.log('Facebook login');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        bgcolor: '#f9f9f9',
        p: 3,
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'primary.main' }} />
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <Box
        component="form"
        onSubmit={handleLogin}
        sx={{ mt: 3, width: '100%', maxWidth: 400 }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, mb: 2 }}
        >
          Login
        </Button>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon />}
              onClick={handleGoogleLogin}
            >
              Login with Google
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<FacebookIcon />}
              onClick={handleFacebookLogin}
            >
              Login with Facebook
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Login_Form;
