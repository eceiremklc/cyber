import PrivateRoute from "@/app/shared/privateRoute/PrivateRoute";
import React from "react";

const page = () => {
  return (
    <PrivateRoute>
      <h1>Profil Sayfası</h1>
      <p>Buraya sadece login ve verified user erişebilir.</p>
    </PrivateRoute>
  );
};

export default page;
