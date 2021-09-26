import React, { useState } from 'react'
import { Button, Gap, Input, TextArea, Upload, Link } from '../../components'
import './createBlog.scss';
import { useHistory } from 'react-router';

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const history = useHistory();
    return (
        <div className="blog-post">
            <Link title="kembali" onClick={() => history.push('/')}/>
            <p className="title">Content New Blog Post</p>
            <Input label="Post Title" value={title} onChange ={(e) => console.log(e.target.value)}/>
            <Upload/>
            <TextArea value="hanif"/>
            <Gap height={20}/>
            <div className="button-action">
                <Button title="Save"/>
            </div>
            <Gap height={20}/>

        </div>
    )
}

export default CreateBlog
