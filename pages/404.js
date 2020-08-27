import Link from "next/link";

const ErrorPage = () => {
    return (
        <>
            <h2>Error 404 | Page not found!</h2>
            <Link href={`/`}><a>Go back to home -></a></Link>
        </>
    )
}

export default ErrorPage;