import React from 'react';
import {
  FiltersContainer,
  ItemsLeft,
  FilterButtonContainer,
  FilterButton,
} from './TodoFilters.components';

const TodoFilters = ({
  total,
  activeFilter,
  showAllTodos,
  showActiveTodos,
  showCompletedTodos,
  handleClearComplete
}) => {
  return (
    <FiltersContainer>
      <ItemsLeft  total={total}/>
      <FilterButtonContainer>
        <FilterButton action={() => {}} active={activeFilter} filter="All" />
        <FilterButton action={() => {}} active={activeFilter} filter="Active" />
        <FilterButton action={() => {}} active={activeFilter} filter="Completed" />
      </FilterButtonContainer>

      <button  onClick={() => handleClearComplete} className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300">
        Clear Completed
      </button>
    </FiltersContainer>
  );
};

export { TodoFilters };
