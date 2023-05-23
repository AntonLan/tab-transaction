import { RouterProvider } from 'react-router-dom'
import { router } from '@/components/router/router'
import { DataContextProvider } from '@/context/DataContext'

const App = () => {

  return (
    <div className='max-w-[1440px] mx-auto'>
      <DataContextProvider>
        <RouterProvider router={router} />
      </DataContextProvider>
    </div>
  )
}

export default App
