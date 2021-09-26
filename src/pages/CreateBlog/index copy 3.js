//import React, { useState } from 'react'
import React from 'react'
import { Button, Gap, Input, TextArea, Upload, Link } from '../../components'
import './createBlog.scss';
import { useHistory } from 'react-router';
//import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { postToAPI, setForm, setImgPreview } from '../../config/redux/action';


const CreateBlog = () => {
    const {form, imgPreview} = useSelector(state => state.createBlogReducer);
    const {title, body, image} = form;
    const dispacth = useDispatch();

    // const [title, setTitle] = useState('');
    // const [body, setBody] = useState('');
    // const [image, setImage] = useState('');
    //const [imagePreview, setimagePreview] = useState(null);

    const history = useHistory();
    const onSubmit = () => {
        postToAPI (form);

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
            <p className="title">Content New Blog Post</p>
            <Input label="Post Title" value={title} onChange ={(e) => dispacth(setForm('title',e.target.value))} />
            <Upload onChange ={(e) => onImageUpload(e)} img={imgPreview}/>
            {console.log('imgPreview :',imgPreview)}
            <TextArea value={body} onChange ={(e) => dispacth(setForm('body',e.target.value))} />
            <Gap height={20}/>
            <div className="button-action">
                <Button title="Save" onClick={onSubmit} />
            </div>
            <Gap height={20}/>

        </div>
    )
}

export default CreateBlog
