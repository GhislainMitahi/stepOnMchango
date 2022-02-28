import Header from './components/Header';
import Main from './components/Main'
import Footer from './components/core/Footer';


function App(props) {
// states


    return (
       <section className="app">
          <Header video='wold' text="Nous sommes MCHANGO Nous sommes MCHANGO Nous sommes MCHANGO Nous sommes MCHANGO Nous sommes MCHANGO Nous sommes MCHANGO Nous sommes MCHANGO"/>
          <Main/>
          <Footer phone="+243 991745852"
             email="ghislainmitahi@gmail.com"
             ville="goma"
             commune="goma" quartier="kyeshero"
             rue="Rue"
             no="190090900"/>
       </section>
    )
}
export default App;