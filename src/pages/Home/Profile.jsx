import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ProfileForm from '../../components/profile/ProfileForm';
import ProfileButton from '../../components/profile/ProfileButton';
import PasswordChangeForm from '../../components/profile/PasswordChangeForm';
import useAuthContext from '../../components/hooks/useAuthContext';

const Profile = () => {
    const [isEditing,setEditing]=useState(false);
    const {user, updateUserProfile,changePassword} = useAuthContext()
    const {
        register,
        watch,
        setValue,
        handleSubmit,
        formState: {errors},
    } = useForm()

    useEffect(()=>{
        // setValue("first_name","Pritom Sarkar");
        // setValue("first_name",user.first_name);
        // setValue("last_name",user.last_name);
        Object.keys(user).forEach((key)=>setValue(key,user[key]));

    },[user,setValue]);

    const onSubmit=async(data)=>{
        try{
            const profilePayload = {
                first_name:data.first_name,
                last_name:data.last_name,
                address: data.address,
                phone_number: data.phone_number,
            };
            await updateUserProfile(profilePayload);
            // password change
            if(data.current_password && data.new_password){
                await changePassword({
                    current_password: data.current_password,
                    new_password: data.new_password,
                })
            }
            alert('Profile Updated')
        } catch(error){
            console.log(error);
        }
    }
    return (
        <div className='card w-full max-w-2xl mx-auto bg-base-100 shadow-xl'>
            <div className='card-body'>
                <h2 className='card-title text-2xl mb-4'>Profile Information</h2>
                 <form onSubmit={handleSubmit(onSubmit)}>
                    <ProfileForm
                     register={register}
                     errors={errors}
                     isEditing={isEditing}
                    />

                    
                    <PasswordChangeForm errors={errors} register={register} isEditing={isEditing} watch={watch} />
                    <ProfileButton isEditing={isEditing} setIsEditing={setEditing}></ProfileButton>
                 </form>
            </div>
            
        </div>
    );
};

export default Profile;