import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function WizardDetail() {
  const params = useParams();

  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/wizards/${params.id}`)
      .then((response) => response.json())
      .then((json) => {
        setDetails(json);
      });
  }, []);

  return (
    <div>
      <Link to="/">Come back</Link>
      <hr />
      <h1>Details for wizard {params.id}</h1>

      <h3>The courses</h3>
      <ul>
        {details.map((detail) => {
          return (
            <li>
              {" "}
              {detail.name} - {detail.professor}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
