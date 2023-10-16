import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPostAction } from '../reducers/post';

import { Form, Input, Button } from 'antd';

const PostForm = () => {
    const dispatch = useDispatch();

    const { imagePaths } = useSelector((state) => state.post)

    const [postText, setPostText] = useState('');

    const onChangePostText = useCallback((e) => {
        setPostText(e.target.value);
    }, []);

    const onSubmitPostForm = useCallback(() => {
        dispatch(addPostAction())
    }, []);

    return (
        <Form style={{ margin: '10px 0 20px' }} encType='multipart/form-data' onFinish={onSubmitPostForm}>
            <Input.TextArea
                value={postText} 
                onChange={onChangePostText} 
                maxLength={140} 
                placeholder='anything special today?'
            />
            <div>
                <input type="file" multiple hidden/>
                <Button>이미지 업로드</Button>
                <Button type='primary' style={{ float: 'right' }} htmlType='submit'>chirp!</Button>
            </div>
            <div>
                {imagePaths?.map((imagePath) => (
                    <div key={imagePath} style={{ display: 'inline-block' }}>
                        <img src={imagePath} style={{  width: '200px' }}/>
                        <div>
                            <Button>제거</Button>
                        </div>
                    </div>
                ))}
            </div>
        </Form>
    )
}

export default PostForm;