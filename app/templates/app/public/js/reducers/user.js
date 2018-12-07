const user=(state=[],action)=>{
    switch (action.type) {
        case 'add':
            return [...state,action.object]
        case 'update':
            return state.map(item=>(item.id===action.id)?{...action.object}:item)
        default:
            return state
    }
}

export default user


export const addStudent = (object) => {
    return {type:'add',object}
}

export const update = (update) => {
    return {type:'update',...update}
}