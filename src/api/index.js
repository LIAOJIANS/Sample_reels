import ajax from './ajax'
const BASE_URL = '/api'


export const reqWorkList = () => ajax(BASE_URL + '/workList')

export const reqAdminPwd = ({ adminPwd }) => ajax(BASE_URL + '/pwd',{ adminPwd }, 'POST')

export const reqAdminInfo = () => ajax(BASE_URL + '/adminInfo')

export const reqWorkDel = ({ id }) => ajax(BASE_URL + '/delWork', { id }, 'POST')
