import React from 'react'
//import { RegisterBg } from '../../../assets'
import { Button, Gap } from '../../atoms'
import './blogItem.scss'
import { useHistory } from 'react-router'

const BlogItem = (props) => {
    const history = useHistory();
    const {image, title, name, date, body} =props;//destructuring (dipersingkat)
    return (
        <div className="blog-item">
            <img className="image-thumb" src={image} alt="post"/>  
            <div className="content-detail">
                <p className="title">{title}</p>
                <p className="author">{name} - {date}</p>
                <p className="body">{body}</p>
                <Gap height={20}/>
                <Button title="View Detail" onClick ={() => history.push('/detail-blog')}/>
            </div>  
        </div>
    )
}

export default BlogItem
