import uuid from 'uuid'

const addAdvertistment = ({name='',contactNumber='',location='',title='',description='',images=[]}={})=>({
    type:'ADD_ADVERTISTMENT',
    add:{
        id:uuid(),
        name,
        contactNumber,
        location,
        description,
        images,
        title

    }
});

const editAdd=((id,updates)=>({
    type:'EDIT_ADVERTISTMENT',
    id,
    updates
}));

const deleteAdd=(({id}={})=>({
    type:'DELETE_ADD',
    id
}));

export {addAdvertistment,editAdd,deleteAdd}
