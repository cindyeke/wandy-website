import React, { useEffect, useState} from 'react'
import CategoryPosts from './CategoryPosts'

function Category(props) {
    const host = ''
    const linkProps = props.location.categoryProps

    const postsPerView = 4
    const [categoryPosts, setCategoryPosts] = useState([])
    const [firstPostsToDisplay, setFirstPostsToDisplay] = useState([])
    const [clickCount, setClickCount] = useState(1)
    const [isEnd, setIsEnd] = useState(false)



    useEffect(()=> {
        fetchCategoryPosts()
        

        const goToTop = () => {
            window.scrollTo(0,0)
        }

        goToTop()

        // eslint-disable-next-line
    }, [linkProps.name])


    const fetchCategoryPosts = async () => {
        const path = `${host !== '' ? host:'http://localhost:5000'}/posts/category?id=${linkProps.name}`

        try{
            const res = await fetch(path)
            const data = await res.json()

            const newDt = data.map(newData=> {
                const imgData = newData.image.data
                const img = new Buffer.from(imgData).toString('ascii')
                
                newData.image = img

                return newData
            })

            setCategoryPosts(newDt)
            setFirstPostsToDisplay(newDt.slice(0,4))
            setClickCount(1)
            setIsEnd(false)
        }
        catch(err){
            console.log(err)
        }
    }

    const handleLoadMore = () => {
        setClickCount(clickCount + 1)

        const totalPosts = categoryPosts.length
        const numberOfClicks = Math.ceil(totalPosts / postsPerView)
         
        
        if(numberOfClicks === clickCount+1) {
                setIsEnd(true)
        }
            
        const num1 = ((clickCount + 1) - 1) * 4
        const num2 = (clickCount + 1 ) * 4
        
        const newPosts = categoryPosts.slice(num1, num2)
        setFirstPostsToDisplay([...firstPostsToDisplay, ...newPosts])
    }

    return (
        <section className="category-container">
            <CategoryPosts posts={categoryPosts} firstPosts={firstPostsToDisplay} title={linkProps.name}/>
            {(categoryPosts.length <= 4 || isEnd === true) ? undefined : <div className="loadmore" onClick={handleLoadMore}>LOAD MORE</div>}
        </section>
    )
}

export default Category


// get the time that user can click load more
// when time is exhausted, set limit 