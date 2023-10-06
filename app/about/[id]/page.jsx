import React from "react";

const DynamicPage = ({ params }) => {
  return <div>This is the about page with ID : {params.id}</div>;
};

export default DynamicPage;
