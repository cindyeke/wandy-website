import React, { useState } from 'react'

function ManageSettings({ clickSettings }) {

    const host = ''

    const socialLinks = JSON.parse(localStorage.getItem('socialLinks'))
    const [selectSocialLink, setSelectSocialLink] = useState(true)
    const [updateSocialLink, setUpdateSocialLink] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [message, setMessage] = useState('')
    
    const [socialId, setSocialId] = useState()
    const [updDescription, setUpdDescription] = useState()

    const handleClick = (id, description) =>{
        setUpdateSocialLink(true)
        setSelectSocialLink(false)
        setSocialId(id)
        setUpdDescription(description)
    }

    const handleGoBack = () => {
        setMessage('')
        setSelectSocialLink(true)
        setUpdateSocialLink(false)
    }


    const handleUpdate = async (description) =>{
        if(description === ''){
            setMessage('Field cannot be empty')
            setHasError(true)
        }else{
            setMessage('')
            setHasError(false)

            const path = `${host !== '' ? host:'http://localhost:5000'}/login/settings?id=${socialId}&desc=${description}`
            const res = await fetch(path, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            const data = await res.json()

            if(data.affectedRows !== undefined){
                const socialLinksArray = socialLinks.map(socialLink =>{
                    if(socialLink.id === socialId){
                        socialLink.description = updDescription
                    }
                    return socialLink
                })

                localStorage.setItem('socialLinks', JSON.stringify(socialLinksArray))

                setHasError(false)
                setMessage('SUCCESS!')
                setSelectSocialLink(true)
                setUpdateSocialLink(false)
                setUpdDescription(updDescription)
            }else {
                setHasError(true)
                setMessage('AN ERROR OCCURRED')
            }         
        }
    }

  return (
    <>
        {
            clickSettings ?
            <article className="content">
                <div className="showcategory" style={{marginLeft:'0px', marginRight:'0px'}}>
                {
                    selectSocialLink ?
                    <table className="settings">
                        <thead>
                            <tr>
                                <th>Items</th>
                                <th>Description</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                socialLinks.map((sociallink, index) =>(
                                    <tr key={index}>
                                        <td><i className={sociallink.class}></i></td>
                                        <td><input type="text" disabled value={sociallink.description}/></td>
                                        <td>
                                            <i style={{marginRight: '20px'}} className="fa fa-refresh" onClick={()=>handleClick(sociallink.id, sociallink.description)}></i>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    : undefined
                }
                {
                    updateSocialLink ?
                    <div className="showcategory" style={{marginTop: '0px'}}>
                        <button onClick={handleGoBack}>
                            <i className="fa fa-chevron-left"></i>Back
                        </button><br />
                        <input autoComplete="off" type="text" value={updDescription}
                        onChange={(e)=> setUpdDescription(e.target.value)}
                        placeholder="Description" /><br /><br />

                        <input type="submit" value="UPDATE" onClick={()=>handleUpdate(updDescription)} />
                    </div>
                    : undefined
                }
                </div>

                <span className="message" style={hasError? {color:'red'} : {color:'green'}}>{message}</span>
            </article>
            : undefined
        }
    </>
  );
}

export default ManageSettings;