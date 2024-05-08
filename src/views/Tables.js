import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

function Tables() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Simple Table</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Country</th>
                      <th>City</th>
                      <th className="text-right">Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Antonia Rice</td>
                      <td>Poland</td>
                      <td>Warsaw</td>
                      <td className="text-right">$36,700</td>
                    </tr>
                    <tr>
                      <td>Diego Santiago</td>
                      <td>Italy</td>
                      <td>Naples</td>
                      <td className="text-right">$22,789</td>
                    </tr>
                    <tr>
                      <td>Sage Akim</td>
                      <td>Russia</td>
                      <td>Kazan</td>
                      <td className="text-right">$55,450</td>
                    </tr>
                    <tr>
                      <td>Philip Adrian</td>
                      <td>Russia</td>
                      <td>Moscow</td>
                      <td className="text-right">$30,735</td>
                    </tr>
                    <tr>
                      <td>Bernardo Greene</td>
                      <td>Brazil</td>
                      <td>Sao Paulo</td>
                      <td className="text-right">$60,500</td>
                    </tr>
                    <tr>
                      <td>Mason Jackson</td>
                      <td>Canada</td>
                      <td>Ottawa</td>
                      <td className="text-right">$79,625</td>
                    </tr>
                    <tr>
                      <td>Leo Louis</td>
                      <td>France</td>
                      <td>Paris</td>
                      <td className="text-right">$99,000</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
