import './signin.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import { Button,Checkbox,FormControlLabel,TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import image from '../../assets/homeImg.jpg'

const Signin = () => {
  const navigate = useNavigate();
  const {register,handleSubmit,formState:{errors}}=useForm()
  const onSubmit= async (data)=>{
    try {
      // Make a POST request to Symfony backend
      const response = await axios.post('http://127.0.0.1:8000/signin', data);
      console.log(response);
      // Handle successful signin, e.g., redirect to dashboard
      navigate('/');
    } catch (error) {
      console.error('Signin failed:', error.response.data.message);
      // Handle signin failure, show error message to the user
    }
  }
  return (
<div className="Auth">
      <img src={image} alt="" />
      <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
        <Typography variant='h4'color="#FF8A71">Sign In</Typography>
        
        <div className="formgroup">
        <TextField 
        {...register('email',{required:"Email Field Required"})} 
        type='email' label="Email"  variant="outlined" />
        <Typography color="error" variant='span'>{errors?.email && errors.email.message}</Typography>

        <TextField 
        {...register('psw',{required:"Password Field Required",
        maxLength:{value:15,message:"Maximun 15 Characters"},
        minLength:{value:4,message:"Minimun 4 Characters"}})} 
        type='password' label="Password"  variant="outlined" />
        <Typography color="error" variant='span'>{errors?.psw && errors.psw.message}</Typography>

        <FormControlLabel control={<Checkbox color="error"/>} label="Remember Me" />
        <Button type='submit' variant="contained">Create Account</Button>

        </div>
      </form>
    
    </div>
  );
}

export default Signin;