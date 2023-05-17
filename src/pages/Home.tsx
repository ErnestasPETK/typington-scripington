



type HomeProps = {
    authenticated?: boolean
}

const Home = ({ authenticated }: HomeProps): JSX.Element => {

    if (authenticated) {
        console.log("Authenticated ")
    }
    return (
        <>
            <h1>Home page</h1>
        </>
    )
}

export default Home;
