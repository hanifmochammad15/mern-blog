import React from 'react'
//import { RegisterBg } from '../../../assets'
import { Button, Gap } from '../../atoms'
import './blogItem.scss'
import { useHistory } from 'react-router'

const BlogItem = (props) => {
    //console.log('props :',props);
    const history = useHistory();
    const {image, title, name, date, body, onDelete} = props;//destructuring (dipersingkat)
    return (
        <div className="blog-item">
            <img className="image-thumb" src={image} alt="post"/>  
            <div className="content-detail">
                <div className="title-wrapper">
                    <p className="title">{title}</p>
                    <div className="edit-wrapper">
                        <p className="edit" onClick={() => history.push(`/create-blog/${props._id}`)}>Edit</p> | <p className="delete" onClick={() => {onDelete(props._id)}}>Delete</p>
                    </div>
                </div>
                <p className="author">{name} - {date}</p>
                <p className="body">{body}</p>
                <Gap height={20}/>
                <Button title="View Detail" onClick ={() => history.push(`/detail-blog/${props._id}`)}/>
            </div>  
        </div>
    )
}

export default BlogItem
