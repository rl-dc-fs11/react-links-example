import { Layout } from "antd";
import Menu from "./components/Menu";
import Routes from "./Routes";
const { Header, Content, Footer } = Layout;
const App = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header>
        <Menu />
      </Header>

      <Content
        style={{
          padding: 48
        }}
      >
        <Routes />
      </Content>

      <Footer>Footer</Footer>
    </Layout>
  );
};
export default App;
