import Head from "next/head";
import Layout, { siteTitle } from "../components/layout/layout";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date/date";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

function renderPosts(postData) {
    return postData.map(({ id, date, title }) => {
        return (
            <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                </Link>
                <Date dateString={date} />
            </li>
        );
    });
}

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.titleSm}>
                <p>
                    Hello, I'am Oleg Kireev. I'm a frontend developer. Now I'am starting to figure
                    out Next.js framework
                </p>
            </section>
            <section>
                <ul className={utilStyles.list}>{renderPosts(allPostsData)}</ul>
            </section>
        </Layout>
    );
}
