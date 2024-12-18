import './App.css';
import Header from "./Layout/header/Header";
import {Route, Routes} from "react-router-dom";
import Main from "./Page/main/Main";
import Delivery from "./Page/delivery/Delivery";
import Contact from "./Page/contact/Contact";
import Documentation from "./Page/documentation/Documentation";
import Vozvrat from "./Page/vozvrat/Vozvrat";
import Footer from "./Layout/footer/Footer";
import Catalog from "./Page/Catalogs/Catalog";
import CatalogMain from "./Page/Catalogs/CatalogMain";
import DryMixes from "./catalog/PiloMaterial/DryMixes/DryMixes";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/> {/* Главная страница */}
                <Route path="/delivery" element={<Delivery/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/document" element={<Documentation/>}/>
                <Route path="/vozvrat" element={<Vozvrat/>}/>
                <Route path="/categor" element={<CatalogMain/>}/>
                <Route path="/category/:id/:categoryName" element={<DryMixes />} />
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
