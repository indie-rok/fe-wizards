import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AllWizards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/wizards")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setData(json);
      });
  }, []);

  return (
    <div>
      {data.map((wizard) => {
        return (
          <li key={wizard.id}>
            <Link to={`/wizardDetails/${wizard.id}`}>
              {wizard.wizard_name} - {wizard.wand_name}
            </Link>
          </li>
        );
      })}
    </div>
  );
}
