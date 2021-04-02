import { shallow } from 'enzyme';
import { Provider } from 'react-redux'
import { findByTestAttr } from './utils/testing';

// Components
import App from './App';

const ReduxProvider = ({ children, reduxStore }: any) => (
  <Provider store={reduxStore}>{children}</Provider>
)

describe('App', () => {

    let wrapper: any;

    beforeEach(() => {
        wrapper = shallow(<ReduxProvider><App /></ReduxProvider>);
    });

    it('title text is "Streamloots Cards"', () => {
        // Assert
        // const h1 = findByTestAttr(wrapper, 'app-h1')
        // expect(wrapper.find(<h1 />).text()).toBe('Streamloots Cards');
        
    });
});