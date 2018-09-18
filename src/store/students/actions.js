import StudentService from "./service";

export const STUDENT_LIST_SUCCESS = 'STUDENT_LIST_SUCCESS';

export const studentListSuccess = (data) => {
    return {
        type: STUDENT_LIST_SUCCESS,
        data
    };
}

export const getStudentList = () => { 
    const students = {
        6: {
        "id": 6,
        "name": "Test 1",
        "photo_url": '',
        "email": 'test@test.am',
        "phone": '54-545-75',
        "klass": '8а',
        "invite_date": '20-08-2018',
        "identifiers_presence": true,
        "birth_date": '',
        "parents": [
            {
            id: 27741,
            role: 'mother'
            }
        ],
        "movement_from_klass": '',
        "movement_from_school": '',
        "movement_from_year": '',
        "movement_to_school": ''
        },
        4545: {
            "id": 4545,
            "name": "Test 2",
            "photo_url": '',
            "email": 'sewess@d.am',
            "phone": '74-85-85',
            "klass": '8а',
            "invite_date": '04-11-2016',
            "identifiers_presence": true,
            "birth_date": '',
            "parents": [
                {
                id: 8585,
                role: 'father'
                }
            ],
            "movement_from_klass": '',
            "movement_from_school": '',
            "movement_from_year": '',
            "movement_to_school": ''
        }
    };
    return dispatch => dispatch(studentListSuccess(students));
};

export const getStudentList2 = (params) => { 
    return dispatch => StudentService.getStudentList(params).then(data => {
        dispatch(studentListSuccess(data.students));
    });
};