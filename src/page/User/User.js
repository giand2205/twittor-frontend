import React, { useState, useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import BasicLayout from "../../layout/BasicLayout";
import BannerAvatar from "../../components/User/BannerAvatar";
import { withRouter } from "react-router-dom";
import { getUserApi } from "../../api/user";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import InfoUser from "../../components/User/InfoUser";

import "./User.scss";

function User(props) {
  const { match } = props;
  const [user, setUser] = useState(null);
  const { params } = match;
  const loggedUser = useAuth();

  useEffect(() => {
    getUserApi(params.id)
      .then((response) => {
        setUser(response);
        if (!response) {
          toast.error("El usuario visitado no existe");
        }
      })
      .catch(() => {
        toast.error("El usuario visitado no existe");
      });
  }, [params]);

  return (
    <BasicLayout className="user">
      <div className="user__title">
        <h2>
          {user ? `${user.name} ${user.lastName}` : "Este usuario no existe"}
        </h2>
      </div>
      <BannerAvatar user={user} loggedUser={loggedUser} />
      <InfoUser user={user} />
      <div className="user__tweets">Lista de Tweets</div>
    </BasicLayout>
  );
}

export default withRouter(User);
