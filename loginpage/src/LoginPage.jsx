import React, { useState } from "react";

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "user" && password === "password") {
            setIsLoggedIn(true);
            setError("");
        } else {
            setError("Invalid username or password");
            setIsLoggedIn(false);
        }
    };

    return (
        <div>
            <h2>Login Page</h2>
            {isLoggedIn ? (
                <h3>Welcome, {username}!</h3>
            ) : (
                <form onSubmit={handleLogin}>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <div>
                        <label>Username: </label>
                        <input
                            type="text"
                            value={username}
                            placeholder="username"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input
                            type="password"
                            value={password}
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            )}
        </div>
    );
}

export default LoginPage;