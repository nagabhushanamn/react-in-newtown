

/*


{
    "111":[
        {},{}
    ],
     "222":[
        {},{},{}
    ]
}

*/


export function reviewsReducer(state = {}, action) {
    console.log("reviews reducer-");
    let { type } = action;
    switch (type) {
        case 'LOAD_REVIEWS': {
            let { productId, reviews } = action;
            let prevReviews = state[productId] || []
            reviews = [...prevReviews, ...reviews]
            return { ...state, [productId]: reviews }
        }
        default: {
            return state;
        }
    }
}