import React, { useState, useEffect } from "react";
import { getUserApi } from "../../api/user";
import { Media, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { API_HOST } from "../../utils/constant";
import AvatarNoFound from "../../assets/png/avatar-not-found.png";

export default function User(props) {
  const { user } = props;

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    getUserApi(user.id).then((response) => {
      setUserInfo(response);
    });
  }, [user]);

  return (
    <Media as={Link} to={`/${user.id}`} className="list-users__user">
      <Image
        width={64}
        height={64}
        roundedCircle
        className="mr-3"
        src={
          userInfo?.avatar
            ? `${API_HOST}/get-avatar?id=${user.id}`
            : AvatarNoFound
        }
        alt={`${user.name} ${user.lastName}`}
      />
      <Media.Body>
        <h5>
          {user.name} {user.lastName}
        </h5>
        <p>{userInfo?.biography}</p>
      </Media.Body>
    </Media>
  );
}
