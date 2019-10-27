import {Firebaseone} from '../Firebaseconntion';

const initState = {
    message:'',
}

const datPhongReducer = (state = initState, action) => {
    switch (action.type) {
        case "CONFIRM_BOOK":{
            Firebaseone.child(action.data.uniqueKey).update({
                cmnd : action.data.cmnd,
                diachi : action.data.address,
                ngaynhanphong : action.data.ngaynhanphong,
                sdt : action.data.sdt,
                tenkhach : action.data.tenkhach,
                trangthai : 0,
            })
            return{...state,message :'Dat phong thanh cong'}
        }
        default:
            return state
    }
}

export default datPhongReducer
