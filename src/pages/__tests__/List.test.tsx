import { shallow } from 'enzyme';
import { Provider } from 'react-redux'

// Components
import List from '../List/List';
import Card from '../../components/Card/Card';

const ReduxProvider = ({ children, reduxStore }: any) => (
  <Provider store={reduxStore}>{children}</Provider>
)

describe('List', () => {

    let wrapper: any;

    beforeEach(() => {
        wrapper = shallow(<ReduxProvider><List /></ReduxProvider>);
    });

    it('shows 0 cards when init component', () => {
        // Assert
        expect(wrapper.find(Card).length).toEqual(0);
        
    });
});