import {combineReducers} from 'redux'
import alert from './alert'
import auth from './auth'
import profile from './profile'
import students from './students'
import applications from './applications'
import data from './data'
import permissions from './Permissions'
import assessmentData from './StudentAssessment'
import mobileCode from './mobileCode'
import PaymentData from './paymentMethodReduser'
import transactionData from "./tansactionReduser"
import couponData from "./CouponReduser"
import reportsData_PER from "./reportsReduser";
import reportsData_ATTA from "./reportattandance";

export default combineReducers({
    data,
    alert,
    auth,
    students,
    profile,
    applications,
    permissions,
    assessmentData,
    mobileCode,
    PaymentData,
    transactionData,
    couponData,
    reportsData_PER,
    reportsData_ATTA
})