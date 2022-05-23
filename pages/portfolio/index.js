import navAndFooterWrapper from "../../common/hoc/navAndFooterWrapper";
import Portfolio from "../../page-assets/portfolio";

function index() {
  return <Portfolio />;
}

export default navAndFooterWrapper(index);
