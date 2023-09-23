import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        return navigate("/login")
    }, [navigate])
    return <h1>Page d'accueil</h1>
}

export default Home;