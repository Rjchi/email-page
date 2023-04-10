// En app.js manejamos todas las rutas

// Ver https://www.npmjs.com/package/react-helmet | https://www.npmjs.com/package/react-helmet-async
import { Helmet, HelmetProvider } from "react-helmet-async";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import AnimatedRoutes from "AnimatedRoutes";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        {/* ESTO DEBE SER EDITADO PARA TODAS LAS PAGINAS INCLUYENDO LOS META TAGS */}
        <title>Prototype</title>
        <meta name="description" content="Prototipo pagina web react y django (con fines educativos)" />
        <meta name="keywords" content="react & django, react y django, full stack web developer" />
        {/* Con esto indicamos que robots queremos que escaneen el sitio */}
        <meta name="robots" content="all" />
        {/* Aqui indicamos la url preferida con canonical */}
        <link rel="canonical" href="" />
        <meta name="author" content="Richi"/>
        {/* Editor: */}
        <meta name="publisher" content="Richi"/>

        {/* Social Media Tags */}
        <meta property="og:title" content='Prototype' />
        <meta property="og:description" content='Prototipo pagina web react y django (con fines educativos).' />
        <meta property="og:url" content="" />
        {/* Imagen del sitio: */}
        <meta property="og:image" content='' />

        <meta name="twitter:title" content='Prototype' />
        <meta
            name="twitter:description"
            content='Prototipo pagina web react y django (con fines educativos).'
        />
        <meta name="twitter:image" content=''/>
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Provider va a contener nuestro store */}
      <Provider store={store}>
        <Router>
          <AnimatedRoutes />
        </Router>
      </Provider>
    </HelmetProvider>
  );
}

export default App;
