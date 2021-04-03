import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import { findByTestAttr } from './utils/testing';
import store from './redux/store';
import { fetchCards } from './redux/actions';

// Components
import App from './App';

const ReduxProvider = ({ children }: any) => (
  <Provider store={store}>{children}</Provider>
)

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => mockDispatch
}));

describe('App', () => {

    let wrapper: any;

    beforeEach(() => {
        wrapper = mount(<ReduxProvider><App /></ReduxProvider>);
    });

    test('renders without error', () => {
        // Assert
        const app = findByTestAttr(wrapper, 'app-component')
        expect(app).toHaveLength(1);
    });

    test('dispatch fetchCards action when component mounts', () => {
        expect(mockDispatch).toHaveBeenCalledTimes(1);
        expect(mockDispatch).toHaveBeenCalledWith(fetchCards())
    });
    test('NOT to dispatch fetchCards action after component mounts', () => {
        mockDispatch.mockClear();
        wrapper.setProps();
        expect(mockDispatch).toHaveBeenCalledTimes(0);
    });
});