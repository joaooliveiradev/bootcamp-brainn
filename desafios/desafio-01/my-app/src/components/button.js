import PropTypes from 'prop-types';
const Button = ({ kind, children }) => {
    return (
        <button className={kind} > {children}</button>
    )
}
Button.propTypes = {
    kind: PropTypes.string,
    children: PropTypes.string,
}

export default Button;