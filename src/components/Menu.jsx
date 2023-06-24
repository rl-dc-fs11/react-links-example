import { AppstoreAddOutlined, MailOutlined } from "@ant-design/icons";
import { Menu as MenuAnt } from "antd";
import { Link } from "react-router-dom";
import { isLogado } from "../auth";

function Menu() {

  const items = [
    {
      label: "Home",
      key: "mail",
      to: "/home",
      icon: <MailOutlined />,
    },
    {
      label: "Usuários",
      key: "app",
      to: "/users",
      icon: <AppstoreAddOutlined />,
    },
    localStorage.getItem('id') && {
      label: "Meu Perfil",
      key: "profile",
      to: `/users/${localStorage.getItem('id')}`,
      icon: <MailOutlined />,
    },
    !isLogado && {
      label: "Login",
      key: "user",
      to: "/login",
      icon: <MailOutlined />,
    },
  ];

  function genarateLinks(items) {

    console.log(items)
    return items.filter(Boolean).map((item) => ({
      ...item,
      label: <Link to={item.to}>{item.label}</Link>,
    }));
  }

  return <MenuAnt mode="horizontal" items={genarateLinks(items)}></MenuAnt>;
}

export default Menu;
