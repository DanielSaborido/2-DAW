import PropTypes from 'prop-types';

const Parrafo = ({text}) => {
    return (
        <p>{text}</p>
    );
}

Parrafo.propTypes= {
    text: PropTypes.string.isRequired
}

export default Parrafo