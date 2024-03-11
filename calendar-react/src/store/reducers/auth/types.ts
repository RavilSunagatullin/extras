export interface AuthState{
	isAuth:boolean
}
export enum AuthActionsEnum {
	SET_AUT = 'SET_AUTH'
}
export interface setAuthAction{
	type:AuthActionsEnum.SET_AUT ;
	payload:boolean;
}
export type AuthAction = setAuthAction