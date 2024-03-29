import { Layout } from 'antd';
import HeaderComponent from './components/Header';
import SiderComponent from './components/SiderComponent';
import Flow from './components/Flow';
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
    </Layout >
  );
}

export default App;
