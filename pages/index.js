import Layout, { siteTitle } from "../components/Layout"
import utilStyles from "../styles/utils.module.css"
import Head from "next/head"
import Link from "next/link"
import { getSortedPostsData } from "../lib/posts"
export default function home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>Home</title>
                <link rel="icon" href="./images/gnf.png" />
            </Head>
            <section className={utilStyles.headingMd}>…</section>
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href="/posts/[id]" as={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            {id}
                            <br />
                            {date}
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData,
        },
    }
}
