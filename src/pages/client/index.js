import { useState, useEffect } from "react";
import { fetchData } from "../../../utils/api";

export default function Login() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetchData().then((data) => setMessage(data));
    }, []);

    return <h1>Hello from next.js, {message || "Loading"}.</h1>;
}
