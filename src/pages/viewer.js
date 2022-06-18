import * as React from "react";
import useAsyncEffect from "@n1ru4l/use-async-effect";
import { Stage, Component } from "react-ngl";
import { useMemo, useState, useCallback } from "react";
import Layout from "../components/layout";

const Viewer = () => {
  const reprLists = useMemo(
    () => ({
      backgroundColor: [
        {
          type: "backgroundColor",
          param: {
            color: "white",
          },
        },
      ],
      "ball+stick": [
        {
          type: "ball+stick",
        },
      ],
      cartoon: [
        {
          type: "cartoon",
        },
      ],
      "ribbon and line": [
        {
          type: "ribbon",
          param: {
            color: "atomindex",
          },
        },
        {
          type: "line",
          param: {
            color: "element",
          },
        },
      ],
      spacefill: [
        {
          type: "spacefill",
          param: {
            color: "element",
          },
        },
      ],
      surface: [
        {
          type: "surface",
          param: {
            color: "element",
          },
        },
      ],
    }),
    []
  );
  const [reprName, setReprName] = useState("cartoon");
  const handleReprChange = useCallback(
    (event) => setReprName(event.target.value),
    []
  );
  return (
    <>
      <Layout pageTitle="Viewer" pageHeading="You can view pdb ids here.">
        <p>Using NGL viewer</p>
      </Layout>
      <br />
      <h3>Load your Receptor</h3>
      <br />
      <input
        type="file"
        id="receptor"
        accept=".pdb,.cif,.ent,.gz,.mol2,.sdf,.pdbqt,.mol"
      ></input>
      <Stage width="600px" height="400px">
        <Component path="rcsb://3qme" reprList={reprLists[reprName]} />
      </Stage>

      <select
        name="representation"
        value={reprName}
        onChange={handleReprChange}
      >
        {Object.keys(reprLists).map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Viewer;
