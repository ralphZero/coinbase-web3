import '../styles/globals.css'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'
import 'bootstrap/dist/css/bootstrap.min.css';

const supportedChainId = [4];
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider supportedChainId={supportedChainId} connectors={connectors}>
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  )
}

export default MyApp
