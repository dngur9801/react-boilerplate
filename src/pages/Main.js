import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import HeaderLayout from '../components/HeaderLayout';
// import { ENV } from '../config/config';
import { login } from '../store/slices/user';

function Main() {
  const user = useSelector(state => state.user.value);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(user);
    dispatch(login({ name: 'hong', age: 3 }));
  }, []);
  console.log(user);

  useEffect(() => {
    async function abc() {
      try {
        const response = await axios.get(
          'http://192.168.0.44:9090/post/get_post?brd_id&post_category&post_id=72&post_title&page&select=detail',
        );
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    abc();
  }, []);

  return (
    <>
      <HeaderLayout />
      <p>main</p>
    </>
  );
}

export default Main;
