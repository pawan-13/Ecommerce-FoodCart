export const ADD = (item) => {
    return{
        type : "ADD_CART",
        payload : item,
    };
};


export const DLT = (item) => {
    return{
        type : "RMV_CART",
        payload : item,
    };
};

export const REMOVE = (iteam) => {
    return{
        type : "RMV_ONE",
        payload : iteam,
    };
};