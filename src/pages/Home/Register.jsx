import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
// import { Link, useNavigate } from 'react-router';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../components/context/AuthContext';
import ErrorAlert from '../../components/ErrorAlert';

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const {registerUser,errorMsg} = useContext(AuthContext)
    const [successMsg, setSuccessMsg] = useState("");

    //  const onSubmit = async (data) =>{
    //   setLoading(true);
    //   try{
    //     await registerUser(data);
    //     navigate('/login');
    //   }
    //   catch(error){
    //     console.log("Registration Failed",error);
    //   }
    //   finally{
    //     setLoading(false);
    //   }
    // }

 const onSubmit = async (data) => {
    delete data.confirm_password;
    try {
    //   await registerUser(data);
      
      const response = await registerUser(data);
      console.log(response);
      if (response.success) {
        setSuccessMsg(response.message);
        setTimeout(() => navigate("/login"), 3000);
      }
    } catch (error) {
      console.log("Registration failed", error);
    }
  };

    return (
        <div>
             <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 py-16 ">
  <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-2xl shadow-md dark:bg-gray-800 dark:border-gray-700">

         {errorMsg && <ErrorAlert error={errorMsg} />}
          {successMsg && (
            <div role="alert" className="alert alert-success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{successMsg}</span>
            </div>
          )}


    <form className="space-y-6" action="#" onSubmit={handleSubmit(onSubmit)}>
      <h5 className="text-2xl font-semibold text-center text-gray-900 dark:text-white">Sign up to our platform</h5>

      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
           Email
        </label>
        <input
        
          type="email"
          name="email"
          id="email"
          className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="name@gmail.com"
          required
          {...register("email",{required:"Email is required"})}
        />
         {errors.email && (
                <span className="label-text-alt text-error">{errors.email.message}</span>
               )}
      </div>
      <div>
        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          First Name
        </label>
        <input
          type="text"
          name="first_name"
          id="first_name"
          className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Write Your First name"
            {...register("first_name", {
                  required: "First Name is Required",
                })}
        />
         {errors.first_name && (
                <span className="label-text-alt text-error">
                  {errors.first_name.message}
                </span>
              )}
      </div>
      <div>
        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Last Name
        </label>
        <input
          type="text"
          name="last_name"
          id="last_name"
          className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Write Your Last name"
            {...register("last_name", {
                  required: "Last Name is Required",
                })}
        />
         {errors.last_name && (
                <span className="label-text-alt text-error">
                  {errors.last_name.message}
                </span>
              )}
      </div>
      <div>
        <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Address
        </label>
        <input
          type="text"
          name="address"
          id="address"
          className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Write Your address"
            {...register("address", {
                  required: "Address is Required",
                })}
        />
         {errors.address && (
                <span className="label-text-alt text-error">
                  {errors.address.message}
                </span>
              )}
      </div>
      <div>
        <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Number
        </label>
        <input
          type="number"
          name="number"
          id="number"
          className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Write Your number"
          required
           {...register("phone_number")}
        />
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
          className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
           {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />
              {errors.password && (
                <span className="label-text-alt text-error">
                  {errors.password.message}
                </span>
              )}
      </div>


        <div>
        <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Confirm Password
        </label>
        <input
          type="password"
          name="confirm_password"
          id="confirm_password"
          className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
     placeholder="••••••••"
                    {...register("confirm_password", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === watch("password") || "Password do not match",
                })}
              />
              {errors.confirm_password && (
                <span className="label-text-alt text-error">
                  {errors.confirm_password.message}
                </span>
              )}
      </div>

      <div className="flex items-center justify-between">
        <label htmlFor="remember" className="flex items-center space-x-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          <input
            id="remember"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600"
          />
          <span>Remember me</span>
        </label>
        <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">
          Lost Password?
        </a>
      </div>

      <button
        type="submit"
        className="w-full px-5 py-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Create your account
      </button>

      <div className="text-sm font-medium text-center text-gray-500 dark:text-gray-300">
        Already registered?{" "}
        <Link to='/login' className="text-blue-700 hover:underline dark:text-blue-500">
           Login Account
        </Link>
        {/* <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">
          Login account
        </a> */}
      </div>
    </form>
  </div>
</div>
        </div>
    );
};

export default Register;