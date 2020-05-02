import Link from "next/link";
import Layout from '../components/Layout';
import { Component } from 'react';
import fetch from 'node-fetch';
import Error from './_error';
export async function getStaticProps() {
    const res = await fetch('https://api.github.com/users/reedbarger');
    const statusCode = res.status > 200 ? res.status : false;
    const posts = await res.json();
    return {
        props: {
            posts,
            statusCode
        }
    }
}
export default class About extends Component {
    render() {
        const { name, avatar_url } = this.props.posts;
        const { statusCode } = this.props;
        if(statusCode) {
            return <Error statusCode={statusCode} />
        }
        return (
            <Layout title="About">
                <p>{name}</p>
                <img src={avatar_url} alt="Reed" height="200px"/>
            </Layout>
        )
    }
}