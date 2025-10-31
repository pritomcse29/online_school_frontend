import { useContext, useState } from 'react';
import AuthContext from '../../components/context/AuthContext';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router';
import ErrorAlert from '../../components/ErrorAlert';
const Login = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const navigate = useNavigate()

    const {loginUser,errorMsg} = useContext(AuthContext)
    const [loading,setLoading] = useState(false);

    const onSubmit = async (data) =>{
      setLoading(true);
      try{
        await loginUser(data);
        navigate('/dashboard');
      }
      catch(error){
        console.log("Login Failed",error);
      }
      finally{
        setLoading(false);
      }
    }
    return (
        

        <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
  <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-2xl shadow-md dark:bg-gray-800 dark:border-gray-700">
    <form className="space-y-6" action="#" onSubmit={handleSubmit(onSubmit)}>
      <h5 className="text-2xl font-semibold text-center text-gray-900 dark:text-white">Sign in to our platform</h5>
       {errorMsg && <ErrorAlert error={errorMsg}></ErrorAlert>}
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className={`w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${errors.email?"input-error":""}`}
          placeholder="name@gmail.com"
          required
          {...register("email",{required:"Email is required"})}
        />
           {errors.email && (
                <span className="label-text-alt text-error">{errors.email.message}</span>
               )}
      </div>

      <div>
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className={`w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${errors.password?"input-error":""}`}
          required
          {...register("password",{required:"Password is required"})}
        />
         {errors.password && 
               <span className="label-text-alt text-error">
                   {errors.password.message}
                </span>}
      </div>

      <div className="flex items-center justify-between">
        <label htmlFor="remember" className="flex items-center space-x-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          <input
            id="remember"
            type="checkbox"
            className="w-4 h-4 text-emerald-500 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-emerald-500"
          />
          <span>Remember me</span>
        </label>
        <a href="#" className="text-sm text-emerald-500 hover:underline dark:text-emerald-500">
          Lost Password?
        </a>
      </div>

      <button
        type="submit"
        className="w-full px-5 py-2.5 text-sm font-medium text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:bg-emerald-500 dark:bg-emerald-500 dark:bg-emerald-500 dark:focus:bg-emerald-500" disabled={loading}
      >
        {loading?"Log In...": "Login"}
      </button>

      <div className="text-sm font-medium text-center text-gray-500 dark:text-gray-300">
        Not registered?{" "}
        <Link to='/register' className="hover:underline dark:text-emerald-500">
        
          Create account
        </Link>
        {/* <a href="#" >
        </a> */}
      </div>
    </form>
  </div>
</div>


        // <div>
        //     <h1>
        //         This is login page
        //     </h1>
        //     <button onClick={()=>loginUser("admin@gmail.com","1234")}>Click to login</button>
        // </div>
    );
};

export default Login;