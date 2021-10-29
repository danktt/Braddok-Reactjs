import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import { api } from "../services/api";

export default function Snakke(props) {
  useEffect(() => {
    api
      .get("student/gets")
      .then((res) => {
        console.log(res);
        if ((res.status = 200)) {
        } else if ((res.status = 204)) {
        }
      })
      .catch((e) => {
        Swal.fire({
          icon: "error",
          title: "Falha ao carregar estudantes",
          showConfirmButton: true,
          timer: 5000,
        });
      });
  }, []);

  return (
    <section className="container">
      <div className="row">
        <div className="col-md-12">
          <main className="card">
            <article className="card-header">
              <h4>
                Students Data
                <Link
                  to={"add-student"}
                  className="btn btn-primary btn-sm float-end"
                >
                  Add Student
                </Link>
              </h4>
            </article>
            <article className="card-body">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
              </table>
            </article>
          </main>
        </div>
      </div>
    </section>
  );
}
