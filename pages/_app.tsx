import '@/styles/globals.css'
import './../styles/pages.css'
import './../styles/responsive.css'
import type { AppProps } from 'next/app'
import { ConfigProvider } from 'antd'

export default function App({ Component, pageProps }: AppProps) {
  return( <ConfigProvider theme={{
              token: {
                colorPrimary: '#5d5dff',
                colorText :'#eee',
                
              },
          }}>
              <Component {...pageProps} />
          </ConfigProvider> )
}
