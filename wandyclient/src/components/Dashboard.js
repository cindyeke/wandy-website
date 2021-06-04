import React, {useState} from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import '../css/Dashboard.css'
import ManageCategories from './ManageCategories'
import ManagePosts from './ManagePosts'
import ManageSettings from './ManageSettings'
import Login from './Login'


function Dashboard() {
  const history = useHistory()

  const [clickCategory, setClickCategory] = useState(false)
  const [clickPosts, setClickPosts] = useState(false)
  const [clickSettings, setClickSettings] = useState(false)

  const location = useLocation()

  const handleLogOut = () =>{
    history.push('/login')
  }

  const handleClick = (content) =>{
    if(content === 'category'){
      setClickCategory(true)
      setClickPosts(false)
      setClickSettings(false)
    } else if(content === 'post'){
      setClickCategory(false)
      setClickPosts(true)
      setClickSettings(false)
    } else if(content === 'personal'){
      setClickCategory(false)
      setClickPosts(false)
      setClickSettings(true)
    }
  }

  if(location.state === undefined){
    return <Login />
  }


  return (
    <>
      <div className="logout">
        <button onClick={handleLogOut}>Log Out</button>
      </div>
      <section className="dashboard">
        <article className="menu">
                <div className="tasks">
                    <div className="task" onClick={()=>handleClick('category')}>
                      <i className="fa fa-link fa-2x"></i>
                      <p>Categories</p>
                    </div>
                    <div className="task" onClick={()=>handleClick('post')}>
                      <i className="fa fa-file-text-o fa-2x"></i>
                      <p>Posts</p>
                    </div>
                    <div className="task" onClick={()=>handleClick('personal')}>
                      <i className="fa fa-cogs fa-2x"></i>
                      <p>Personal Settings</p>
                    </div>
                </div>
        </article>

        <ManageCategories clickCategory={clickCategory}/>
        <ManagePosts clickPosts={clickPosts} />
        <ManageSettings clickSettings={clickSettings} />
      </section>
    </>
  );
}

export default Dashboard;