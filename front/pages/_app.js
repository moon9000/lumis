import { ApolloProvider } from '@apollo/client'
import { Layout } from '../components/Layout/Layout'
import { useApollo } from '../lib/apolloClient'

export default function MyApp({Component, pageProps, children }) {
  const apolloClient = useApollo(pageProps.initialApolloState)
  return (
    <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </ApolloProvider>
  )
}
