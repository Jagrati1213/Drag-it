import Flow from './components/Flow';
import { Layout } from 'antd';
import HeaderComponent from './components/Header';
import SiderComponent from './components/SiderComponent';
const { Content } = Layout;

function App() {
  return (

    <Layout className='App'>
      <HeaderComponent />
      <Layout>
        <SiderComponent />
        <Content style={{ background: 'whitesmoke', minHeight: '90vh', maxHeight: '90vh', width: '100%' }}>
          <Flow />
        </Content>
      </Layout>
      {/* <Footer>Footer</Footer> */}
    </Layout >
  );
}

export default App;
