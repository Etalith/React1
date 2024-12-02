import { App } from "./helloworld"
import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root")).render(<App />);

// Can you use the Hello component more than once in the App component? yes you can.
// What happens if you do? the component is simply rendered again.
// Can you render the Message component directly within the App component? yes you can.
// What happens if you do? the message componet is rendered.
