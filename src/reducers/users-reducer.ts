import {AppThunk} from "../store/store";
import {usersAPI} from "../api/users-api";
import {FormType} from "../../src/components/Form";

export type UserType = {
    id: string
    name: string
    email: string
    phone: string
    position: string
    position_id: string
    registration_timestamp: number
    photo: string
}


let initialState: InitialStateType = {
    "preloader": false,
    "success": false,
    "page": 1,
    "total_pages": 10,
    "total_users": 47,
    "count": 6,
    "links": {
        "next_url": "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6",
        "prev_url": null
    },
    users: [
        {
            "id": "30",
            "name": "Angel",
            "email": "angel.williams@example.com",
            "phone": "+380496540023",
            "position": "Designer",
            "position_id": "4",
            "registration_timestamp": 1537777441,
            "photo": ''
        }
    ]
}

export type InitialStateType = {
    preloader: boolean
    success: boolean
    page: number
    total_pages: number
    total_users: number
    count: number
    links: {
        next_url: string
        prev_url: null
    },
    users: UserType[]
}

export const setUsers = (users: Array<UserType>) => (
    {type: "SET-USERS", users} as const
)

export const setTotalUsersCount = (totalUsers: number) => (
    {type: "SET-TOTAL-USERS-COUNT", totalUsers} as const
)

export const addUsers = (user: UserType[]) => (
    {type: "ADD-USERS", user} as const
)

export const setNextUrl = (nextUrl: string) => (
    {type: "SET-NEXT-URL", nextUrl} as const
)

export const setSuccess = (success: boolean) => (
    {type: "SET-SUCCESS", success} as const
)

export const setPreloader= (preloader: boolean) => (
    {type: "SET-PRELOADER", preloader} as const
)

export type UsersActionsTypes = ReturnType<typeof setUsers>
    | ReturnType<typeof addUsers>
    | ReturnType<typeof setNextUrl>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setSuccess>
    | ReturnType<typeof setPreloader>

const usersReducer = (state: InitialStateType = initialState, action: UsersActionsTypes): InitialStateType => {
    switch (action.type) {
        case "SET-USERS":
            return {
                ...state,
                users: action.users
            }
        case "SET-TOTAL-USERS-COUNT":
            return {
                ...state,
                total_users: action.totalUsers
            }
        case "SET-SUCCESS":
            return {
                ...state,
                success: action.success
            }
        case "SET-PRELOADER":
            return {
                ...state,
                preloader: action.preloader
            }
        // case "ADD-USERS":
        //     return {
        //         ...state,
        //         users: [action.user, ...state.users]
        //     }
        default:
            return state
    }
}

export default usersReducer

export const getUsersTC = (nextUrl: string): AppThunk => async dispatch => {
    try {
        const res = await usersAPI.getUsers(nextUrl)
        dispatch(setUsers(res.data.users))
        dispatch(setTotalUsersCount(res.data.total_users))
    } catch (e) {
        console.log(e)
        throw new Error()
    }
}

export const addUsersTC = (data:FormType): AppThunk => async dispatch => {
    dispatch(setPreloader(true))
    try {
        const res = await usersAPI.addUser(data);
        const baseUrl = "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6"
        dispatch(getUsersTC(baseUrl))
        dispatch(setSuccess(true))
    } catch (e) {
        console.log(e)
        throw new Error()
    }
    finally {
        dispatch(setPreloader(false))
    }
}
