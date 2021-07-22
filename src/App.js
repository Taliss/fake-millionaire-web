import './App.css';
import 'antd/dist/antd.css';
import { ContentSection } from './components/ContentSection';
import { HeaderSection } from './components/HeaderSection';

import { Space } from 'antd';

function App() {
  return (
    <div className="App">
      <Space direction="vertical" size={40}>
        <HeaderSection />
        <ContentSection />
      </Space>
    </div>
  );
}

export default App;
