// Importamos connect para poder conectarnos con redux

import { connect } from 'react-redux';

// Y este para las animaciones
import { motion } from 'framer-motion'

// Le pasamos una propiedad llamada children(ya que layout va a ser el contendor padre)
const Layout = ({children}) => {
    return (
        <motion.div
        initial={{opacity: 0, transition: {duration: 0.4}}}
        animate={{opacity: 1}}
        exit={{opacity: 0, transition: {duration: 0.4}}}
        >
            {children}
        </motion.div>
    )
}

// Esto lo que va a hacer es llamar a cualquiera de las variables que tengamos de redux
// y que queramos usar
const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {

}) (Layout);