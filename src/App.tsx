import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'
import { UsersPage } from './pages/UsersPage';

const queryClient = new QueryClient();

function App() {

 

  return (
    <QueryClientProvider client={queryClient}>
      <section id="center">
        <UsersPage />
      </section>
    </QueryClientProvider>
  )
}

export default App
