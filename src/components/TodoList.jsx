import React, { useState } from "react";

export default function TodoList() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState([]);
  const [text, setText] = useState("");
  const [indexJob, setIndexJob] = useState(-1);

  // Hàm thêm mới công việc
  const handleAdd = () => {
    setJob("");
    setJobs([...jobs, job]);
  };
  // Xóa công việc
  const handleDelete = (index) => {
    let newArray = [...jobs];
    let isConfirm = window.confirm(
      `Bạn chắc chắc muốn xóa công việc có id ${index} `
    );
    if (isConfirm) {
      newArray.splice(index, 1);
      setJobs(newArray);
      console.log(jobs);
    }
  };
  // Nhập nội dung sửa công việc
  const handleChangeText = (e) => {
    setText(e.target.value);
  };
  // Xử lý lưu công việc sau khi đã cập nhật
  const handleUpdateJob = (index) => {
    setIndexJob(index);
    setText(jobs[index]);
  };
  // xử lý lưu công việc sau khi cập nhật
  const handleSave = (index) => {
    jobs[index] = text;
    setIndexJob(-1);
    setTimeout(() => {
      alert("Cập nhật công việc thành công");
    }, 500);
  };

  return (
    <div>
      <h3>TODO LIST</h3>
      <input
        placeholder="Enter your job..."
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />
      <button onClick={handleAdd}>Add todo</button>
      {jobs.map((job, index) => (
        <ul key={index}>
          {indexJob !== index ? (
            <>
              <span>{job}</span>
              <button onClick={() => handleUpdateJob(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </>
          ) : (
            <>
              <input value={text} onChange={handleChangeText} type="text" />
              <button onClick={() => handleSave(index)}>Save</button>
              <button onClick={() => setIndexJob(-1)}>Cancel</button>
            </>
          )}
        </ul>
      ))}
    </div>
  );
}
