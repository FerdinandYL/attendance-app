import React from "react";
import { Form, redirect } from "react-router-dom";

import axios from "axios";

export function action(){
    console.log(localStorage.getItem('token'));
    return redirect('/');
}


export default function Login(){

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

    async function login(){
        await axios.post('http://localhost:3001/login', {email:user.email, password:user.password})
        .then(function(response){
            if(response.error !== undefined){
                console.log(response.error);
            } else {
                console.log(response.data.result);
                console.log(response.data);
                localStorage.setItem('token', response.data.result);
                return redirect('/')
            }
        })
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
                        <button className="fluid ui button positive" type="submit" onClick={login}>Submit</button>
                    </Form>
                </div>
            </div>
        </div>
    );
}