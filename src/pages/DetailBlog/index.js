import React, { useEffect, useState } from 'react'
//import { RegisterBg } from '../../assets'
import './detailBlog.scss'
import { useHistory, withRouter } from 'react-router'
import { Gap, Link } from '../../components'
import Axios from 'axios'

const DetailBlog = (props) => {
    const [data, setData] = useState({});
    useEffect(() => {
        console.log('props : ', props);
        console.log('params : ', props.match.params.id);
        const id = props.match.params.id;
        Axios.get(`http://localhost:4080/v1/blog/post/${id}`)
        .then(res => {
            const dataAPI = res.data
            console.log('res :',dataAPI.data);   
            setData(dataAPI.data);
        })
        .catch(err =>{
            console.log('err :',err);
        })
    }, [props])
    const history = useHistory();
    if(data.author){//jika langsung akan error karena tidak memiliki nilai default data.author
        return (
            <div className="detail-blog-wrapper">
                <img className="img-cover" src={`http://localhost:4080/${data.image}`} alt="thumb"/>
                <p className="blog-title"> {data.author.name}- {data.createdAt}</p>
                <p className="blog-body">{data.body}</p>
                <Gap height={20}/>
                <Link title="Kembali ke Home" onClick={() => history.push('/')} />
            </div>
        )
    }
    return (
    <p>Loading Data...</p>
    )
}

export default withRouter(DetailBlog) 
