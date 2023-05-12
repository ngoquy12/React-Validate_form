import React, { useEffect, useRef, useState } from "react";
import "../App.css";

export default function TodoApp() {
  const focusInput = useRef(null);
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState("");
  const [checked, setChecked] = useState(false);

  console.log(checked);

  useEffect(() => {
    focusInput.current.focus();
  }, []);

  // Thêm mới công việc
  const handleAddJob = () => {
    if (!job) {
      alert("Tên công việc không được để trống!");
      focusInput.current.focus();
    } else {
      setJobs([...jobs, job]);
      setJob("");
      setTimeout(() => {
        alert("Thêm công việc thành công");
      }, 200);
      focusInput.current.focus();
    }
  };

  // Xóa công việc
  const handleDelete = (id) => {
    let newArray = [...jobs];
    let confirm = window.confirm("Are you sure you want to delete");
    if (confirm) {
      newArray.splice(id, 1);
      setJobs(newArray);
    }
  };
  // Sửa công việc
  const handleEdit = (index) => {
    // Lấy ra giá trị của phần tử cần sửa trong mảng
    let editText = window.prompt("Chỉnh sửa công việc: ", jobs[index]);
    jobs[index] = editText;
    setJobs([...jobs]);
  };

  // Xử lý sự kiện khi ô checkbox được check
  const handleChangeCheckbox = (id) => {};
  
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="card-body p-5">
                <h3 style={{ textAlign: "center", marginBottom: 40 }}>
                  MINI PROJECT TODO LIST
                </h3>
                <div className="d-flex justify-content-center align-items-center mb-4">
                  <div className="form-outline flex-fill">
                    <input
                      ref={focusInput}
                      type="text"
                      className="m-input"
                      placeholder="Nhập công việc..."
                      onChange={(e) => setJob(e.target.value)}
                      value={job}
                    />
                  </div>
                  <button className="btn btn-info ms-2" onClick={handleAddJob}>
                    Thêm
                  </button>
                </div>
                {/* Tabs navs */}
                <ul className="nav nav-tabs mb-4 pb-2">
                  <li className="nav-item">
                    <a className="nav-link active">Tất cả công việc</a>
                  </li>
                </ul>
                {/* Tabs navs */}
                {/* Tabs content */}
                <div className="tab-content">
                  <div className="tab-pane fade show active">
                    {jobs.length > 0 ? (
                      jobs.map((job, index) => (
                        <ul className="list-group mb-0" key={index}>
                          <li
                            className="list-group-item d-flex align-items-center border-0 mb-2 rounded justify-content-between"
                            style={{ backgroundColor: "#f4f6f7" }}
                          >
                            <div>
                              <input
                                checked={checked === index}
                                onChange={() => handleChangeCheckbox(index)}
                                className="form-check-input me-2"
                                type="checkbox"
                              />{" "}
                              {job}
                            </div>
                            <div>
                              <a
                                onClick={() => handleEdit(index)}
                                className="text-info pointer"
                                title="Sửa công việc"
                              >
                                <i className="fas fa-pencil-alt me-3" />
                              </a>
                              <a
                                onClick={() => handleDelete(index)}
                                className="text-danger pointer"
                                title="Xóa công việc"
                              >
                                <i className="fas fa-trash-alt" />
                              </a>
                            </div>
                          </li>
                        </ul>
                      ))
                    ) : (
                      <div>Chưa có công việc trong danh sách</div>
                    )}
                  </div>
                </div>
                {/* Tabs content */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
