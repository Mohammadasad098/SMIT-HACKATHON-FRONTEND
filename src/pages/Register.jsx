import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const registerUser = async (data) => {
    console.log('Form Values:', data);
    setLoading(true);

    try {
      const response = await fetch(`http://localhost:3000/api/v1/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to register. Please check the provided data.');
      }

      const result = await response.json();
      console.log('API Response:', result);

      // ✅ کامیاب رجسٹریشن پر:
      toast.success('User registered successfully! Please log in.');
      
      setTimeout(() => {
        navigate('/login'); // لاگ ان پیج پر ری ڈائریکٹ
      }, 2000);
    } catch (error) {
      console.error('Error:', error);
      toast.error(error.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <ToastContainer position="top-right" autoClose={3000} />
      <form
        onSubmit={handleSubmit(registerUser)}
        className="bg-white shadow-lg rounded-lg px-8 py-10 w-full max-w-md"
      >
        <div className="mb-6">
          <h1 className="text-center text-4xl font-bold text-gray-800">REGISTER</h1>
        </div>
        <div className="border rounded-3xl px-6 py-8 bg-[#ffeef2]">
          <label className="block mb-4">
            <input
              {...register('userName', { required: true })}
              type="text"
              placeholder="Enter your username"
              className="input input-bordered w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            {errors.userName && <span className="text-red-600">Username is required</span>}
          </label>
          <label className="block mb-4">
            <input
              {...register('email', { required: true })}
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            {errors.email && <span className="text-red-600">Email is required</span>}
          </label>
          <label className="block mb-4">
            <input
              {...register('password', { required: true })}
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            {errors.password && <span className="text-red-600">Password is required</span>}
          </label>
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 bg-[#00b5fd] text-white rounded-lg"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-dots loading-md"></span>
              ) : (
                'REGISTER'
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
