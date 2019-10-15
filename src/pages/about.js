
import Layout from '../components/layout';
import '../components/style-1000px.css';
import '../components/style.css'
import '../components/style-mobile.css'
import '../components/style-desktop.css'
import React, { useState } from 'react';
import Heaader from '../components/navheader'
import Layoute from '../components/layout'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
const AboutPage = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <Layoute>
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Awards
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
           F.A.Q
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <p>At  AFG, we put our customers first. And the confidence that our customers have in us drives us to excel and to redefine boundaries.

We continue to garner numerous prestigious awards over the years, reflecting our growing strength and influence on the financial landscape throughout Asia and the world. We are proud that the market and our peers recognise the strengths of our diverse team and our ability to deliver innovative financial solutions to our customers.

Here are some of our awards.

</p>
<ul><li>Euromoney-
World's Best Bank 2019</li>
<li>The Banker-
Bank of the Year 2018</li>
<li>Global Finance -
Best Bank in the World 2018</li></ul>
<p>In 2019, AFG achieved a world first by becoming the first bank in the world to hold three of the most prestigious global best bank awards at the same time.


</p>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>How Do I Set Up an Offshore Account?</CardTitle>
                <CardText>In order to set up an account, the first step is to do your research and consult a financial professional. Deciding which bank is right for you should not be a rushed process, and understanding the requirements for your different options is an important start.

Once you are ready to create your account, the basic documentation you will need is a passport or national ID. You may also be asked for a reference document from your current bank to prove that you have a satisfactory banking history. Some banks, like the HSBC and Barclays, even have options for opening the account online, and others like Citibank have a mostly online process. Just like might be the case at home, many offshore banks have Know Your Customer (KYC) policies in place to prevent illegal use of the bank. The information required will vary by bank.</CardText>
               
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Your Asset Protection Plan?</CardTitle>
                <CardText>There are many facets to a good asset protection plan. Managing your money effectively requires a lot of different strategies, and an offshore bank account might be a great tool for you. Having one of these accounts, held in the proper legal tool such as an offshore LLC and/or asset protection trust, can be an important step in protecting your wealth.</CardText>
               
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>How Do I Set Up an ONLINE BANKING Account?</CardTitle>
                <CardText>You will have to send us an email of intent to our official mail @contactapexfinanceglobal@yandex.com  and within a day a special offficer will be dedicated to caryy you along with the process.</CardText>
               
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>How do i get my token Generator?</CardTitle>
                <CardText>it usually comesin the mail if you are an abroad user.butb if your branch is witin a reachable distance you can walk in and get it easily</CardText>
               
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
    </Layoute>
  );
}


export default AboutPage