import moxios from 'moxios';
import { mount } from 'enzyme';
import App from '../App';
import { Provider } from 'react-redux';
import store from '../redux/store';

const response: any = [
    {
        count: {total: 0},
        imageUrl: 'https://static.streamloots.com/e19c7bf6-ca3e-49a8-807e-b2e9a1a47524/703ea030-8527-4a17-bd6f-23763eabfec9.png',
        name: 'Duo',
        _id: '5ce27b5b89230f002e13f606',
    }
];
describe('get cards from server', () => {
    beforeEach(() => {
        moxios.install();
        moxios.stubRequest('https://my-json-server.typicode.com/kaliayev-proton/mockend-streamloots/cards', {
            status: 200,
            response: response,
        });
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('cards are returned', () => {
        const wrapped = mount(
            <Provider store={store}>
                <App />
            </Provider>
        );
        moxios.wait(() => {
            wrapped.update();
            expect(wrapped.find('Card').length).toEqual(1);
        });
    });
})