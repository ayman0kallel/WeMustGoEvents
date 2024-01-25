import './signin.css'
import { Button,Checkbox,FormControlLabel,TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import image from '../../assets/homeImg.jpg'
const Signin = () => {
  const {register,handleSubmit,formState:{errors}}=useForm()
  const onSubmit=(data)=>{
    console.log(data);
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