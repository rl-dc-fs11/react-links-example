import { EditFilled, EditOutlined, EditTwoTone } from "@ant-design/icons";
import { Avatar, Button, Row, message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

const PerfilUser = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [links, setLinks] = useState([]);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getUser(id);
      getLinks(id);
    }
  }, [id]);

  async function getUser(id) {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://usuarios.ronierlima.dev/users/${id}`
      );

      setUser(response.data);
    } catch (error) {
      message.error(`Usuário não encontrado`);
      navigate(`/users`)
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function getLinks(id) {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://usuarios.ronierlima.dev/users/${id}/links`
      );

      setLinks(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Row justify="center" gutter={[64, 64]} wrap>
      <Avatar size={150} src={user?.gravatarUrl} />
      <h1>{user?.name}</h1>
      {links?.map((link) => (
        <Button key={link._id} type="primary" block>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.title}
          </a>

          {id === localStorage.getItem('id') && <Button icon={<EditOutlined />}></Button>}
        </Button>
      ))}
    </Row>
  );
};
export default PerfilUser;
