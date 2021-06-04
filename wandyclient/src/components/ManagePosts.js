import React, { useState, useEffect } from 'react'
import '../css/Dashboard.css'
import moment from 'moment'
import Modal from './Modal'


function ManagePosts({ clickPosts }) {
    const host = ''


    const [posts, setPosts] = useState([])
    const [createPost, setCreatePost] = useState(true)
    const [updatePost, setUpdatePost] = useState(false)
    const [deletePost, setDeletePost] = useState(false)
    const [editPost, setEditPost] = useState(false)
    const [postId, setPostId] = useState()
    const [postTitle, setPostTitle] = useState('')
    const [postContent, setPostContent] = useState('')
    const [postTag, setPostTag] = useState([])
    const [postedImage, setPostedImage] = useState()
    const [postImage, setPostImage] = useState()
    const [postCreatedAt, setPostCreatedAt] = useState()
    const [newCheckedInfo, setNewCheckedInfo] = useState([])
    const [showSelectImage, setShowSelectImage] = useState(false)
    const [message, setMessage] = useState('')
    const [hasError, setHasError] = useState(false)
    const [toTrigger, setToTrigger] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [modalMessage, setModalMessage] = useState('')
    const [isEnd, setIsEnd] = useState(false)

    const [links, setLinks] = useState([])

    const stateLinks = JSON.parse(localStorage.getItem('categoryLinks'))

    const [checkedState, setCheckedState] = useState(Array(stateLinks.length).fill(false))

    useEffect(()=>{
        const fetchCategoryLinks = async () => {
            const path = `${host !== '' ? host:'http://localhost:5000'}/links`
            try{
                const res = await fetch(path)
                const data = await res.json()
                
                setLinks(data)
            }
            catch(err){
                console.log(err)
            }
        } 
    
        fetchCategoryLinks()
    
    },[toTrigger])

    useEffect(()=>{
        const fetchAllPosts = async () => {
            const path = `${host !== '' ? host:'http://localhost:5000'}/posts/all`
            try{
                const res = await fetch(path)
                const data = await res.json()
                
                setPosts(data)
            }
            catch(err){
                console.log(err)
            }
        }

        fetchAllPosts()
    }, [toTrigger])

    useEffect(()=>{
        const makeCategoryArr = () =>{
            const newLinkInfo = stateLinks.map((statelink, index)=>{
                const newArrayObj = {index, name: statelink.name, booleanValue:false}
    
                return newArrayObj
            })

            setNewCheckedInfo(newLinkInfo)
        }        

        makeCategoryArr()
        // eslint-disable-next-line
    },[editPost])

    useEffect(()=>{
        const goToTop = () => {
            window.scrollTo(0,0)
        }

        goToTop()
    }, [isEnd])


    const setActive = (content) =>{
        if(content === 'create') {
            setCreatePost(true)
            setUpdatePost(false)
            setDeletePost(false)
            setEditPost(false)
            setMessage('')
            setPostTitle('')
            setPostContent('')
            setCheckedState(Array(stateLinks.length).fill(false))
            setPostTag([])
            setPostImage() 
        } else if(content === 'update'){
            setCreatePost(false)
            setUpdatePost(true)
            setDeletePost(false)
            setMessage('')
            setPostTitle('')
            setPostContent('')
            setCheckedState(Array(stateLinks.length).fill(false))
            setPostTag([])
            setPostImage() 
        } else if(content === 'delete'){
            setCreatePost(false)
            setUpdatePost(false)
            setDeletePost(true)
            setEditPost(false)
            setMessage('')
            setPostId('')
        }
    }

    const handleValidation = (whichContent) =>{
        if(postTitle === '' || postContent === '') {
            setHasError(true)
            setMessage('No field should be left empty')
        } 
        else{
            handleCheckboxes(whichContent)
        }
        
    }

    const handleCheckboxes = (whichContent) =>{
         let count = 0
         checkedState.forEach(link => link && count++)

         if(whichContent === 'update'){
            handleFileInput(whichContent)
         }
         
         if(count === 0){
            setHasError(true)
            setMessage('Please select a tag')
         }
         else{
            handleFileInput(whichContent)
         }
    }

    const handleFileInput = (whichContent) => {
        if(postImage === undefined){
            setHasError(true)
            setMessage('Please select an image')
        }
        else{
            const fileExt = postImage.type

            if(!('image/jpeg' === fileExt || 'Buffer' === fileExt))
            {
                setHasError(true)
                setMessage('Image must be jpeg format')
            }else {
                if(postImage.size > 1024000){
                    setHasError(true)
                    setMessage('Image size cannot exceed more than 1MB')
                }
                else{
                    if(whichContent === 'create'){
                        submitCreateForm()
                    }

                    if(whichContent === 'update'){
                        if(fileExt === 'Buffer'){
                            submitUpdateForm(fileExt)
                        }
                        else{
                            submitUpdateForm('')
                        }
                        
                    }
                }
            }
        }
    }

    const handleCheckbox = (position) => {
        let tagArray = []
        
        const updCheckedState = checkedState.map((booleanValue, index)=> index === position ? !booleanValue : booleanValue)
        setCheckedState(updCheckedState)

        if(updCheckedState[position] === true){
            tagArray.push({id: links[position].id, name:links[position].name, count: links[position].count})
            setPostTag([...postTag, ...tagArray])
        }
        else{
            tagArray = postTag.filter(tag => tag.name !== links[position].name)
            setPostTag(tagArray)
        }
    }

    const handleUpdate = (id, title, description, tag, image, createdAt) => {
        setUpdatePost(false)
        setShowSelectImage(false)
        setPostId(id)
        setPostTitle(title)
        setPostContent(description)
        setPostCreatedAt(createdAt)
        setPostTag(tag)

        let tagArr = tag.split(',')

        const tagFromDb = newCheckedInfo.map(newChecked=>{
            tagArr.map((tg)=>{
                if(tg === newChecked.name){
                    newChecked.booleanValue = true
                }
                return newChecked.booleanValue
            })
            return newChecked.booleanValue
        })

        setCheckedState(tagFromDb)

        const imgData = image.data
        const img = new Buffer.from(imgData).toString('ascii')
        setPostedImage(img)
        setPostImage(image)
        setEditPost(true)
    }

    const handleSelectImage = () =>{
        setShowSelectImage(!showSelectImage)
    }

    const submitCreateForm = async () => {

        const tagNameArray = postTag.map(posttag => (
            posttag.name
        ))

        const formData = new FormData()
        formData.append('title', postTitle)
        formData.append('description', postContent)
        formData.append('tag', tagNameArray.toString())
        formData.append('updatedAt', moment().toISOString())
        formData.append('createdAt', moment().toISOString())
        formData.append('image', postImage)

        try{
            const path = `${host !== '' ? host:'http://localhost:5000'}/post`
            const res = await fetch(path, {
                method: 'POST',
                body: formData
            })

            const data = await res.text()
            setHasError(false)
            setMessage(data.toUpperCase())

            postTag.forEach(tag=> {
                const count = tag.count + 1
                const id = tag.id

                const path2 = `${host !== '' ? host:'http://localhost:5000'}/link?count=${count}&id=${id}`

                fetch(path2, {
                    method: 'PUT',
                    headers: {
                        'Content-type':'application/json'
                    }
                })
            })

            setToTrigger(!toTrigger)

            setPostTitle('')
            setPostContent('')
            setCheckedState(Array(links.length).fill(false))
            setPostTag([])
            setPostImage() 
            setIsEnd(true)
        }
        catch(err){
            console.log(err)
        }
    }

    const submitUpdateForm = async (fileExt) => {
        let path = ''
        let data = ''
        
        try{
            if(fileExt !== 'Buffer'){
                path = `${host !== '' ? host:'http://localhost:5000'}/post`

                const formData = new FormData()
                formData.append('title', postTitle)
                formData.append('description', postContent)
                formData.append('tag', postTag)
                formData.append('updatedAt', moment().toISOString())
                formData.append('createdAt', postCreatedAt)
                formData.append('image', postImage)
                formData.append('id', postId)

                const res = await fetch(path, {
                    method: 'PUT',
                    body: formData
                })
    
                data = await res.text()
            }
            else {
                path = `${host !== '' ? host:'http://localhost:5000'}/post/noimage`
                const res = await fetch(path, {
                    method: 'PUT',
                    headers: {
                        'Content-type':'application/json'
                    },
                    body: JSON.stringify({title: postTitle, description: postContent, tag: postTag, updatedAt: moment().toISOString(), createdAt: postCreatedAt, id: postId})
                })
    
                data = await res.text()
            }

            
            setHasError(false)
            setMessage(data.toUpperCase())

            setToTrigger(!toTrigger)
            setEditPost(false)
            setUpdatePost(true)
            setPostTitle('')
            setPostContent('')
            setCheckedState(Array(links.length).fill(false))
            setPostTag([])
            setPostImage() 
            setIsEnd(true)
        }
        catch(err){
            console.log(err)
        }
    }

    const handleDeleteIcon = (id, tag) => {
        setShowModal(true)
        setModalMessage('Are you sure you want to delete this post?')
        setPostId(id)
        setPostTag(tag)
    }

    const closeModal = () =>{
        document.querySelector('body').style.overflow = 'visible'
        setShowModal(false)
    }

    const handleDeleteButton = async (id, tag) =>{
        const path = `${host !== '' ? host:'http://localhost:5000'}/post/?id=${id}`

        let tagsArray = tag.split(',')
        
        try{
            const res = await fetch(path, {
                method: 'DELETE'
            })
            const data = await res.text()
            setHasError(false)
            setMessage(data.toUpperCase())
            setShowModal(false)
            document.querySelector('body').style.overflow = 'visible'

            setPosts(posts.filter(post=>(post.id !== id)))
            

            links.forEach(link=>{
                tagsArray.forEach((tg)=>{
                    if(tg === link.name){

                        const count = link.count - 1

                       const path2 = `${host !== '' ? host:'http://localhost:5000'}/link?count=${count}&id=${link.id}`

                        fetch(path2, {
                            method: 'PUT',
                            headers: {
                                'Content-type':'application/json'
                            }
                        })
                    }
                })
            })
        }
        catch(err){
            console.log(err)
        }
    }

  return (
    <>
      {
        clickPosts &&

        <article className="content">
            <div className="choosecategory">
                <span style={createPost ? active : inactive} onClick={()=> setActive('create')}>Create A New Post</span>
                <span style={updatePost || editPost ? active : inactive} onClick={()=> setActive('update')}>Update A Post</span>
                <span style={deletePost ? active : inactive} onClick={()=> setActive('delete')}>Delete A Post</span>
            </div>

            {
              createPost ?
              <div className="showcategory posts">
                  <input autoComplete="off" type="text" id="title" value={postTitle}
                    onChange={(e)=> setPostTitle(e.target.value)}
                    placeholder="Title of post" /><br />
                  <textarea id="description" placeholder="Post Content" 
                    value={postContent}
                    onChange={(e)=> setPostContent(e.target.value)}></textarea><br />
                  <div>Choose Post Tag</div>{
                      links.map((link,index) => (
                        <div key={link.id}>
                            <input type="checkbox" id="chooselink" name="link" value={link.id} 
                            checked={checkedState[index]} 
                            onChange={()=>handleCheckbox(index)} />
                            <label>{link.name}</label><br />
                        </div>
                      ))
                  }<br />
                  <input type="file" id="file" onChange={(e)=> setPostImage(e.target.files[0])} /><br/><br/>

                  <input type="submit" value="SUBMIT POST" onClick={()=>handleValidation('create')} />
              </div> : undefined

            } 

            {
                    updatePost ? 
                            <div className="showcategory" style={{marginLeft:'0px', marginRight:'0px'}}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Post ID</th>
                                        <th>Title of Post</th>
                                        <th>Last Updated</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        posts.map((post, index) => (
                                            <tr key={index}>
                                                <td>{post.id}</td>
                                                <td>{post.title}</td>
                                                <td>{moment(post.updatedAt).format('LLL')}</td> 
                                                <td>
                                                    <i style={{color: '#dba11c', marginRight:'20px'}} 
                                                        className="fa fa-refresh" 
                                                        onClick={()=>handleUpdate(post.id, post.title, post.description, post.tag, post.image, post.updatedAt)}>
                                                    </i>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            </div>
                    : undefined
                }

                {
                    editPost ? 
                    <div className="showcategory posts">
                        <input autoComplete="off" 
                            type="text" 
                            value={postTitle}
                            onChange={(e)=> setPostTitle(e.target.value)} 
                            placeholder="Title of post" /><br />
                        <textarea id="description" 
                            placeholder="Post Content" 
                            value={postContent}
                            onChange={(e)=> setPostContent(e.target.value)}>
                        </textarea><br />
                        <div>Selected Tag</div>
                        {
                            links.map((link,index) => (
                                    <div key={link.id}>
                                        <input type="checkbox" id="chooselink" name="link"
                                        checked={checkedState[index]} disabled={true} />
                                        <label>{link.name}</label><br />
                                    </div>
                            ))
                        }<br />
                        
                        <img src={`http://localhost:5000/${postedImage}`} alt="post" onClick={handleSelectImage} />

                        { showSelectImage ? 
                                <input type="file" id="file" onChange={(e)=> setPostImage(e.target.files[0])} />
                            : undefined
                        }
                        <br/><br/>
                        <input type="submit" value="UPDATE POST" onClick={()=>handleValidation('update')} />
                    </div>
                    : undefined
                }



            {
              deletePost ?
              <div className="showcategory" style={{marginLeft:'0px', marginRight:'0px'}}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Post ID</th>
                                        <th>Title of Post</th>
                                        <th>Last Updated</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        posts.map((post, index) => (
                                            <tr key={index}>
                                                <td>{post.id}</td>
                                                <td>{post.title}</td>
                                                <td>{moment(post.updatedAt).format('LLL')}</td> 
                                                <td>
                                                    <i style={{color: '#dba11c', marginRight:'20px'}} 
                                                        className="fa fa-trash" 
                                                        onClick={()=>handleDeleteIcon(post.id, post.tag)}>
                                                    </i>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                    </div>
              : undefined
            }

            <span className="message" style={hasError? {color:'red'} : {color:'green'}}>{message}</span>
        </article>
      }

    <Modal show={showModal} closeModal={closeModal} message={modalMessage} postId={postId} postTag={postTag} handleDeleteButton={()=> handleDeleteButton(postId, postTag)} />
    </>
  );
}

const active = {
    backgroundColor: 'rgb(219, 161, 28)'
}

const inactive = {
    backgroundColor: 'rgb(219, 161, 28, 0.0)'
}

export default ManagePosts;