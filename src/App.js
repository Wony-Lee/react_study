import React from "react";
import ColorBox from "./componentns/ColorBox";
import SelectColors from "./componentns/SelectColors";
import { ColorProvider } from "./contexts/Context";
const App = () => {
    return (
        <ColorProvider>
            <div>
                <SelectColors />
                <ColorBox />
            </div>
        </ColorProvider>
    );
};

export default App;
