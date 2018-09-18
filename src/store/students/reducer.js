import { STUDENT_LIST_SUCCESS } from './actions';

const initialState = {
    studentList: {}
};

export default function students(state = initialState, action) {
    switch (action.type) {
        case STUDENT_LIST_SUCCESS: {
            return {
                ...state,
                studentList: action.data
            };
        }

        default:
            return state;
    }
}
