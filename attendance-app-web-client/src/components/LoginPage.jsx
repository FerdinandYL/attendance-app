import Axios from 'axios';
import React from 'react';

export default function LoginPage({setUser}){

    const [form, setForm] = React.useState({
        email:'',
        password:''
    })
    
    function handleOnEmailChange(e){
        setForm({
            ...form,
            email: e.target.value
        });
    }

    function handleOnPasswordChange(e){
        setForm({...form, password:e.target.value});
    }

    function handleOnClick(){
        Axios.post('http://localhost:3001/login',{
            email:form.email,
            password:form.password
        }).then(res=>{
            console.log(res);
            setUser(res.data.result);
        })
    }

    return (
        <div>
            <form>
                <label>Email : </label>
                <input type="text" placeholder="email" value={form.email} onChange={handleOnEmailChange}></input><br/>
                <label>Password : </label>
                <input type="password" placeholder="password" value={form.password} onChange={handleOnPasswordChange}></input><br/>
                <button onClick={handleOnClick}>Submit</button>
            </form>
        </div>
    );
};