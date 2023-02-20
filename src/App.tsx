import React, {useState} from 'react'
import {Button} from 'antd'
import reactLogo from './assets/react.svg'
import {createHashRouter,RouterProvider} from "react-router-dom";
import Index from "./pages";
import Detail from "./pages/detail";

const router = createHashRouter([
    {path: '/', element: <Index/>},
    {path: '/detail/:id', element: <Detail/>},
])


function App() {
    const [count, setCount] = useState(0)
    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo"/>
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
                <a href="https://ant-design.antgroup.com/index-cn" target="_blank">
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" className="logo"
                         alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React + Ant.Design</h1>
            <div className="card">
                <Button type="primary" onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </Button>
            </div>
            <RouterProvider router={router}/>
        </div>
    )
}

export default App
