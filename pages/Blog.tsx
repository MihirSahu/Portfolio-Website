import styles from '../styles/Home.module.css'
import Link from 'next/link';
import fs from 'fs';


const BlogCard = (article: string) => {

    //console.log(article);
    return (
        <>
            <div className={styles.grid}>
                {/* The below code automatically creates a card with a link for each markdown file passed to this component from Blog.getInitialProps */}
                <Link href={"./blog/" + article?.article.substr(0, article?.article.indexOf('.'))}>
                    <a
                        target="_blank"
                        className={styles.longCard}
                    >
                        <h2>TryHackMe {article?.article.substr(0, article?.article.indexOf('.'))} CTF Writeup &rarr;</h2>
                        <p>
                            My writeup for {article?.article.substr(0, article?.article.indexOf('.'))} CTF.
                        </p>
                    </a>
                </Link>
            </div>
        </>
    );
}

const Blog = ({ articles }: { articles: string[] }) => {

    //console.log(articles);
    const blogCards = [];

    for (let article of articles) {
        blogCards.push(<BlogCard article={article} />);
    }

    return (
        <>
            {blogCards}
        </>
    );
}

Blog.getInitialProps = () => {

    const articlePath = './pages/blog/';
    const articleList: string[] = [];

    fs.readdirSync(articlePath).forEach(file => {
        if (file.slice(-3) === ".md") {
                //console.log(file);
                articleList.push(file);
            }
        }
    );

    //console.log(articleList);

    return { articles: articleList };
}

export default Blog;