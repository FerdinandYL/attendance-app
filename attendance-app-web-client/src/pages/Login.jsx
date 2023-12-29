import React from "react";
import { Form, redirect, useNavigate } from "react-router-dom";

import axios from "axios";
import { jwtDecode } from "jwt-decode";

export async function action(){
    if(sessionStorage.getItem('token') != null){
        return redirect('/user');
    } else {
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
                console.log(response.Message.toString());
            } else {
                sessionStorage.setItem('token', response.data.Data);
                const user = jwtDecode(response.data.Data);
                console.log(user);
                if(user.role == 'employee'){
                    navigate('/user', {replace:true});
                } else if(user.role == 'admin'){
                    navigate('/admin', {replace:true});
                } if(user.role == 'super_admin'){
                    navigate('/superadmin', {replace:true});
                }
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