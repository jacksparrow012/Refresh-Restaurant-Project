import COMMENTS from '../data/comments'
import DISHES from "../data/dishes"
import * as actionTypes from "./actionTypes"
import { combineReducers } from "redux"
const dishReducer = (dishState = DISHES, action) => {
    switch (action.type) {
        default: return dishState
    }

}
const commentReducer = (commentState = COMMENTS, action) => {
    switch (action.type) {
        case actionTypes.ADD_COMMENT:
            let comment = action.payload;
            comment.id = commentState.length;
            comment.date = new Date().toDateString()
            return commentState.concat(comment)
        default:
            return commentState
    }

}

export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer
})