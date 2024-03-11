import { Layout } from 'antd'
import AppRouter from './components/AppRouter.tsx'
import Navbar from './components/Navbar.tsx'
function App() {
  return (
      <Layout>
        <Navbar/>
        <Layout.Content>
          <AppRouter/>
        </Layout.Content>
      </Layout>
      
  )
}

export default App
