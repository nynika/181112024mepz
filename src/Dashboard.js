import React, { useState, useEffect } from "react";
import { Button, Container, Table, Form, Pagination } from "react-bootstrap";
import PrintPreview from "./PrintPreview";
import Header from "./Header";
import axios from "axios";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [formData, setFormData] = useState({});
  const [showPrintPreview, setShowPrintPreview] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [company, setCompany] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1); 
  const [itemsPerPage] = useState(5); 
  const navigate = useNavigate();
  const [mobileterm, setmobileterm] = useState("");


  useEffect(() => {
    axios.get(`https://www.relainstitute.in/NewHIS/api/his/getmepz`)
      .then((response) => setTableData(response.data))
      .catch((error) => console.error("Error fetching table data:", error));
  }, []);

  const handleEdit = (patient) => {
    navigate(`/patientform/${patient.mepz_Code}`, { state: { patient } });
  };

  const handlePrint = (patient) => {
    setFormData(patient);
    setShowPrintPreview(true);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleMobileChange  =(e) =>{
    setmobileterm(e.target.value)
  }

  // Filter function
  const filteredData = tableData
  //  .filter((item) => (company ? item.company_Name === company : true))
    .filter((item) =>item.company.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((item) =>item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((item) => item.mobile  && item.mobile.includes(mobileterm)); 

    const handleBack = () => {
      setShowPrintPreview(false); 
    };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Generate page numbers with ellipsis for large datasets
  const getPaginationItems = () => {
    const pageNumbers = [];
    const maxPageNumbersToShow = 5;

    let startPage = Math.max(currentPage - 2, 1);
    let endPage = Math.min(currentPage + 2, totalPages);

    if (totalPages <= maxPageNumbersToShow) {
      // Show all pages if less than or equal to maxPageNumbersToShow
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = maxPageNumbersToShow;
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }

    if (startPage > 1) {
      pageNumbers.unshift(
        <Pagination.Ellipsis key="start-ellipsis" disabled />
      );
    }
    if (endPage < totalPages) {
      pageNumbers.push(<Pagination.Ellipsis key="end-ellipsis" disabled />);
    }

    return pageNumbers;
  };

  return (
    <>
      <Header />
      <Container>
        {!showPrintPreview ? (
          <>
           <Row className="align-items-center mb-3">
  <Col sm={4}>
    <Form.Group controlId="companySelect">
      <Form.Label style={{ fontSize: '17px', fontWeight: 'bold' }}>Company Name</Form.Label>
      <Form.Control
        as="text"
        value={searchTerm}
       // value={company}
        onChange={handleCompanyChange}
      >
        <option value="">All Companies</option>
        {[...new Set(tableData.map((item) => item.company_Name))].map(
          (companyName, index) => (
            <option key={index} value={companyName}>
              {companyName}
            </option>
          )
        )}
      </Form.Control>
    </Form.Group>
  </Col>

  <Col sm={4}>
    <Form.Group controlId="formSearch2" style={{marginLeft:'20px'}}>
      <Form.Label style={{ fontSize: '17px', fontWeight: 'bold' }}>Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Search by Name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </Form.Group>
  </Col>

  <Col sm={4}>
    <Form.Group controlId="formSearch1" style={{marginLeft:'20px'}}>
      <Form.Label style={{ fontSize: '17px', fontWeight: 'bold'}}>Mobile Number</Form.Label>
      <Form.Control
        type="text"
        placeholder="Search by Mobile Num"
        value={mobileterm}
        onChange={handleMobileChange}
      />
    </Form.Group>
  </Col>
</Row>

            <Button  
              variant="success"
              onClick={() => navigate("/newpatientform")}
              style={{ marginTop: "20px" , marginBottom:'20px'}}>
              Add New
            </Button>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Mepz Code</th>
                  <th>Company Name</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Mobile No</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                    <td>{item.mepz_Code}</td>
                    <td>{item.company_Name}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.gender}</td>
                    <td>{item.mobile}</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={() => handleEdit(item)}>
                        Edit
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => handlePrint(item)}>
                        Print
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
      
            <Pagination>
              <Pagination.Prev
                onClick={() =>
                  handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
                }
                disabled={currentPage === 1}
              />
              {getPaginationItems()}
              <Pagination.Next
                onClick={() =>
                  handlePageChange(
                    currentPage < totalPages ? currentPage + 1 : totalPages
                  )
                }
                disabled={currentPage === totalPages}
              />
            </Pagination>
          </>
        ) : (
          <>
            <PrintPreview formData={formData} />
            <Button style={{position:"relative",bottom:'38px', marginLeft:'100px'}} variant="secondary" 
             onClick={handleBack}
             className="no-print">
              Back 
            </Button>
             </>
        )}
      </Container>
    </>
  );
};

export default Dashboard;
