import React, { useCallback, useState } from "react";
import useInput from '../hooks/useInput';
import AppLayout from "../components/AppLayout";
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';
import styled from 'styled-components';

const ErrorMessage = styled.div`
    color: red;
`

const Signup = () => {
    const [id, onChangeId] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');
    
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const onChangePasswordCheck = useCallback((e)=> {
        setPasswordCheck(e.target.value);
        setPasswordError(password !== e.target.value);
    }, [password]);

    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState(false);
    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false);
    }, [])

    const onSubmitForm = useCallback(() => {
        if(password !== passwordCheck) {
            return setPasswordError(true);
        }
        if (!term) {
            return setTermError(true);
        }
        console.log(id, nickname, password);
    }, [password, passwordCheck, term]);

    return (
        <>
            <AppLayout>
            <Head>
                <meta charSet="utf-8" />
                <title>singup | nodeBird</title>                
            </Head>
            <Form onFinish={onSubmitForm}>
                <div>
                    <label htmlFor="user-id">ID</label>
                    <br />
                    <Input name="user-id" value={id} onChange={onChangeId} required/>
                </div>
                <div>
                    <label htmlFor="user-nickname">Nickname</label>
                    <br />
                    <Input name="user-nickname" value={nickname} onChange={onChangeNickname} required/>
                </div>
                <div>
                    <label htmlFor="user-password">Password</label>
                    <br />
                    <Input type="password" name="user-password" value={password} onChange={onChangePassword} required/>
                </div>
                <div>
                    <label htmlFor="user-password-check">Password-check</label>
                    <br />
                    <Input type="password" name="user-password-check" value={passwordCheck} onChange={onChangePasswordCheck} required/>
                    {passwordError && <ErrorMessage style={{ color: 'red'}}>비밀번호가 일치하지 않습니다.</ErrorMessage>}
                </div>
                <div>
                    <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>약관에 동의합니다.</Checkbox>
                    {termError && <ErrorMessage>약관에 동의해주세요.</ErrorMessage>}
                </div>
                <div style={{ marginTop: 10}}>
                    <Button type="primary" htmlType="submit">SignUp</Button>
                </div>
            </Form>
            </AppLayout>
        </>
    );
}

export default Signup;