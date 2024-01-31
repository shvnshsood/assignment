import React from 'react';
import { useForm } from 'react-hook-form';

const SignupForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  return (
    <form className="max-w-md mx-auto mt-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email:
        </label>
        <input
          {...register('email', { required: 'Email is required', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.email && 'border-red-500'
          }`}
          type="text"
        />
        {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name:
        </label>
        <input
          {...register('name', { required: 'Name is required' })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
        />
        {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
          Country:
        </label>
        <input
          {...register('country')}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
          Age:
        </label>
        <input
          {...register('age')}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password:
        </label>
        <input
          {...register('password', { required: 'Password is required', minLength: { value: 8, message: 'Password must be at least 8 characters long' } })}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.password && 'border-red-500'
          }`}
          type="password"
        />
        {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
      </div>
      <div className="mb-6">
        <button
          className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
          type="submit"
          disabled={!Object.keys(errors).length === 0}
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
