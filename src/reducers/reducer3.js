import {Firebaseone} from '../Firebaseconntion';

const initState = {
    datapush: {},
}

const reducer3 = (state = initState, action) => {
    switch (action.type) {
        case "THAYDOI":
        Firebaseone.child(action.getitem.key).update({
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

export default reducer3
