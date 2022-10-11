import PropTypes from 'prop-types';
import css from './Filter.module.css';

export default function Filter({ onFilter, filter }) {
    return (
        <label className={css.label}>
            Find contacts by name
            <input
                onChange={onFilter}
                type="text"
                value={filter}
                className={css.input}
            ></input>
        </label>
    )
}

Filter.propTypes = {
    onFilter: PropTypes.func,
    filter: PropTypes.string,

}