import { Outlet } from 'react-router'
import GlobalLoading from 'src/feedback/GlobalLoading'

export default function MainLayout() {
  return (
    <>
      <GlobalLoading />
      <Outlet />
    </>
  )
}
