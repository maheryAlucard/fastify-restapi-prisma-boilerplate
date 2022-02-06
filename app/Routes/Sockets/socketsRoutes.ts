import { soc_getAllUsers } from "../../Controllers/sockets/UserController";

/** Registering all action for sockets */
export const SOCKET_ACTIONS:any = {
    getUsers: soc_getAllUsers
}