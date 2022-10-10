import css from './Phonebook.module.css';

const Section = ({ title, children }) => (
    <section className={css.section}>
            {title && <h2 className={css.header}>{title}</h2>}
            {children}
        </section>
);
    
export default Section