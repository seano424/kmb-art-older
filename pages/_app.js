import { useEffect } from 'react'
import Layout from '@/components/Layout'
import SidebarLayout from '@/components/SidebarLayout'
import TagManager from 'react-gtm-module'
import { NavProvider } from '../context/NavContext'
import '../styles/globals.css'
import 'react-image-lightbox/style.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-56JGB7K' })
  }, [])

  return (
    <NavProvider>
      {Component.primarySite ? (
        <Layout>
          <SidebarLayout>
            <Component {...pageProps} />
          </SidebarLayout>
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </NavProvider>
  )
}
export default MyApp
