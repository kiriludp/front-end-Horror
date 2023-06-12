import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import pic from '../styles/imgs/0-1 (12).jpg';
import API from "../utils/API"
import "../styles/Profile.css"

export default function Profile(props) {

  const params = useParams();
  const [user,setUser] = useState({})
  useEffect(()=>{
    fetchUser()
  },[])

  const fetchUser= ()=> {
    API.getUserByName(params.username).then(data=>{
      setUser(data)
    }).catch(err=> {
      console.log(err);
    })
  }

  return (
    <div className="vh-100">
      <MDBContainer className="container py-5 h-100">
        <MDBRow className="justify-content-center  h-100">
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: '0px' }}>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                <MDBCardImage src={pic}
                    className="rounded-circle" fluid style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h4">{user.username} </MDBTypography>
                <MDBCardText className="text-muted mb-4">
                  
                </MDBCardText>
                <div className="mb-4 pb-2">
                  <MDBBtn outline floating>
                    <MDBIcon fab icon="instagram" size="lg" />
                  </MDBBtn>
                  <MDBBtn outline floating className="mx-1">
                    <MDBIcon fab icon="twitter" size="lg" />
                  </MDBBtn>
                 
                </div>
                
                <div className="d-flex justify-content-between text-center mt-5 mb-2">
                  <div>
                    <MDBCardText className="mb-1 h5">6</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Survivals</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">3</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Deaths</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">1</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Kill</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">7</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Endings</MDBCardText>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}