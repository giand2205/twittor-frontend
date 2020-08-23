import React, { useState } from "react";
import { Button } from "react-bootstrap";
import AvatarNotFound from "../../../assets/png/avatar-not-found.png";
import { API_HOST } from "../../../utils/constant";
import ConfigModal from "../../Modal/ConfigModal";
import EditUserForm from "../../User/EditUserForm";

import "./BannerAvatar.scss";

export default function BannerAvatar(props) {
  const { user, loggedUser } = props;
  const [showModal, setShowModal] = useState(false);
  const bannerUrl = user?.banner
    ? `${API_HOST}/get-banner?id=${user.id} `
    : null;

  const avatarUrl = user?.avatar
    ? `${API_HOST}/get-avatar?id=${user.id} `
    : AvatarNotFound;

  return (
    <div
      className="banner-avatar"
      style={{ backgroundImage: `url('${bannerUrl}')` }}
    >
      <div
        className="avatar"
        style={{ backgroundImage: `url('${avatarUrl}')` }}
      ></div>
      {user && (
        <div className="options">
          {loggedUser.id === user.id && (
            <Button onClick={() => setShowModal(true)}>Editar perfil</Button>
          )}
          {loggedUser.id !== user.id && <Button>Seguir</Button>}
        </div>
      )}
      <ConfigModal
        show={showModal}
        setShow={setShowModal}
        title="Editar perfil"
      >
        <EditUserForm user={user} setShowModal={setShowModal} />
      </ConfigModal>
    </div>
  );
}
