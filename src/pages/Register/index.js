import React from 'react'
import './register.scss';
import { RegisterBg } from '../../assets';
import { Input,Button,Gap,Link } from '../../components';
import { useHistory } from 'react-router';

const Register = () => {
    const history = useHistory();

    return (
        <div className="main-page">
            <div className="left">
                <img src={RegisterBg} className="bg-image" alt="imageBg"/>

            </div>
            <div className="right">
                <p>Register</p>
                <Input label="Full Name" placeholder="Full Name" />
                <Gap height={18} />
                <Input label="Email" placeholder="Email" />
                <Gap height={18} />
                <Input label="Password" placeholder="Password" />
                <Gap height={50} />
                <Button title="Register"  onClick={()=>history.push('/login')} />
                <Gap height={100} />
                <Link title="Kembali ke Login" onClick={()=>history.push('/login')}/>

            </div>
        </div>
    )
}

export default Register