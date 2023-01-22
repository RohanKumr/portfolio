import navAndFooterWrapper from "../../common/hoc/navAndFooterWrapper";
import Contact from "../../page-assets/contact";

function index() {
  return <Contact />;
}

export default navAndFooterWrapper(index);
