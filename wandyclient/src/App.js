import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './css/App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Category from './components/Category';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Post from './components/Post';

function App() {

const host = '' // use this to save the env host ip address
const [categoryLinks, setCategoryLinks] = useState([])
const [socialLinks, setSocialLinks] = useState([])

useEffect(()=> {
  fetchCategoryLinks()
  fetchSocial()
}, [])


const fetchCategoryLinks = async () => {
  const path = `${host !== '' ? host:'http://localhost:5000'}/links`
  try{
      const res = await fetch(path)
      const data = await res.json()

      setCategoryLinks(data)
      localStorage.setItem('categoryLinks', JSON.stringify(data))
  }
  catch(err){
      console.log(err)
  }
} 

const fetchSocial = async () => {
  const path = `${host !== '' ? host:'http://localhost:5000'}/socials`
  try{
      const res = await fetch(path)
      const data = await res.json()

      setSocialLinks(data)
      localStorage.setItem('socialLinks', JSON.stringify(data))
  }
  catch(err){
      console.log(err)
  }
} 

  return (
    <>
      <Router>
        <div className="main-container">
          <Navigation links={categoryLinks} socialLinks={socialLinks} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/category/:id" component={Category} />
            <Route path="/post/:postid" component={Post} />
            <Route path="/login" exact component={Login} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route component={NotFound}/>
          </Switch>
        </div>
        <Footer links={categoryLinks} socialLinks={socialLinks} />
      </Router>
    </>
  );
}

export default App;
