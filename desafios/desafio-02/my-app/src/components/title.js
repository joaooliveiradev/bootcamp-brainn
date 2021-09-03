import PropTypes from 'prop-types';
const Title = ({ children, sizeHeading, className }) => {
    const sizeHeadingsArr = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    let Heading;
    sizeHeadingsArr.includes(sizeHeading) ? Heading = sizeHeading : <h1 className={className}>{children}</h1>;
    return <Heading className={className}>{children}</Heading>
}
Title.propTypes = {
    children: PropTypes.string,
    sizeHeading: PropTypes.string,
    className: PropTypes.string
}
Title.defaultProps = {
    children: 'Title',
    sizeHeading: 'h1',
}
export default Title;