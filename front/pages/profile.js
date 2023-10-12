import React from "react";
import Head from 'next/head';

import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
    const followerList = [{nicknam: 'mj'},{nicknam: 'wk'},{nicknam: 'zc'},]
    const followingList = [{nicknam: 'mj'},{nicknam: 'wk'},{nicknam: 'zc'},]
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>profile | nodeBird</title>                
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="followers" data={followerList}/>
                <FollowList header="followings" data={followingList}/>
            </AppLayout>
        </>
    );
}

export default Profile;