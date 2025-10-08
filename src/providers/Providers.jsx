import { Suspense } from 'react'
import { StateProvider } from './StateProvider'
//import { ValidationProvider } from './ValidationProvider'
import Loading from '@/app/components/skeleton/Loading'

export default function Providers({ children }) {
  return (
    <Suspense fallback={<Loading />}>
      <StateProvider>{children}</StateProvider>
    </Suspense>
  )

  // return (
  //   <ValidationProvider>
  //     <StateProvider>{children}</StateProvider>
  //   </ValidationProvider>
  // )
}
