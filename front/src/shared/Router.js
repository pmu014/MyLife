import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../pages/Header";
import Content from "../pages/Content";
import Sports from "../pages/Sports";
import Health from "../pages/Health";
import Diary from "../pages/Diary";
import Movie from "../pages/Movie";
import Drama from "../pages/Drama";
import Anime from "../pages/Anime";
import Others from "../pages/Others";

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="content">
                    <Route index element={<Content/>}/>
                    <Route path="movie" element={<Movie/>}/>
                    <Route path="drama" element={<Drama/>}/>
                    <Route path="anime" element={<Anime/>}/>
                    <Route path="others" element={<Others/>}/>
                </Route>
                <Route path="/sports" element={<Sports/>}/>
                <Route path="/health" element={<Health/>}/>
                <Route path="/diary" element={<Diary/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;