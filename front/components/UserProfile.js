import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd"

const UserProfile = ({ setIsLoggedIn }) => {

    const onClickLogout = useCallback(() => {
        setIsLoggedIn(false);
    },[]);

    return (
        <Card
            actions={[
                <div key="twit">짹짹<br />0</div>,
                <div key="followings">팔로잉<br />0</div>,
                <div key="followings">팔로워<br />0</div>,
            ]}
        >
            <Card.Meta
                avatar={<Avatar>MJ</Avatar>}
                title="Minjae"
            />
            <Button onClick={onClickLogout}>Logout</Button>
        </Card>
    );
};

export default UserProfile;