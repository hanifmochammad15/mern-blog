import React, { useEffect, useState } from 'react'
import { BlogItem, Button, Gap } from '../../components'
import './home.scss'
import { useHistory } from 'react-router'
import Axios from 'axios'
import {  useSelector, useDispatch } from 'react-redux'
import { setDataBlog }  from '../../config/redux/action'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css


const Home = () => {//functional component
    const [counter, setCounter] = useState(1);
    const { dataBlog, page } = useSelector(state => state.homeReducer);
    const dispatch = useDispatch();
    
    console.log('data blog global :',dataBlog);
    console.log('page :',page);

    useEffect ( () => {
        dispatch(setDataBlog(counter))
        
    }, [counter,dispatch]);
    
    const history = useHistory();

    const previous = () => {
        //setCounter(counter - 1);
        setCounter(counter <= 1 ? 1 : counter - 1);
        console.log('counter',counter);
    }

    const next = () => {
        //setCounter(counter + 1);
        setCounter(counter === page.totalPage ? page.totalPage  : counter + 1);
        console.log('counter',counter);
    }

    const confirmDelete = (id) => {
        confirmAlert({
        title: 'Confirm to delete',
        message: 'Apakah andayakin akan menghapus post ini?',
        buttons: [
            {
            label: 'Ya',
            onClick: () => {
                Axios.delete(`http://localhost:4080/v1/blog/post/${id}`)
                .then(res => {
                    console.log('Success deleted :',res.data);
                    dispatch(setDataBlog(counter));//reload data
                } )
                .catch(err => {
                    console.log('err :',err)
                } )
            }
            },
            {
            label: 'Tidak',
            onClick: () => console.log('user tidak setuju')
            }
        ]
        });
    }

    return (
        <div className="home-page-wrapper">
            <div className="create-wrapper">
                <Button title ="create blog" onClick={() => history.push('/create-blog')}/>
            </div>
            <Gap height={20}/>
            <div className="content-wrapper">
                {dataBlog.map(blog => {
                    return  (
                        <BlogItem 
                            key={blog._id} 
                            image={`http://localhost:4080/${blog.image}`}
                            title={blog.title}
                            body={blog.body}
                            name={blog.author.name}
                            date={blog.createdAt}
                            _id={blog._id}
                            onDelete={confirmDelete}
                        />
                    )
                })}
            </div>
            <div className="pagination">
                <Button title="Previous" onClick={previous}/>
                <Gap width={20}/>
                <p className="text-page">{page.currentPage} / {page.totalPage}</p>
                <Gap width={20}/>
                <Button title="Next" onClick={next}/>
            </div>
            <Gap height={20}/>

        </div>

    )
}

export default Home
