import { shallow } from 'enzyme';
import { Provider } from 'react-redux'
import { findByTestAttr } from '../../utils/testing';
import store from '../../redux/store';

// Components
import Detail from '../Detail/Detail';

const ReduxProvider = ({ children }: any) => (
  <Provider store={store}>{children}</Provider>
)

describe('Detail', () => {

    let wrapper: any;

    beforeEach(() => {
        wrapper = shallow(<ReduxProvider><Detail /></ReduxProvider>);
    });

    it('shows 2 input elements', () => {
        // Assert
        // const inputs = findByTestAttr(wrapper, 'detail-input')
        // expect(wrapper.find('[data-test="detail-input"]').dive().length).toEqual(2);
        
    });
});