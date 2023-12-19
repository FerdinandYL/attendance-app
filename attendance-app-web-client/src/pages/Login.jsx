import React from "react";
import { Form, redirect } from "react-router-dom";

import axios from "axios";

export async function action({request}){
    const formData = Object.fromEntries(await request.formData());
    console.log(formData);
    await axios.post('http://localhost:3001/login', {email:formData.email, password:formData.password})
    .then(function(response){
        if(response.error !== undefined){
            console.log(response.error.toString());
        } else {
            console.log(response.data);
            localStorage.setItem('token', response.data.result);
        }
    })
    if(localStorage.getItem('token')!==null){
        return redirect('/');
    } else {
        return redirect('/login');
    }
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
                        <button className="fluid ui button positive" type="submit">Submit</button>
                    </Form>
                </div>
            </div>
        </div>
    );
}