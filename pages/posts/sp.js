import Link from "next/link"
import Head from "next/head"
import Layout from "../../components/Layout"
export default () => {
    return (
        <Layout>
            <div className="main">
                <Head>
                    <title>Second Post</title>
                </Head>
                <h1>second post</h1>

                <br />
                <Link href="/">
                    <a>home</a>
                </Link>
            </div>
        </Layout>
    )
}
