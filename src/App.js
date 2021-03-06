import {Header} from "./components/Header";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Home} from "./components/Home";
import {ProductList} from "./components/productList/ProductList";
import {Nutrition} from "./components/nutrition/Nutrition";
import {FirebaseState} from "./context/firebase/FirebaseState";
import {Popup} from "./components/nutrition/Popup";
import {PopupState} from "./context/popup/PopupState";


function App() {

    return (
        <FirebaseState>
            <PopupState>
                <BrowserRouter>
                    <div className="App">
                        <Popup/>
                        <Header/>
                        <div className='container pt-4'>
                            <Switch>
                                <Route path='/' exact ><Home/></Route>
                                <Route path='/nutrition' exact ><Nutrition/></Route>
                                <Route path='/productlist' exact ><ProductList/></Route>
                            </Switch>
                        </div>
                    </div>
                </BrowserRouter>
            </PopupState>
        </FirebaseState>
    );
}

export default App;
