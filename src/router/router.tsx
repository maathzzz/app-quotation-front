import { Routes, Route} from 'react-router-dom'
import { Home } from '../pages/Home'
import PageCripto from '../pages/PageCripto'

export  function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:code" element={<PageCripto />}/>
    </Routes>
  )
}
