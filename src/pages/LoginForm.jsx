import { Button, Form, Input, message } from "antd";
import React from "react";
import api from "../services/Api";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

  const navigate = useNavigate();


  const onFinish = async (values) => {
    try {
      const response = await api.post("/auth/login", values);
      const { token, user } = response.data;
      localStorage.setItem('token', token)
      localStorage.setItem('id', user.id)
      // Lógica para redirecionar o usuário para a próxima página após o login bem-sucedido
      message.success(`Seja bem vindo, ${user.name}`);
      navigate(`/users/${user.id}`)
    } catch (error) {
      // Tratamento de erro
      message.error("Falha ao fazer login. Verifique suas credenciais.");
    }
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item
        name="email"
        label="Usuário"
        rules={[
          {
            required: true,
            message: "Por favor, insira seu email.",
            whitespace: false,
            type: "email",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Senha"
        rules={[{ required: true, message: "Por favor, insira sua senha." }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Entrar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
