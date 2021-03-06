import React from "react";
import Button from "material-ui/Button";

const LogoutButton = ({ onLogoutUserClick }) => {
  return (
    <Button
      color="secondary"
      style={{ fontFamily: "Arial" }}
      onClick={event => onLogoutUserClick(event)}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
