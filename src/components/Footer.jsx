import { CDBModalFooter, CDBBtn, CDBIcon, CDBBox } from "cdbreact";

export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <h5 className="font-weight-bold text-danger">
        <strong>MovieList</strong>
      </h5>

      <small className="ms-2">
        &copy; MovieList, 2023. All rights reserved.
      </small>

      <CDBBox display="flex">
        <CDBBtn flat color="danger" className="p-2">
          <CDBIcon fab icon="facebook-f" />
        </CDBBtn>
        <CDBBtn flat color="danger" className="mx-3 p-2">
          <CDBIcon fab icon="twitter" />
        </CDBBtn>
        <CDBBtn flat color="danger" className="p-2">
          <CDBIcon fab icon="instagram" />
        </CDBBtn>
      </CDBBox>
    </div>
  );
};
