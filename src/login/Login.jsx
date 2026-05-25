import Style from './Login.module.css'
import { useState, useEffect } from 'react'

function Login(){
    const [users, setUsers] = useState([
    {email: "admin@gmail.com", password: "admin123"}
]);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const handleLogin = (e) => {
        e.preventDefault()
        const found = users.find(u => u.email === email && u.password === password)
        if (found) {
            setMessage("Login")
        } else {
            setMessage("Failed")
        }
    }

    const addUsers = () => {
        const email = window.prompt("Enter email");
        const password = window.prompt("Enter password");
        if (email) {
            const newData = {
                email: email,
                passwoed: password
            };
            setUsers([...users, newData]);
        }
        if (password.length < 8  ) {
            window.alert("password must be 6 characters")
        }

    }

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => setMessage(""), 2000)
            return () => clearTimeout(timer)
        }
    }, [message])



    return(
        <div className={Style.container}>
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" >Submit</button>
                <p style={{color: message === "Login" ? "green" : "red"}}>{message}</p>
            </form>
            <button onClick={addUsers}>Add</button>
        </div>
    );
}

export default Login