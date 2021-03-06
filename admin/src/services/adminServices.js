import axiosServices from "./axiosServices.js";
const obj = new axiosServices();
export default class adminServices {

  login(data) {
    return obj.postMethod(data, "/user/adminLogin", false);
  }
  
  approve(data) {
    return obj.postMethod(data, "/questionAndAnswerNotes/approve/"+data.id, true);
  }
  
  reject(data) {
    return obj.postMethod(data, "/questionAndAnswerNotes/reject/"+data.id, true);
  }
  
  rapprove(data) {
    return obj.postMethod(data, "/productcarts/adminCompleteOrder", true);
  }
  
  rreject(data) {
    return obj.postMethod(data, "/productcarts/adminCancelOrder", true);
  }

  getAllUserData() {
    return obj.getMethod("/user/getAdminUserList", true);
  }

  getAllStatics() {
    return obj.getMethod("/user/UserStatics", true);
  }

  getUnApproved() {
    return obj.getMethod("/questionAndAnswerNotes/getUnApprovedAnswer", true);
  }

  getUnApprovedRequests() {
    return obj.getMethod("/productcarts/userCartList", true);
  }
}
