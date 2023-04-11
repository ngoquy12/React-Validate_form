import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      email: '',
      passWord: ''
    }
  }
  // Khai báo mảng để lưu trữ nhân viên
   listEmployee = [];
   
  // Hàm lắng lắngnghe sự kiện hay đổi các giá trị từ ô input
  handleChange = (e)=>{
         let name = e.target.name
         let value = e.target.value
         this.setState({
            [name] : value,
         })
  }
  // Check định dạng employeeCode
  checkEmployeeCode = (employeeCode)=>{
    const string = /^NV/ // kí từ bắt đầu bằng NV
    if(!string.test(employeeCode)){
      return false;
    }else{
      return true;
    }
  }
  // Validate email
  validateEmail = (email)=>{
    const string = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(string.test(email)){
      return true;
    }else{
      return false;
    }

  }
  // Hàm xử lý sự kiện submit
  handleSubmit = (e) => {
    e.preventDefault();
    // Kiểm tra mã có để trống
    if(!this.state.code){
      alert('Mã nhân viên không được để trống')
    }else if(!this.checkEmployeeCode(this.state.code)){
      alert('Mã nhân viên không đúng định dạng');
    }else if(this.state.code.length < 8){
      alert('Mã nhân viên không được ngắn hơn 8 ký tự')
    }else if(this.state.code.length > 16){
      alert('Mã nhân viên không được dài hơn 16 ký tự')
    }else if(!this.state.email){
      alert("Email không được để trống")
    }else if(!this.validateEmail(this.state.email)){
      alert('Email không đúng định dạng. Nhập lại đi bé ơi!!!')
    }else if(!this.state.passWord){
      alert('Mật khẩu không được để trông')
    }else if(this.state.passWord.length < 8){
      alert('Mật khẩu không được ngắn hơn 8 ký tự');
    }else{
      // Khai báo một đối tượng rỗng để lưu trữ các giá trị nhập từ form
      let saveEmployee  ={
        code: this.state.code,
        email: this.state.email,
        passWord: this.state.passWord
       }
      this.listEmployee.push(saveEmployee)
      console.log(this.listEmployee);
      alert('Đăng ký thành công')
    }

  }
  render() {
    return (
      <div className="container">
  <form className="form" onSubmit = {this.handleSubmit}>
    <h3>ĐĂNG KÝ</h3>
    
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Code </label>
      <input
        type="text"
        name = "code"
        className="form-control"
        onChange={this.handleChange}
        placeholder="Enter Code"
      />
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Email </label>
      <input
        type="text"
        className="form-control"
        name = "email"
        onChange={this.handleChange}
        placeholder="Enter email"
      />
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input
        type="password"
        name = "passWord"
        className="form-control"
        onChange={this.handleChange}
        placeholder="Password"
      />
    </div>
    <div className="form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
      <label className="form-check-label" htmlFor="exampleCheck1">
        Check me out
      </label>
    </div>
    <button type="submit" className="btn btn-primary">
      Submit
    </button>
  </form>
</div>

    )
  }
}
