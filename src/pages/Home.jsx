import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome</h1>

      <Button>
        <Link to="/login">Deseja entrar ?</Link>
      </Button>

      <Button>
        <Link to="/cadastrar">Deseja cadastrar ?</Link>
      </Button>
    </div>
  );
}

export { Home };
