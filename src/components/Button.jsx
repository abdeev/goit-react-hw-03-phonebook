import PropTypes from 'prop-types';
import css from './Phonebook.module.css';

const DeleteButton = ({ handleDeleteCard }) => {
  return (
    <button type="button" onClick={handleDeleteCard} className={css.delete_button}>
      Delete
    </button>
  );
};
DeleteButton.propTypes = {
  handleDeleteCard: PropTypes.func,
};

export default DeleteButton;