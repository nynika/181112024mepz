import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./App.css"; 

const PrintPreview = ({ formData }) => {
  return (
    <Container className="print-preview">
      <h3>Medical Examination</h3>
      <Row>
        <Col>
          <p>
            <strong>Company Name:</strong> {formData.company_Name}
          </p>
        </Col>
        <Col>
          <p>
            <strong>Name:</strong> {formData.name}
          </p>
        </Col>
        </Row>

        <Row>
        <Col>
          <p>
            <strong>Mobile Number:</strong> {formData.mobile}
          </p>
        </Col>
        <Col>
          <p>
            <strong>Date of Birth:</strong> {formData.dob}
          </p>
        </Col>
        </Row>

        <Row>
        <Col>
          <p>
            <strong>Age:</strong> {formData.age}
          </p>
        </Col>
       
        <Col>
          <p>
            <strong>Gender:</strong> {formData.gender}
          </p>
        </Col>
  
        <Col>
          <p>
            <strong>Marital Status:</strong> {formData.marital_Status}
          </p>
        </Col>
      </Row>
      <hr />
      <h3>Family History</h3>
      <Row>
        <Col>
          <p>
            <strong>Diabetes:</strong> {formData.family_Diabetics}
          </p>
        </Col>
        <Col>
          <p>
            <strong>Hypertension:</strong> {formData.family_Hypertension}
          </p>
        </Col>
        <Col>
          <p>
            <strong>Heart Disease:</strong> {formData.family_Heart_Disease}
          </p>
        </Col>
    
        <Col>
          <p>
            <strong>Arthritis:</strong> {formData.family_Arthritis}
          </p>
        </Col>
        <Col>
          <p>
            <strong>Tuberculosis:</strong> {formData.family_Tuberculosis}
          </p>
        </Col>
        </Row>
        <Row>
        <Col>
          <p>
            <strong>Asthma:</strong> {formData.family_Asthma}
          </p>
        </Col>

        <Col>
          <p>
            <strong>Cancer:</strong> {formData.family_Cancer}
          </p>
        </Col>


        <Col>
          <p>
            <strong>Epilepsy:</strong> {formData.family_Epilepsy}
          </p>
        </Col>

        <Col>
          <p>
            <strong>Mentaor Nervous Disorder:</strong> {formData.family_Mentaor_Nervous_Disorder}
          </p>
        </Col>

        <Col>
          <p>
            <strong>Any Other Disease:</strong> {formData.family_Any_Other_Disease}
          </p>
        </Col>
      </Row>

      <hr />
      <h3>Personal History</h3>
      <p>
        <strong>Are you in good health and capable of full work:</strong>{" "}
        {formData.personal_Good_health_and_capable_of_full_work}
      </p>
      <p>
        <strong>
          Have you ever suffered from an occupational disease or injury:
        </strong> {" "}
        {formData.personal_Disease_or_Injury}
      </p>
      <p>
        <strong>
          Have you ever been discharged or rejected on medical grounds:
        </strong> {" "}
        {formData.personal_Rejected_on_Medical_Grounds}
      </p>

      <hr />
      <h3>Vaccination</h3>

      <p>
        <strong>Have you taken any vaccination:</strong>{" "}
        {formData.vaccination === "Yes"? "Yes": formData.vaccination === "No"? "No": "Not specified"}
      </p>

      {formData.vaccination === "Yes" && (
        <p>
          <strong>Status:</strong>{" "}
          {formData.vaccination_status === "completely"? "Completely": formData.vaccination_status === "partially"? "Partially": "Not specified"}
        </p>
      )}

      <hr/>

      <h3>History of Specific Diseases</h3>
      <Row>
        <Col>
          <p>
            <strong>Heart Disease:</strong> {formData.personal_Heart_Disease}
          </p>
        </Col>
        <Col>
          <p>
            <strong>Hypertension:</strong> {formData.personal_Hypertension}
          </p>
        </Col>
        <Col>
          <p>
            <strong> Diabetes:</strong> {formData.personal_Diabetes}
          </p>
        </Col>
    
        <Col>
          <p>
            <strong>KidneyDisease:</strong> {formData.personal_KidneyDisease}
          </p>
        </Col>
        <Col>
          <p>
            <strong>Asthma:</strong> {formData.personal_Asthma}
          </p>
        </Col>
        </Row>
        <Row>
        <Col>
          <p>
            <strong>Tuberculosis:</strong> {formData.family_Asthma}
          </p>
        </Col>

        <Col>
          <p>
            <strong>Dermatitis:</strong> {formData.family_Cancer}
          </p>
        </Col>
       
        <Col>
          <p>
            <strong>Epilepsy:</strong> {formData.family_Epilepsy}
          </p>
        </Col>
        <Col>
          <p>
            <strong>Allergy:</strong> {formData.family_Mentaor_Nervous_Disorder}
          </p>
        </Col>
        <Col>
          <p>
            <strong>Major Operation:</strong> {formData.family_Any_Other_Disease}
          </p>
        </Col>
        </Row>
        <Row>
        <Col>
          <p>
            <strong>HepatitisB:</strong> {formData.family_Any_Other_Disease}
          </p>
        </Col>
        <Col>
          <p>
            <strong>Lung Disease:</strong> {formData.family_Any_Other_Disease}
          </p>
        </Col>
        <Col>
          <p>
            <strong>Ear Problem:</strong> {formData.family_Any_Other_Disease}
          </p>
        </Col>
      <Col>
      <p>
        <strong>Details of other illnesses:</strong> {formData.others_Details}
      </p>
      </Col>
      </Row>
      <hr />
      <h3>Result of Physical Examination</h3>
      <Row>
        <Col>
          <p>
            <strong>Height:</strong> {formData.height}
          </p>
        </Col>
        <Col>
          <p>
            <strong>Weight:</strong> {formData.weight}
          </p>
        </Col>
        <Col>
          <p>
            <strong>BMI:</strong> {formData.bmi}
          </p>
        </Col>
  
        <Col>
          <p>
            <strong>BP:</strong> {formData.bp}
          </p>
        </Col>
      </Row>
        <Row>
        <Col>
          <p>
            <strong>Pulse:</strong> {formData.pulse}
          </p>
        </Col>
        <Col>
          <p>
            <strong>SpO2:</strong> {formData.spo2}
          </p>
        </Col>
   
        <Col>
          <p>
            <strong>Temp(C):</strong> {formData.temp}
          </p>
        </Col>
        <Col>
          <p>
            <strong>ECG:</strong> {formData.ecg}
          </p>
        </Col>
        </Row>

     <Row>
       <Col>
      <p>
        <strong>Dental Examination:</strong> {formData.dental_Examination}
      </p>
      </Col>
      <Col>
          <p>
            <strong>Systemic Examination:</strong> {formData.systemic_examination}
          </p>
        </Col>


      <Col>
      <p>
        <strong>Eye Examination:</strong> {formData.eye_Examination}
      </p>
      </Col>
     </Row>

     <Row>
     <Col>
          <p>
            <strong>Blood Sugar:</strong> {formData.bloodSugar}
          </p>
        </Col>

      <Col>
      <p>
        <strong>Diagnosis:</strong> {formData.diagnosis}
      </p>
      </Col>
 
       <Col>
      <p>
        <strong>Diagnosis1:</strong> {formData.diagnosis1}
      </p>
      </Col>
      </Row>


      <Row>
      <Col>
      <p>
        <strong>Recommendations (if any):</strong> {formData.recommendations}
      </p>
      </Col>
      <Col>
      <p>
        <strong>Medication:</strong> {formData.medication}
      </p>
      </Col>
      <Col>
          <p>
            <strong>Remarks:</strong> {formData.remarks}
          </p>
        </Col>
      </Row>

      
      <Button  className="no-print" variant="primary" onClick={() => window.print()}  >
        Print
      </Button>
    </Container>
  );
};

export default PrintPreview;
