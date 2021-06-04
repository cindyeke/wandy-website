import React, { useState, useEffect } from 'react'
import HomePosts from './HomePosts'
import '../css/Home.css'

function Home() {

    const host = '' // use this to save the env host ip address

    const [posts, setPosts] = useState([])
    const [postsCount, setPostsCount] = useState([])
    const [postsView, setPostsView] = useState(0)
    const [limit1, setLimit1] = useState(0)
    const postsPerView = 6


    useEffect(() => {
        fetchAllPosts()
    }, [limit1]) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(()=> {
        fetchPostsCount()

        const goToTop = () => {
            window.scrollTo(0,0)
        }

        goToTop()
    }, [])

    const fetchAllPosts = async () => {
        const path = `${host !== '' ? host:'http://localhost:5000'}/posts?limit1=${limit1}&limit2=${postsPerView}`
        try{
            const res = await fetch(path)
            const data = await res.json()

            const newDt = data.map(newData=> {
                const imgData = newData.image.data
                const img = new Buffer.from(imgData).toString('ascii')
                
                newData.image = img

                return newData
            })
            setPosts([...posts, ...newDt])
            setPostsView(data.length)
        }
        catch(err){
            console.log(err)
        }
    }

    const fetchPostsCount = async () => {
        const path = `${host !== '' ? host:'http://localhost:5000'}/posts/count`

        try{
            const res = await fetch(path)
            const data = await res.json()
            setPostsCount(data)
        }
        catch(err){
            console.log(err)
        }
    }

    const handleLoadMore = () => {
        setLimit1(limit1 + 6)
    }

    return (
        <section className="article-container">
            <HomePosts posts={posts} postsCount={(postsView === 0 || postsView < 6)? undefined : postsCount} handleLoadMore={handleLoadMore}/>
        </section>
    )
}

export default Home
