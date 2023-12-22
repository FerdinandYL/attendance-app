import React from "react";
import { Form, redirect, useNavigate } from "react-router-dom";

import axios from "axios";

export async function action(){
    console.log('action jalan');
    if(sessionStorage.getItem('token') != null){
        console.log('redirect harusnya');
        return redirect('/');
    } else {
        console.log('error balik lagi');
        return redirect('/login');
    }
}


export default function Login(){

    const navigate = useNavigate();

    const [user, setUser] = React.useState(
        {
            email : '',
            password : ''
        }
    );

    function handleChangeEmail(e){
        setUser({
            ...user,
            email:e.target.value
        })
    }

    function handleChangePassword(e){
        setUser({
            ...user,
            password:e.target.value
        })
    }

    async function login(e) {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/login', user);
    
            if(response.status !== 200){
                console.log('error');
                console.log(response.Message.toString());
            } else {
                console.log('navigating');
                sessionStorage.setItem('token', response.data.Data);
                navigate('/', {replace:true});
            }
        } catch (error) {
            console.error('An error occurred during login:', error.message);
        }
    }

    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
            <div className="ui middle aligned grid" style={{width: '40vw'}}>
                <div className="column">
                    <Form className="ui form" method="post">
                        <h1 className="ui center aligned header">CheckMate✔️</h1>
                        <div className="field">
                            <label>Email</label>
                            <input type="text" name="email" placeholder="Email" onChange={handleChangeEmail}/>
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input type="password" name="password" placeholder="Password" onChange={handleChangePassword}/>
                        </div>
                        <button className="fluid ui button positive" type='submit' onClick={login}>Submit</button>
                    </Form>
                </div>
            </div>
        </div>
    );
}