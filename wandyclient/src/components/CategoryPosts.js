import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

function CategoryPosts({ firstPosts, title}) {

    const formatDate = (date) =>{
        return moment(date).format('LLL')
    }

    return (
        <>
            <h1>{title}</h1>
            { 
                firstPosts.map(post => (
                    <article key={post.id} className="category-sect">
                        <Link 
                            to={{
                                pathname: `/post/${post.id}`,
                                postProps:{
                                    name:`${post.title}`,
                                    postcontent: `${post.description}`,
                                    lastUpdate: `${post.updatedAt}`,
                                    postImg: `${post.image}`
                                }
                            }}
                         style={{color: 'inherit'}}><h2>{post.title}</h2></Link>
                        <Link to={{
                                pathname: `/post/${post.id}`,
                                postProps:{
                                    name:`${post.title}`,
                                    postcontent: `${post.description}`,
                                    lastUpdate: `${post.updatedAt}`,
                                    postImg: `${post.image}`
                                }
                            }}
                        >
                        <img src={`http://localhost:5000/${post.image}`} alt={post.image} />
                        </Link>
                        <p className="description">{post.description}</p>
                        <Link to={{
                                pathname: `/post/${post.id}`,
                                postProps:{
                                    name:`${post.title}`,
                                    postcontent: `${post.description}`,
                                    lastUpdate: `${post.updatedAt}`,
                                    postImg: `${post.image}`
                                }
                            }}
                        ><p className="readmore">READ MORE</p></Link>
                        <div className="category-sect-footer">
                            <span>{`${formatDate(post.updatedAt)}`}</span>
                            {/* <span>Comments (0)</span> */}
                        </div>
                    </article>
                ))
            }

            
        </>
    )
}

export default CategoryPosts