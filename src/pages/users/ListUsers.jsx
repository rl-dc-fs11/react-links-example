import { Col, Pagination, Row, Space } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

import UserCard from "../../components/UserCard";

const ListUsers = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [current, setCurrent] = useState(1);

  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      setLoading(true);
      const response = await axios.get("https://auth.ronierlima.dev/users");

      setList(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <Row justify="center" gutter={[64, 64]} wrap>
        <Col>
          <Pagination
            current={current}
            defaultPageSize={4}
            onChange={onChange}
            total={list.length}
          />
        </Col>
      </Row>

      <Row justify="center" gutter={[64, 64]} wrap>
        {list.slice((current - 1) * 4, current * 4).map((user) => (
          <Col
            key={user.id}
            style={{ display: "flex", justifyContent: "center" }}
            lg={6}
            md={8}
            sm={24}
          >
            <UserCard user={user} />
          </Col>
        ))}
      </Row>
    </Space>
  );
};
export default ListUsers;
