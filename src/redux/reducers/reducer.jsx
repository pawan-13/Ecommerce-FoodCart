const INIT_STATE = {
    carts: []
};

export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":

            // eslint-disable-next-line no-case-declarations
            const IteamIndex = state.carts.findIndex((iteam) => iteam.id === action.payload.id);

            if (IteamIndex >= 0) {
                state.carts[IteamIndex].qnty = state.carts[IteamIndex].qnty + 1
                return {
                    ...state,
                    carts:[...state.carts]
                }
            }
            else {
                const temp = { ...action.payload, qnty: 1 }
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }

        case "RMV_CART":
            // eslint-disable-next-line no-case-declarations
            const data = state.carts.filter((el) => el.id !== action.payload);
            return {
                ...state,
                carts: data
            }


        case "RMV_ONE":
            // eslint-disable-next-line no-case-declarations
            const IteamIndex_dec = state.carts.findIndex((iteam) => iteam.id === action.payload.id);
            if (state.carts[IteamIndex_dec].qnty >= 1) {
                const dltitem = state.carts[IteamIndex_dec].qnty -= 1;
                console.log(dltitem);

                return{
                    ...state,
                    carts:[...state.carts]
                }
            }
            else if(state.carts[IteamIndex_dec].qnty === 1){
                const data = state.carts.filter((el)=> el.id !== action.payload);
                return{
                    ...state,
                    carts:data
                }
            }
            break;
        default:
            return state;
    }
};