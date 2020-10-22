import { shallow } from 'enzyme';
import React from 'react';
import PokemonFilter from '../../components/PokemonFilter/PokemonFilter';

describe('Fylter Type', () => {
  let wrapper;
  const mockOnChangeFn = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<PokemonFilter category="normal" onChange={mockOnChangeFn} />);
  });

  it('onChange calls onChange handler ', () => {
    wrapper.find('select').simulate('change');
    expect(mockOnChangeFn.mock.calls.length).toBe(1);
  });

  it('renders 18 filter types', () => {
    expect(wrapper.find('option')).toHaveLength(18);
  });

  it('Select category as default', () => {
    expect(wrapper.find('option').at(0).text()).toBe('Select Category');
  });
});
