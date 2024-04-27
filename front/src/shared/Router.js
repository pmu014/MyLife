import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../pages/Header";
import Content from "../pages/content";
import Sports from "../pages/sports";
import Health from "../pages/Health";
import Diary from "../pages/diary";


const Router = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="content" element={<Content/>}/>
                <Route path="sports" element={<Sports/>}/>
                <Route path="health" element={<Health/>}/>
                <Route path="diary" element={<Diary/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;