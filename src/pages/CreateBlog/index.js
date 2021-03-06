//import React, { useState } from 'react'
import React, { useEffect, useState } from 'react'
import { Button, Gap, Input, TextArea, Upload, Link } from '../../components'
import './createBlog.scss';
import { useHistory, withRouter } from 'react-router';
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { postToAPI, setForm, setImgPreview, updateToAPI } from '../../config/redux/action';


const CreateBlog = (props) => {
    const {form, imgPreview} = useSelector(state => state.createBlogReducer);
    const {title, body} = form;
    const [isUpdate, setIsUpdate] = useState(false);
    
    const dispacth = useDispatch();

    // const [title, setTitle] = useState('');
    // const [body, setBody] = useState('');
    // const [image, setImage] = useState('');
    //const [imagePreview, setimagePreview] = useState(null);
    useEffect(() => {
        console.log('props',props);
        const id = props.match.params.id;
        if(id){
                setIsUpdate(true);
                Axios.get(`http://localhost:4080/v1/blog/post/${id}`)
                .then(res => {
                    const data = res.data.data
                    console.log('res :',data.data);  
                    dispacth(setForm('title',data.title));
                    dispacth(setForm('body',data.body)); 
                    dispacth(setImgPreview(`http://localhost:4080/${data.image}`)); 
                })
                .catch(err =>{
                    console.log('err :',err);
                })
        }
    }, [props,dispacth])
    const history = useHistory();
    const onSubmit = () => {
        const id = props.match.params.id;
        if(isUpdate){
            console.log('update data');
            updateToAPI (form, id);
        }else{
            console.log('create data');
            postToAPI (form);
        }

    }

    const onImageUpload = (e) => {
        const file = e.target.files[0];
        dispacth(setForm ('image',file));
        dispacth(setImgPreview (URL.createObjectURL(file)));
        //console.log('image',file)
        // console.log('setImgPreview',URL.createObjectURL(file));
        // console.log('imgPreview2',imgPreview)

    }

    return (
        <div className="blog-post">
            <Link title="kembali" onClick={() => history.push('/')}/>
            <p className="title">{isUpdate ? 'Update' : 'Create New'} Blog Post</p>
            <Input label="Post Title" value={title} onChange ={(e) => dispacth(setForm('title',e.target.value))} />
            <Upload onChange ={(e) => onImageUpload(e)} img={imgPreview}/>
            {console.log('imgPreview :',imgPreview)}
            <TextArea value={body} onChange ={(e) => dispacth(setForm('body',e.target.value))} />
            <Gap height={20}/>
            <div className="button-action">
                <Button title={isUpdate ? 'Update' : 'Simpan'} onClick={onSubmit} />
            </div>
            <Gap height={20}/>

        </div>
    )
}

export default withRouter(CreateBlog) //cara dapat params
