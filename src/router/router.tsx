import { Routes, Route} from 'react-router-dom'
import { Home } from '../pages/Home'
import PageCripto from '../pages/PageCripto'

export  function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cripto/:code" element={<PageCripto />}/>
    </Routes>
  )
}
