import React from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import useInput from '../hooks/useInput';
import { loginAction } from "../reducers/user";
import { UserOutlined } from '@ant-design/icons';
import { Input, Button, Form } from "antd";
import styled from 'styled-components';

// rerendering 방지! {} === {} false기 때문에 바뀐 것으로 인식;
const ButtonWrapper = styled.div`
    margin-top: 10px
`
// const style = usememo(() => ({ marginTop: 10}), []);

const FormWrapper = styled(Form)`
    padding: 10px
`

const LoginForm = () => {
    const dispatch = useDispatch();
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');
    // const [id, setId] = useState('');
    // const [password, setPassword] = useState('');

    // const onChangeId = useCallback((e) => {
    //     setId(e.target.value)
    // }, []);

    // const onChangePassword = useCallback((e) => {
    //     setPassword(e.target.value)
    // }, []);

    const onSubmitForm = useCallback(() => {
        console.log(id, password);
        dispatch(loginAction({id, password}));
    }, [])

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">ID</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} size="large" placeholder="ID" prefix={<UserOutlined />} required/>
                <label htmlFor="user-password">password</label>
                <br />
                <Input name="user-password" value={password} onChange={onChangePassword} size="large" placeholder="password" prefix={<UserOutlined />} required/>
            </div>
            <ButtonWrapper >
                <Button type="primary" htmlType="submit">Login</Button>
            </ButtonWrapper>
        </FormWrapper>
    );
};

export default LoginForm;