import React, { useState } from 'react'
import { Button, Gap, Input, TextArea, Upload, Link } from '../../components'
import './createBlog.scss';
import { useHistory } from 'react-router';
import axios from 'axios';

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [image, setImage] = useState('');
    const [imagePreview, setimagePreview] = useState(null);

    const history = useHistory();
    const onSubmit = () => {
        console.log('title', title);
        console.log('body', body);
        console.log('image', image);
        
        const data = new FormData();
        data.append('title', title);
        data.append('body', body);
        data.append('image', image);

        axios.post('http://localhost:4080/v1/blog/post',data,{
            headers : {
                'content-type' : 'multipart/form-data'
            }
        })
        .then(res => {
            console.log('post succes: ', res);
        })
        .catch(err =>{
            console.log('err :',err);
        })

    }

    const onImageUpload = (e) => {
        const file = e.target.files[0];
        setImage (file);
        setimagePreview (URL.createObjectURL(file));
    }

    return (
        <div className="blog-post">
            <Link title="kembali" onClick={() => history.push('/')}/>
            <p className="title">Content New Blog Post</p>
            <Input label="Post Title" value={title} onChange ={(e) => setTitle(e.target.value)} />
            <Upload onChange ={(e) => onImageUpload(e)} img={imagePreview}/>
            <TextArea value={body} onChange ={(e) => setBody(e.target.value)} />
            <Gap height={20}/>
            <div className="button-action">
                <Button title="Save" onClick={onSubmit} />
            </div>
            <Gap height={20}/>

        </div>
    )
}

export default CreateBlog
