import classes from './Auth.module.css';
import { useState } from 'react';
import axios from 'axios';
import './cursor.css'
import { ip } from '../config/constants';


const Auth = () => {

  const [arr, setarr] = useState('Register');
  const [arr1, setarr1] = useState('Already have account');
  const [arr2, setarr2] = useState(true);
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');
  const [pass1, setpass1] = useState('');
  const [arr3, setarr3] = useState(false);

  const fun2 = async () => {
    if (pass != pass1 && pass1.length > 0) {
      //setarr3(!arr3);
      setpass1('');
      console.log('if here');
      return false
    }

    var obj = {
      type: arr,
      email,
      password: pass
    }

    if (obj.type === 'Login') {
      await axios.post(`${ip}/login`, obj).then((res) => {
        console.log(res.data)
      })
    }
    else {
      await axios.post(`${ip}/register`, obj).then((res) => {
        console.log(res.data)
      })
    }

    console.log('else');
    setpass('');
    setpass1('');
    setemail('');
  }

  const fun = async () => {
    if (arr1 === 'Already have account') {
      setarr("Login");
      setarr1("Dont have acount");
    } else {
      setarr("Register");
      setarr1("Already have account");
    }
    setarr2(!arr2);

    await axios.get(`${ip}/`).then((res) => {
      console.log(res.data)
    })

  }
  return (
    <main className={classes.auth}>
      <section>
        <div className={classes.control}>
          <label htmlFor='email'>Email</label>
          <input value={email} type='email' onChange={(e) => setemail(e.target.value)} id='email' />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Password</label>
          <input value={pass} type='password' onChange={(e) => setpass(e.target.value)} id='password' />
        </div>
        {arr2 && <div className={classes.control}>
          <label htmlFor='password'>Confirm Password</label>
          <input value={pass1} type='password' onChange={(e) => setpass1(e.target.value)} id='passwordconfirm' />
          {arr3 && <p> enter correct password</p>}
        </div>
        }
        <button onClick={() => fun2()} >{arr}</button>
        <ul className="pointer">
          <p onClick={() => fun()}>{arr1} </p>
        </ul>
      </section>
    </main>
  );
};

export default Auth;
