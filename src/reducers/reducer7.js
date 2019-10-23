import {Firebaseone} from '../Firebaseconntion';

const initState = {
    datapush: {},
}

const reducer7 = (state = initState, action) => {
    switch (action.type) {
        case "TRANGTHAITHAYDOI":
        Firebaseone.child(action.getitem.key).update({
            trangthai : action.getitem.trangthai
        })
        return{...state,datapush:action.getitem}
        default:
            return state
    }
}

export default reducer7
