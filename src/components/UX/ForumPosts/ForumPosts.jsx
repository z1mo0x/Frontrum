import { useState, useEffect } from 'react'
import classes from './ForumPosts.module.css'
import ForumPost from '../ForumPost/ForumPost'
import axios from 'axios'
import { Pagination } from '@mui/material'
import Button from '../../UI/Button/Button.jsx'

export default function ForumPosts() {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(9)
    const [page, setPage] = useState(1)

    function handlePage(p) {
        setPage(2)
    }

    async function pagination() {
        try {
            setLoading(true)
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
            setTotalPages((Math.ceil(response.data.length / limit)))
            console.log(totalPages);
            const responseHandle = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _limit: limit,
                    _page: page
                }
            })
            setPosts(responseHandle.data);
            setLoading(false)
        }
        catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        (async () => {
            await pagination()
        }
        )()
    }, [])


    return (
        <>
            <div className={classes.posts}>
                {loading ? <span>Загрузка...</span> : posts.map(item => <ForumPost key={item.id} id={item.id} title={item.title} text={item.body} />)}
            </div>

            <Button onClick={() => { handlePage }}>2</Button>
        </>

    )
}
