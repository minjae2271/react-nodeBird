import React from "react";
import { useSelector } from "react-redux";
import { Button, Card, Popover} from 'antd';
import propTypes from 'prop-types';
import { EllipsisOutlined, HeartOutlined, MessageOutlined, RetweetOutlined } from "@ant-design/icons";

const PostCard = ({ post}) => {
    const id = useSelector((state) => state.user.me?.id)

    return (
        <div>
            <Card 
                cover={post.Images[0] && <PostImages images={post.Images}/>}
                actions={[
                    <RetweetOutlined key='retweet'/>,
                    <HeartOutlined key='heart'/>,
                    <MessageOutlined key='message'/>,
                    <Popover key='popover' content={(
                        <Button.Group>
                            {id && post.id === id && (
                                <>
                            <Button>수정</Button>
                            <Button type="danger">삭제</Button>
                                </>
                            ): <Button>신고</Button>}
                        </Button.Group>
                    )}>
                        <EllipsisOutlined />
                    </Popover>
                ]}
            >
            </Card>
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