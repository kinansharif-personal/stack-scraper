import React, { ReactNode, useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
//import "./style.css";

export type ProfileCardProps = {
  children?: ReactNode;
  user: { name: string; country: string; image: string }; // DRY it up
};

export const ProfileCard = ({ user }: ProfileCardProps) => {
  return (
    <div className="container mt-3">
      <h2 className="text-center">Profile</h2>

      <div className="row d-flex justify-content-center align-items-center">
        <Card
          style={{ width: "22rem", border: "none" }}
          className="mx-2 mt-4 card_style"
        >
          <Card.Img
            variant="top"
            src={user.image}
            style={{ height: "16rem" }}
            className="mt-3"
          />
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>{user.country}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
