import axios from "axios";
import {useState, useEffect} from "react";
import { jwtDecode } from "jwt-decode";
import { useLoaderData } from "react-router-dom";

export async function loader(){
    const result = await axios.post('http://localhost:3001/check', {id:3})
    .then(function(response){
        console.log(response);
        return response.data.result;
    })
    return result;
}

export default function CatatKehadiran() {
    const [isPresence, setIsPresence] = useState(null);
    const [status, setStatus] = useState(null);
    const [time, setTime] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.post('http://localhost:3001/check', {id:3});
          setStatus(response.data);
          console.log(response);
  
          if (response.data.message === 'timein') {
            setIsPresence(false);
            setTime(response.data.result.response.time_in);
          } else {
            setIsPresence(true);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    async function timeIn() {
      try {
        const token = jwtDecode(localStorage.getItem('token'));
        const response = await axios.post('http://localhost:3001/attend', { id: token.id });
        console.log(response.data.result); // Check the response and handle it accordingly
      } catch (error) {
        console.error('Error during timeIn:', error);
      }
    }
  
    function timeOut() {
      // Implement timeOut functionality
    }
  
    let element;
  
    if (isPresence === null) {
      element = <div>Loading...</div>; // Add a loading state if needed
    } else if (!isPresence) {
      element = (
        <div>
          <h1>Kamu belum mengisi presensi kehadiran hari ini.</h1>
          <button className="ui green button" style={{ marginRight: '15px' }} onClick={timeIn}>
            Mulai
          </button>
          <button className="ui disabled button" type="disabled">
            Berhenti
          </button>
        </div>
      );
    } else {
      element = (
        <div>
          <h1>Kamu mencatat mulai bekerja pukul : {time}</h1>
          <button className="ui disabled button" type="disabled" style={{ marginRight: '15px' }}>
            Mulai
          </button>
          <button className="ui green button" onClick={timeOut}>
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