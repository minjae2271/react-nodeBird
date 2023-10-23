import React, { useState, useCallback } from 'react';
import propTypes from 'prop-types';
import { PlusOutLined } from 'antd';

const PostImages = ({ images }) => {
    const [showImagesZoom, setShowImagesZoom] = useState(false);
    const onZoom = useCallback(() => {
        setShowImagesZoom(true);
    }, []);

    if (images.length === 1) {
        return (
            <>
                <img src={images[0].src} onClick={onZoom} />
            </>
        )
    }
    if (images.length === 2) {
        return (
            <>
                <img src={images[0].src} style={{ width:'50%', display: 'inline'}} onClick={onZoom} />   
                <img src={images[0].src} style={{ width:'50%', display: 'inline'}} onClick={onZoom} />  
            </>
        )
    }

    return (
        <>
            <div>
                <img src={images[0].src} onClick={onZoom} />
                <div
                    style={{ display: 'inline-block', width: '50%', textAlign: 'center', verticalAlign: 'middle'}}
                    onClick={onZoom}
                >
                    <PlusOutLined />
                    <br />
                    {images.length}
                    개의 사진 더보기
                </div> 
            </div>
        </>
    )
}

PostImages.propTypes = {
    images: propTypes.arrayOf(propTypes.object)
}

export default PostImages;