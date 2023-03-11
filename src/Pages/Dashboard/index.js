import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser, setIsAuth } from "../../features/kemps/kempsSlice";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(setIsAuth(false));
    dispatch(deleteUser());
    navigate("/");
  };
  return (
    <>
      <h3>Dashboard</h3>
      <button className="btn btn-danger" onClick={logout}>
        Logout
      </button>
      <div className="card p-3 my-2">
        <div className="row text-center">
          <div className="col-md-4">
            <button
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#waterproduction"
            >
              Water Production
            </button>
          </div>
          <div className="col-md-4">
            <button className="btn btn-secondary">Soda Production</button>
          </div>
          <div className="col-md-4">
            <button className="btn btn-danger">Direct Production</button>
          </div>
        </div>
      </div>
      {/* modal for water production */}

      <div
        class="modal fade"
        id="waterproduction"
        tabindex="-1"
        aria-labelledby="waterproductionLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="waterproductionLabel">
                Water Production
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
