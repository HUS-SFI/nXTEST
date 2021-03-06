import Layout from "../../components/Layout"
import { getAllPostIds, getPostData } from "../../lib/posts"
import Head from "next/head"

export default function Post({ postData }) {
    return (
        <>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <Layout>
                {postData.title}
                <br />
                {postData.id}
                <br />
                {postData.date}
                <br />
                <div
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />
            </Layout>
        </>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)

    return {
        props: {
            postData,
        },
    }
}
