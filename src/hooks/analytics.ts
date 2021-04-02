import { useEffect } from 'react';
import { sendEvent1 } from '../analytics/analytics1';
import { sendEvent2 } from '../analytics/analytics2';

export interface AnalitycsInterface {
    event: (event: string, payload?: Object) => void
}
const useAnalytics = (cardsNum?: number): AnalitycsInterface => {
    useEffect(() => {
        if (cardsNum) {
            sendEvent1('cards_number', {number: cardsNum});
            sendEvent2('cards_number', {number: cardsNum});
        }
    }, [cardsNum]);

    const event = (event: string, payload?: Object): void => {
        sendEvent1(event, payload);
        sendEvent2(event, payload);
    };

    return {
        event,
    }
}

export default useAnalytics;