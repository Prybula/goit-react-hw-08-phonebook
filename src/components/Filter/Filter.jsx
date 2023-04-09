import { FilterStyled } from './Filter.styled';
import { filterContacts } from 'redux/contacts/FilterSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FilterStyled>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          onChange={e => {
            dispatch(filterContacts(e.target.value));
          }}
        />
      </label>
    </FilterStyled>
  );
};
