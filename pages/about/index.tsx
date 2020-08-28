import React from 'react';
import Router from 'next/router';
import Head from 'next/head';
import {MainLayout} from "../../components/MainLayout";

export default function About({ title }) {

    const linkClickHandler = () => {
        Router.push('/')
    }

    console.log(title);

    return  (
        <MainLayout title='About'>
            <Head>
                <title>About page</title>
            </Head>
            <h1>{title}</h1>

            <button onClick={linkClickHandler}>Go back to Home</button>
            <button onClick={() => Router.push('/posts')}>Go to Posts</button>
        </MainLayout>
    )
}

About.getInitialProps = async () => {
    const response = await fetch(`${process.env.API_URL}/about`);
    const data = await response.json();

    return {
        title: data.title
    }
}