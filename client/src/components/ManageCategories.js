import React, { useState } from 'react'
import Modal from './Modal'


function ManageCategories( {clickCategory} ) {
    const host = ''

    const [deleteCategory, setDeleteCategory] = useState(false)
    const [createCategory, setCreateCategory] = useState(true)
    const [categoryName, setCategoryName] = useState('')
    const [message, setMessage] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [modalMessage, setModalMessage] = useState('')
    const [hasError, setHasError] = useState(false)
    const [categoryId, setCategoryId] = useState()
    const [categoryLinks, setCategoryLinks] = useState(JSON.parse(localStorage.getItem('categoryLinks')))


    const setActive = () => {
        setCreateCategory(!createCategory)
        setDeleteCategory(!deleteCategory)
        setMessage('')
    }

    const handleCreateCategory = async () => {
        setCategoryName('')
        if(categoryName === ''){
            setMessage('Field cannot be empty!')
            setHasError(true)
        }
        else{
            const pathname = categoryName.toLowerCase().replace(/\s/g, "")
    
            const path = `${host !== '' ? host:'http://localhost:5000'}/link`
            try{
            const res = await fetch(path, {
                method: 'POST',
                headers: {
                'Content-type':'application/json'
                },
                body: JSON.stringify({name: categoryName, pathname})
            })
            const data = await res.text()
        
            document.querySelector('#name').value = ''
            setHasError(false)
            setMessage(data.toUpperCase())
            }
            catch(err){
            console.log(err)
            }
        }
        
    }

    const handleDeleteIcon = (id) => {
        setShowModal(true)
        setModalMessage('Are you sure you want to delete this category link?')
        setCategoryId(id)
    }

    const handleDeleteButton = async (id) =>{
        const path = `${host !== '' ? host:'http://localhost:5000'}/link/?id=${id}`
        
        try{
            const res = await fetch(path, {
                method: 'DELETE'
            })
            const data = await res.text()
            setHasError(false)
            setMessage(data.toUpperCase())
            setShowModal(false)
            document.querySelector('body').style.overflow = 'visible'

            setCategoryLinks(categoryLinks.filter(link=>(link.id !== id)))
            localStorage.setItem('categoryLinks', JSON.stringify(categoryLinks.filter(link=>(link.id !== id))))
        }
        catch(err){
            console.log(err)
        }
    }
    
    const closeModal = () => {
        document.querySelector('body').style.overflow = 'visible'
        setShowModal(false)
    }

  return (
    <>
      {
        clickCategory &&

        <article className="content">
            <div className="choosecategory">
                <span style={createCategory ? active : inactive} onClick={setActive}>Create A New Category</span>
                <span style={deleteCategory ? active : inactive} onClick={setActive}> Delete A Category</span>
            </div>

            {
              createCategory ?
              <div className="showcategory">
                    <input autoComplete="off" type="text" id="name" onChange={(e)=> setCategoryName(e.target.value)}
                    placeholder="Name of Category"/><br />

                    <input type="submit" onClick={handleCreateCategory} value="CREATE" />
                    
              </div> : undefined

            }

            {
              deleteCategory ?
              <div className="showcategory" style={{marginLeft:'0px', marginRight:'0px'}}>
                  <table>
                    <thead>
                      <tr>
                        <th>Category Link</th>
                        <th>No of Posts</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                    {categoryLinks.map((link)=>(
                      <tr key={link.id}>
                        <td>{link.name}</td>
                        <td>{link.count}</td>
                        <td><i onClick={()=> handleDeleteIcon(link.id)} className="fa fa-trash" style={{color:'#dba11c'}}></i></td>
                      </tr>
                      ))}
                    </tbody>
                  </table>
              </div> : undefined
            }

            <span className="message" style={hasError? {color:'red'} : {color:'green'}}>{message}</span>
        </article>
      }

    <Modal show={showModal} closeModal={closeModal}  message={modalMessage} categoryId={categoryId} handleDeleteButton={()=> handleDeleteButton(categoryId)} />
    </>
  );
}

const active = {
    backgroundColor: 'rgb(219, 161, 28)'
}

const inactive = {
    backgroundColor: 'rgb(219, 161, 28, 0.0)'
}

export default ManageCategories;