import React from "react";
import { ColorConsumer } from "../contexts/Context";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColors = () => {
    return (
        <>
            <h2>색상을 선택해주세요.</h2>
            <ColorConsumer>
                {({ actions }) => (
                    <div style={{ display: "flex" }}>
                        {colors.map((color) => (
                            <div
                                key={color}
                                style={{
                                    background: color,
                                    width: "24px",
                                    height: "24px",
                                    cursor: "pointer",
                                }}
                                onClick={() => actions.setColor(color)}
                                onContextMenu={(e) => {
                                    e.preventDefault();
                                    actions.setSubColor(color);
                                }}
                            />
                        ))}
                    </div>
                )}
            </ColorConsumer>
            <hr />
        </>
    );
};

export default SelectColors;
