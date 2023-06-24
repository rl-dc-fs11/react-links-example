import { Avatar, Button, Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import { Link } from "react-router-dom";

function Cards({ user }) {
  return (
    <Card
      hoverable
      style={{ width: 300 }}
      cover={<img alt="example" src={user?.gravatarUrl} />}
      actions={[
        <Button type="dashed">
          <Link to={`/users/${user?.id}`}> Links ↗ </Link>
        </Button>,
      ]}
    >
      <Meta
        avatar={<Avatar>{user?.name?.charAt(0)}</Avatar>}
        title={user?.name}
        description={user?.email}
      />
    </Card>
  );
}

export default Cards;
