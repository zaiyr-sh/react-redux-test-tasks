const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const SET_LAST_USER = 'SET-LAST-USER';
const SET_FIRST_USER = 'SET-FIRST-USER';
const SET_PAGE_SIZE = 'SET-PAGE-SIZE';
const SET_ALL_USERS = "SET-ALL-USERS";

let initialState = {
    users: [],
    allUsers: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    indexOfLastUser: 0,
    indexOfFirstUser: 0
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users 
            }
        case SET_ALL_USERS:
            return {
                ...state,
                allUsers: action.allUsers[Math.floor(Math.random()*action.allUsers.length)]
            }       
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }  
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case SET_FIRST_USER:
            return {
                ...state,
                indexOfFirstUser: action.indexOfFirstUser
            }
        case SET_LAST_USER:
            return {
                ...state,
                indexOfLastUser: action.indexOfLastUser
            }
        case SET_PAGE_SIZE:
            return {
                ...state,
                pageSize: action.pageSize
            }    
        default:
            return state;    
    }
}

export const setUsersActionCreator = (users) => ({type: SET_USERS, users})
export const setAllUsersActionCreator = (allUsers) => ({type: SET_ALL_USERS, allUsers})
export const setCurrentPageActionCreator = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCountActionCreator = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const setFirstUserActionCreator = (indexOfFirstUser) => ({type: SET_FIRST_USER, indexOfFirstUser});
export const setLastUserActionCreator = (indexOfLastUser) => ({type: SET_LAST_USER, indexOfLastUser});
export const setPageSizeActionCreator = (pageSize) => ({type: SET_PAGE_SIZE, pageSize});

export default usersReducer;