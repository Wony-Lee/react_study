import React, { Component } from "react";
import PropTypes from "prop-types";

class MyCompClass extends Component {
    static defaultProps = {
        name: "기본 이름",
    };
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired,
    };
    render() {
        const { name, favoriteNumber, children } = this.props;
        return (
            <div>
                <p>안녕하세요. 제 이름은 클래스 컴포넌트 {name}입니다.</p>
                <p>children은 {children} 입니다.</p>
                <p>제가 좋아하는 숫자는 {favoriteNumber} 입니다.</p>
            </div>
        );
    }
}

export default MyCompClass;
