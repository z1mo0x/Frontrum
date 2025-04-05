import Layout from '../../components/UI/Layout/Layout'
import Search from '../../components/UI/Search/Search'
import ForumFilter from '../../components/UX/ForumFilter/ForumFilter'
import ForumPosts from '../../components/UX/ForumPosts/ForumPosts'
import classes from './Forum.module.css'

export default function Forum() {
    return (
        <Layout>
            <section className={classes.forum}>
                <div className="container">
                    <div className={classes.forum__wrapper}>
                        <h1 className={classes.forum__title}> {'<h1>Форум</h1>'}  </h1>
                        <div className={classes.forum__filter}>
                            <ForumFilter />
                            <Search />
                        </div>
                        <ForumPosts />
                    </div>
                </div>
            </section>
        </Layout>
    )
}
