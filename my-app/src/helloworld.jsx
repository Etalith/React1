function HelloWorld() {
    return <h2>Hello, World!</h2>
}

function Day() {
    return <p>What a beautiful day!</p>
}

export function App() {
    return (
        <div>
            <HelloWorld />
            <Day />
        </div>
    )
}
