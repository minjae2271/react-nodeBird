import React, { useCallback, useState } from "react";
import propTypes from 'prop-types';
import { useSelector } from "react-redux";
import { Avatar, Button, Card, Popover} from 'antd';
import { EllipsisOutlined, HeartOutlined, MessageOutlined, RetweetOutlined } from "@ant-design/icons";

import PostImages from "./PostImages";

const PostCard = ({ post }) => {
    const id = useSelector((state) => state.user.me?.id);

    const [commentFormOpen, setCommentFormOpen] = useState(false);

    const onToggleComment = useCallback(() => {
        setCommentFormOpen((prev) => !prev);
    }, []);

    return (
        <div>
            <Card 
                cover={post.Images[0] && <PostImages images={post.Images}/>}
                actions={[
                    <RetweetOutlined key='retweet'/>,
                    <HeartOutlined key='heart'/>,
                    <MessageOutlined key='message' onClick={onToggleComment}/>,
                    <Popover key='popover' content={(
                        <Button.Group>
                            {id && post.id === id ? (
                                <>
                                <Button>수정</Button>
                                <Button type="danger">삭제</Button>
                                </>
                            ) :
                            <Button>신고</Button>}
                        </Button.Group>
                    )}>
                        <EllipsisOutlined />
                    </Popover>
                ]}
            >
                <Card.Meta
                avatar={<Avatar>{post.User.nickname}</Avatar>}
                title={post.User.nickname} 
                    description={post.content}
                />
            </Card>
            { commentFormOpen && <div>댓글</div>}
            {/* <CommentForm />
            <Comments /> */}
        </div>
    )
}

PostCard.propTypes = {
    post : propTypes.shape({
        id: propTypes.number,
        User: propTypes.object,
        content: propTypes.string,
        createdAt: propTypes.object,
        Comments: propTypes.arrayOf(propTypes.object),
        Images: propTypes.arrayOf(propTypes.object)
    }).isRequired,
}

export default PostCard;