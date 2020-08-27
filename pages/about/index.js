import React from 'react';
import Router from 'next/router';
import Head from 'next/head';
import {MainLayout} from "../../components/MainLayout";

export default function Index() {

    const linkClickHandler = () => {
        Router.push('/')
    }

    return  (
        <MainLayout title='About'>
            <Head>
                <title>About page</title>
            </Head>
            <h1>About page!!!</h1>

            <button onClick={linkClickHandler}>Go back to Home</button>
            <button onClick={() => Router.push('/posts')}>Go to Posts</button>
        </MainLayout>
    )
}