import {
    TOGGLE_ORDER_DATE_DROPDOWN
} from './types';

export function toggleOrderDateDropdown(payload) {
    return {
        type: TOGGLE_ORDER_DATE_DROPDOWN,
        payload: payload
    }
}
