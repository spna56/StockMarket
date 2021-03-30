const initialstate={
    reducer_stock:[]
}

export default function(state=initialstate,action){
    switch(action.type){
        case 'FETCH_DATA':
            return {...state,reducer_stock:action.payload}
        default:
            return state;
    }
}