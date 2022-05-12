import Navbar from '../navbar';
import Footer from '../footer';

function navAndFooterWrapper(Wrapper) {
    return function navAndFooterWrapper(props) {
        return (
            <>
                <Navbar {...props} />
                
        
                <Wrapper {...props} />

                <Footer {...props} />
            </>
        );
    };
}

export default navAndFooterWrapper;
