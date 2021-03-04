import DISHES from "../data/dishes"
import COMMENTS from "../data/comments"
const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    sample: "Nazrul islam sajeeb"
};

export const Reducer = (state = initialState, action) => {
    if (action.type = "TEST") {
        return {
            ...state,
            sample: action.str
        }
    }
    return state;
}