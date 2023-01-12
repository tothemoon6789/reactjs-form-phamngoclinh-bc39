import { ADD_NEW_STUDENT, UPDATE, MODIFY, SEARCH_STUDENT, DELETE_STUDENT, ADD_OR_UPDATE, MES_ALERT } from './constant'
const initialStudent = {
    studentArr: [
        { id: 1, name: "Pham ngoc linh", phone: "0902485744", email: "pnlinh6789@gmail.com" },
        { id: 2, name: "Tran manh quan", phone: "0925145123", email: "render@hotmail.com" },
        { id: 3, name: "Nguyen Hong dao", phone: "0918744152", email: "thieuquang305@gmail.com" },
    ],
    studentDefault:
    {
        id: "",
        name: "",
        phone: "",
        email: "",
    },
    keyWord: "",
    studentArrIndex: 0,
    add: true,

    alert: {
        mesAlert: "SOMETHINGE",
        display: false,
    }

}
const studentReducer = (state = initialStudent, action) => {

    switch (action.type) {
        case MODIFY:
            {

                let findIndex = state.studentArr.findIndex((student) => {
                    return student.id === action.payload
                })
                return {
                    ...state,
                    studentDefault: state.studentArr[findIndex],
                    studentArrIndex: findIndex,
                }
            }
        case ADD_NEW_STUDENT:
            {

                console.log(action);
                return {
                    ...state,
                    studentArr: [...state.studentArr, action.payload]
                }
            }
        case UPDATE:
            {
                console.log(action);
                // let updateIndex = state.studentArr.findIndex((student) => {
                //     return student.id === action.payload.id
                // })
                return {
                    ...state,
                    studentArr: state.studentArr.map((student, index) => {
                        return index === state.studentArrIndex ? {
                            ...student,
                            id: action.payload.id,
                            name: action.payload.name,
                            phone: action.payload.phone,
                            email: action.payload.email,
                        } : student
                    }),
                    studentDefault: {
                        ...state.studentDefault,
                        id: "",
                        name: "",
                        phone: "",
                        email: "",
                    }

                }
            }
        case SEARCH_STUDENT:
            return {
                ...state,
                keyWord: action.payload,
            }
        case DELETE_STUDENT:
            console.log("ben trong DELETE_STUDENT");
            console.log(action.payload);
            return {
                ...state,
                studentArr: state.studentArr.filter((student) => {
                    return student.id !== action.payload
                })
            }
        case ADD_OR_UPDATE:
            console.log("ADD_OR_UPDATE" + action.payload);
            return {
                ...state,
                add: action.payload
            }
        case MES_ALERT:
            return {
                ...state,
                alert: action.payload
            }
        default:
            return { ...state }
    }
}
export default studentReducer