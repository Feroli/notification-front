import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const NotificationForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/sendNotification', data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="category">Category:</label>
        <select name="category" ref={register({ required: true })}>
          <option value="SPORTS">Sports</option>
          <option value="FINANCE">Finance</option>
          <option value="MOVIES">Movies</option>
        </select>
        {errors.category && <span>Category is required</span>}
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea name="message" ref={register({ required: true })} />
        {errors.message && <span>Message is required</span>}
      </div>
      <button type="submit">Send Notification</button>
    </form>
  );
};

export default NotificationForm;