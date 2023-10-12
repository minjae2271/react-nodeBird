import React from "react";
import styled from 'styled-components';
import { Form, Input } from "antd";

const NicknameEditForm = () => {
    const FormWrapper = styled(Form)`
        margin-bottom: 20px
        border: 1px solid black
    `
    return (
        <FormWrapper>
            <Input.Search addonBefore="Nickname" enterButton="Edit"/>
        </FormWrapper>
    )
}

export default NicknameEditForm;