import {Firebaseone} from '../Firebaseconntion';

const initState = {
    datapush: {},
}

const reducer1 = (state = initState, action) => {
    switch (action.type) {
        case "PUSHDATA":
        Firebaseone.child(action.getitem.maphong).update({
            cmnd : action.getitem.cmnd,
            diachi : action.getitem.diachi,
            gioitinh : action.getitem.gioitinh,
            ngaydatphong : action.getitem.ngaydat,
            ngaysinh : action.getitem.ngaysinh,
            sdt : action.getitem.sdt,
            tenkhach : action.getitem.tenkhach,
            trangthai : action.getitem.trangthai,
        })
        return{...state,datapush:action.getitem}
        default:
            return state
    }
}

export default reducer1
