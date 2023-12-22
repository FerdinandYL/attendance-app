import Jwt from "jsonwebtoken";
import {jwtDecode} from 'jwt-decode';

const input = {
    foo:'bar',
    wow:'amazing'
};

const token = 'eyJhbGciOaJIUzI1N5IsIkI5cCI6IkpXVCJ9.eyJmb28iOiJiYXIi4KJ3b3ciOiJhbWF6rW5nOiwiaWF0IjoxNzAzMTQyMzY2LCJleHAiOjE3MDMxNDI0MjZ9.mksb_djTYKBJmprEkg-bLrOV6ProTHnHLCjyLADd3Zg';
console.log(token);

try {
    const decode = jwtDecode(token);
    console.log(decode);
  } catch (error) {
    console.log(error.message);
    console.log(typeof error);
    console.log(typeof error.message);
  }
