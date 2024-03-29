import React, { useState } from "react";

const Problem1 = () => {
  const [all, setAll] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [show, setShow] = useState("all");
  const handleClick = (val) => {
    setShow(val);
    if (val === "all") {
      let active = all.filter((item) => item.status === "active");
      let completed = all.filter((item) => item.status === "completed");
      let other = all.filter(
        (item) => item.status !== "active" && item.status !== "completed"
      );

      setFiltered([...active, ...completed, ...other]);
    } else if (val === "active") {
      let active = all.filter((item) => item.status === "active");

      setFiltered([...active]);
    } else {
      let completed = all.filter((item) => item.status === "completed");

      setFiltered([...completed]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const status = form.status.value;
    console.log({ name, status });
    setAll([...all, { name, status }]);
    form.reset();
  };
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={handleSubmit}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Status"
                name="status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {show === "all" && filtered.length < all.length
                ? all?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.status}</td>
                      </tr>
                    );
                  })
                : filtered?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.status}</td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
