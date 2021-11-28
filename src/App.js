import React from "react";
import ColorBox from "./componentns/ColorBox";
import { ColorProvider } from "./contexts/Context";
const App = () => {
    return (
        <ColorProvider>
            <>
                <div>
                    <ColorBox />
                </div>
            </>
        </ColorProvider>
    );
};

export default App;
