import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import {storeFactory, findByTestAttr} from '../../utils/testing';
import { filterCards } from '../../redux/actions';

// Components
import List from '../List/List';
import Card from '../../components/Card/Card';

const ReduxProvider = ({ children, initialState={} }: any) => {
    const store = storeFactory(initialState);
    return <Provider store={store}>{children}</Provider>;
};

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => mockDispatch,
}));

describe('List', () => {

    let wrapper: any;

    beforeEach(() => {
        wrapper = mount(<ReduxProvider><List /></ReduxProvider>);
    });

    test('shows 0 cards when init component', () => {
        // Assert
        expect(wrapper.find(Card).length).toEqual(0);
        
    });

    test('dispatch filter action when input changes', () => {
        const inputFilter = findByTestAttr(wrapper, 'list-input');

        const mockEvent = {target: {value: 'little pet', name: 'name'}};
        inputFilter.simulate('change', mockEvent);

        expect(mockDispatch).toHaveBeenCalledWith(filterCards('little pet'));
    });
});