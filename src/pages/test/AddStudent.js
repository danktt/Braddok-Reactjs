import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import { api } from "../services/api";
import { FormInput } from "../components/FormInput";

const defaultStudent = {
  name: "",
  course: "",
  email: "",
  phone: "",
};

export default function Snakke(props) {
  const [student, setStudent] = useState(defaultStudent);

  const handleInput = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const studentStore = (e) => {
    e.preventDefault();
    const studentSubmit = document.getElementById("studentSubmit");
    const studentSubmitText = studentSubmit.innerHTML;
    studentSubmit.innerHTML = "Saving...";
    studentSubmit.disabled = true;

    api
      .post("student/store", student)
      .then((res) => {
        if ((res.status = 201)) {
          Swal.fire({
            icon: "success",
            title: res.data.message,
            showConfirmButton: true,
            timer: 5000,
          });
        } else {
          throw new Error();
        }

        console.log(res.data);
        setStudent(defaultStudent);
        e.target.reset();
        studentSubmit.innerHTML = studentSubmitText;
        studentSubmit.disabled = false;
      })
      .catch((e) => {
        Swal.fire({
          icon: "error",
          title: "Falha ao salvar estudante",
          showConfirmButton: true,
          timer: 5000,
        });
      });
  };

  return (
    <>
    <section className="container">
      <div className="row">
        <div className="col-md-12">
          <main className="card">
            <article className="card-header">
              <h4>
                Add Students
                <Link to={"/"} className="btn btn-primary btn-sm float-end">
                  BACK
                </Link>
              </h4>
            </article>
            <article className="card-body">
              <form onSubmit={studentStore}>
                <FormInput
                  id="studentName"
                  name="name"
                  div_class="form-group mb-3"
                  input_class="form-control"
                  label="Student Name"
                  input_type="text"
                  value={student.name}
                  on_change={handleInput}
                />
                <FormInput
                  id="studentCourse"
                  name="course"
                  div_class="form-group mb-3"
                  input_class="form-control"
                  label="Student Course"
                  input_type="text"
                  value={student.course}
                  on_change={handleInput}
                />
                <FormInput
                  id="studentEmail"
                  name="email"
                  div_class="form-group mb-3"
                  input_class="form-control"
                  label="Student Email"
                  input_type="email"
                  value={student.email}
                  on_change={handleInput}
                />
                <FormInput
                  id="studentPhone"
                  name="phone"
                  div_class="form-group mb-3"
                  input_class="form-control"
                  label="Student Phone"
                  input_type="text"
                  value={student.phone}
                  on_change={handleInput}
                />
                <div className="form-group mb-3">
                  <button
                    id="studentSubmit"
                    type="submit"
                    className="btn btn-primary"
                  >
                    Save Student
                  </button>
                </div>
              </form>
            </article>
          </main>
        </div>
      </div>
    </section>
    </>
  );
}
