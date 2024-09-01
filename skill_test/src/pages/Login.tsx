import { useEffect, useState } from 'react';
import video1 from '../../public/1.mp4';
import video2 from '../../public/2.mp4';
import video3 from '../../public/3.mp4';
import video4 from '../../public/4.mp4';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [change, setChange] = useState(1);
    const navigate=useNavigate();


    useEffect(() => {
        const intervalId = setInterval(() => {
            setChange(prevState => {
                if (prevState < 4) {
                    return prevState + 1;
                } else {
                    return 1;
                }
            });
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);
    const [formData,setFormData] = useState({
        email:"",
        password:""
    })
    const [error,setError]=useState({
        status:false,
        message:""
    })

    function handleChange(e:any):any{
        setFormData((prevState:any):any=>{
            return{
                ...prevState,
                [e.target.name]:e.target.value
            }
        })
    }
    
    function handleClick(){
        axios.post("https://skill-test.similater.website/api/v1/user/login",formData)
        .then(res => {
            if(res.data.status==true){
            localStorage.setItem("accessToken",res.data.data.accessToken); 
            navigate("/home");
            }else{
                const error = {
                    status:true,
                    message:"something went wrong try again..."
                }
             setError(error);  
            }
            
        })
        
    }


    return (
        <div className='w-screen h-screen flex flex-row'>
            <div className="w-[35%] h-[100%] bg-black relative">
                <video src={video1} autoPlay muted loop className={`absolute inset-0 ${change !== 3 ? 'hidden' : 'block h-full w-full object-cover'}`} />
                <video src={video2} autoPlay muted loop className={`absolute inset-0 ${change !== 1 ? 'hidden' : 'block h-full w-full object-cover'}`} />
                <video src={video3} autoPlay muted loop className={`absolute inset-0 ${change !== 2 ? 'hidden' : 'block h-full w-full object-cover'}`} />
                <video src={video4} autoPlay muted loop className={`absolute inset-0 ${change !== 4 ? 'hidden' : 'block h-full w-full object-cover'}`} />
            </div>
            <div className="w-[65%] h-[100%] flex flex-col justify-center items-center gap-8">
                <h1 className="font-bold text-3xl">Login</h1>
                <p className={`${error.status==true?`block px-4 py-3 bg-red-50 w-96 text-center text-red-500`:`hidden`}`}>{error.message}</p>
                <input type="text" className="w-96 rounded-lg h-12 px-4 border-2" placeholder="Enter your email" onChange={(e)=>handleChange(e)} name="email" />
                <input type="password" className="w-96 rounded-lg h-12 px-4 border-2" placeholder="Enter your password" onChange={(e)=>handleChange(e)} name="password" />
                <button className='w-96 mt-5 rounded-lg h-10 bg-blue-700 px-4 text-white hover:bg-blue-600' onClick={handleClick}>Login</button>
                <p className='font-serif text-xs text-gray-400'>Can't remember the password don't worry just click here to reset the password</p>
            </div>
        </div>
    );
};

export default Login;
