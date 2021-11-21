import React from "react";
import { useParams } from "react-router-dom";

const data = {
    wony: {
        name: "이윤원",
        description: "웹싸개",
    },
    gildong: {
        name: "홍길동",
        description: "고전 소설 홍길동전의 주인공",
    },
};

const Profile = () => {
    const { username } = useParams();
    const profile = data[username];
    if (!profile) {
        return <div>존재하지 않는 사용자</div>;
    }
    return (
        <>
            <div>
                <h3>
                    {username} ({profile.name})
                </h3>
                <p>{profile.description}</p>
            </div>
        </>
    );
};

export default Profile;
