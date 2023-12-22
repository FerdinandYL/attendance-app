import {useState, useEffect} from "react";
import { jwtDecode } from "jwt-decode";
import { useLoaderData } from "react-router-dom";

import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3001';

axios.interceptors.request.use(config => {
  const authToken = sessionStorage.getItem('token');
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }
  return config;
});

export async function loader() {
  console.log('loading');
  try {
    // Use a config object to pass headers and other options to Axios
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // Use the configured Axios instance to make the request
    const response = await axios.get('/attendance', config);
    return response.data;
  } 
  
  catch (error) {
    // Handle the error or rethrow it based on your requirements
    console.error('Error during HTTP request:', error);
    return null;
  }
}

export default function CatatKehadiran() {

    const response = useLoaderData();
    console.log(response);
    const attendanceData = response.Data;
    console.log(attendanceData);
    let status;
    if(attendanceData==null){
      status = 'timein';
    } else {
      if(attendanceData.time_in!=null && attendanceData.time_out!=null){
        status = null;
      }else if(attendanceData.time_in!=null && attendanceData.time_out==null){
        status = 'timeout';
      }
    }
    console.log(status);
    async function writeAttendance() {
      try {
        const token = sessionStorage.getItem('token');
        const response = await axios.post('http://localhost:3001/attendance', token);
        console.log(response.data.result); // Check the response and handle it accordingly
        //ga nge redirect cuy
      } catch (error) {
        console.error('Error during timeIn:', error);
      }
    }
  
    let element;
    if (status == null) {
      element = (
        <div>
          <h1>Kamu sudah presensi hari ini!</h1>
          <button className="ui disabled button" style={{ marginRight: '15px' }}>
            Mulai
          </button>
          <button className="ui disabled button" type="disabled">
            Berhenti
          </button>
        </div>
      );
    }
    else if (status == 'timeout'){
      element = (
        <div>
          <h1>Kamu mencatat mulai bekerja pukul : {attendanceData.time_in}</h1>
          <button className="ui disabled button" type="disabled" style={{ marginRight: '15px' }}>
            Mulai
          </button>
          <button className="ui green button" onClick={writeAttendance}>
            Berhenti
          </button>
        </div>
      );
    } else if (status == 'timein') {
      element = (
        <div>
          <h1>Kamu belum mengisi presensi kehadiran hari ini.</h1>
          <button className="ui green button" style={{ marginRight: '15px' }} onClick={writeAttendance}>
            Mulai
          </button>
          <button className="ui disabled button" type="disabled">
            Berhenti
          </button>
        </div>
      );
    }
    return (
      <div style={{ marginLeft: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <div className="ui middle aligned center aligned grid" style={{ width: '60vw' }}>
          <div className="column">{element}</div>
        </div>
      </div>
    );
  }