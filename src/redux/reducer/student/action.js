import {ADD_NEW_STUDENT,UPDATE,MODIFY,SEARCH_STUDENT,DELETE_STUDENT,ADD_OR_UPDATE,MES_ALERT} from './constant'
export const addNewStudent = (student)=>{
    return {
        type: ADD_NEW_STUDENT,
        payload: student,
    }
}
export const updateStudent = (student) => {
    return {
        type:UPDATE,
        payload:student,
    }
}
export const modifyStudent = (id) => {
    return {
        type:MODIFY,
        payload: id
    }
}
export const searchStudent = (key) => {
    return {
        type:SEARCH_STUDENT,
        payload: key,
    }
}
export const deleteStudent = (id) => {
    return {
        type: DELETE_STUDENT,
        payload:id
    }
}
export const addOrUpdate = (boolean) => {
    return {
        type: ADD_OR_UPDATE,
        payload:boolean
    }
}
export const mesAlert = (alert) => {
    return {
        type: MES_ALERT,
        payload:alert
    }
}
