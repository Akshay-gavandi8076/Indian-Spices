import React from 'react';
import { configure,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';


configure({ adapter: new Adapter() });

test("should render customer help-line details", () => {
    const wrapper = shallow(<Header />);
    // console.log(wrapper.debug());
    const label = wrapper.find('label');
    const result = label.text();


    expect(result).toBe('+4915124429654 indian-spices@gmail.com');
} );