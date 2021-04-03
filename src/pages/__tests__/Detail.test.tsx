import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import { findByTestAttr } from '../../utils/testing';
import store from '../../redux/store';

// Components
import Detail from '../Detail/Detail';

const ReduxProvider = ({ children }: any) => (
  <Provider store={store}>{children}</Provider>
);

// Mocks
const mockDetail = jest.fn();

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: (initState: any) => [initState, mockDetail]
}));

describe('Detail', () => {

    let wrapper: any;

    beforeEach(() => {
        wrapper = mount(<ReduxProvider><Detail /></ReduxProvider>);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('detail state updates when name input changes', () => {
        const inputName = findByTestAttr(wrapper, 'detail-input-name');

        const mockEvent = {target: {value: 'little pet', name: 'name'}};
        inputName.simulate('change', mockEvent);

        expect(mockDetail).toHaveBeenCalled();
    });
    test('detail state updates when imageUrl input changes', () => {
        const inputName = findByTestAttr(wrapper, 'detail-input-image');

        const mockEvent = {target: {value: 'any', name: 'imageUrl'}};
        inputName.simulate('change', mockEvent);

        expect(mockDetail).toHaveBeenCalled();
    });
});