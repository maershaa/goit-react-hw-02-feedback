import React from "react";

// Компонент для отображения сообщения об отсутствии отзывов
const Section = ({ title, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default Section;

