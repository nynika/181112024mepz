import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import PatientForm from "./PatientForm";
import NewPatientForm from "./NewPatientForm";
import Login from "./Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/newpatientform" element={<NewPatientForm />} />
        <Route path="/patientform/:mepz_Code" element={<PatientForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
