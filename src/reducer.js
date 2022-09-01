// This is how intially Data layer looks like 
export const initialState ={

    user : null,
};
// In this we can dispatch actions in the  Data layer 
export const actionTypes ={

    SET_USER : "SET_USER",

};


const reducer = (state, action) => {

            console.log(action);
            switch(action.type){

            case actionTypes.SET_USER:
            return{
                ...state,
                user: action.user
                };
               
               default:
               return state;     


                }
            };
export default reducer;