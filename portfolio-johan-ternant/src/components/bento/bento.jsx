//Code édité par Johan
//Contient le bento du "home"
import PropTypes from "prop-types"; //Import de PropTypes

//Composant pour afficher un bloc de présentation
const BentoBox = ({ title, children, className = "" }) => (
  <div className={`bento-box ${className}`}>
    <h2>{title}</h2>
    {children}
  </div>
);

//Validation des types des props
BentoBox.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default BentoBox;
