import { BrowserRouter, Route, Routes } from "react-router-dom";
import content from "../pages/content";
import sports from "../pages/sports";
import health from "../pages/health";
import diary from "../pages/diary";


const Router = () => {
    return (
        <BrowserRouter>
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