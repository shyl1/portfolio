import LoadingContext from '@ContextAPI/LoadingContext'
import { useContext, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import ButterflyEffect from 'src/feedback/ButterflyEffect';

export default function MainLayout() {

  const {loading , setLoading} =useContext(LoadingContext);

  const location = useLocation();

  // Reset loading state when navigating to a new route
  useEffect(()=>{
    setLoading(true);

    const timer = setTimeout(()=> {
      setLoading(false);
    },3000 );

    return ()=> clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <ButterflyEffect />}
      {!loading && (
        <section>
          <Outlet />
        </section>
      )}
    </>
  )
}
