import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SimpleTabs from "../components/centredtabs"
import ImgMediaCard from '../components/cards'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

 import 'bootstrap/dist/css/bootstrap.css';
 import mypic from '../components/crypto.jpg'
 import offshorepic from '../images/offshore.jpg'
 import stock from '../images/stock.jpg'
 import save from '../images/save.jpg'
 import health from '../images/healthinsurance.jpg'
 import vet from '../images/veteran.jpg'
 import es from '../images/earlySavers.jpg'


 
const IndexPage = () => {
  
  return (
    <Layout>


      
     <div style={{display:'flex',flexWrap:'wrap',marginTop:'10px'}}>
     <div style={{margin:'0 auto'
    }}><h5 >OUR SERVICES</h5>
    <hr style={{border: '1px solid blue',
  borderRadius: '5px'}}/></div>
     <Row>
      <Col sm="4">
      <div style={{margin:'0 auto',textAlign:'center'
    }}>
        <Card body>
        
          <CardTitle><h5>Build your crypto portfolio with automated quant trading</h5></CardTitle>
          <div style={{margin:'0 auto'
    }}> <img width="250px" src={mypic} alt="Card image cap" /></div>
        
       
          <CardText> Different types of investments involve varying degrees of risk, and there can be no assurance that the future performance of any specific investment, investment strategy, or product will be profitable, equal any corresponding indicated historical performance level(s). </CardText>
          <Link to='/content' state={{tite:'Build Your Crypto Portfolio With Automated Quant Trading',
        img:mypic,
        desc:' Different types of investments involve varying degrees of risk, and there can be no assurance that the future performance of any specific investment, investment strategy, or product will be profitable, equal any corresponding indicated historical performance level(s). We assess this risk factors so you dont have to '}} >Learn More</Link>
        </Card>
        </div>  
      </Col>
      <Col sm="4">
      <div style={{margin:'0 auto',textAlign:'center'
    }}>
        <Card body>
          <CardTitle><h5>Offshore Bank Account</h5></CardTitle>
          <div style={{margin:'0 auto'
    }}> <img width="250px" src={offshorepic} alt="Card image cap" /></div>
         
          <CardText>We can save you hours of research and the uncertainty involved with selecting a foreign bank. With our experience, we can select the countries and banks that make the most sense for your situation and banking requirements..</CardText>
          <Button>Learn More</Button>
        </Card>
        </div>
      </Col>
      <Col sm="4">
      <div style={{margin:'0 auto',textAlign:'center'
    }}>
        <Card body>
          <CardTitle><h5>Traditional Savings</h5></CardTitle>
          <div style={{margin:'0 auto'
    }}> <img width="250px" src={save} alt="Card image cap" /></div>
         
          <CardText>The Traditional Savings Account is the ideal choice for those of you who are still following the tradition! Deposit and withdraw money whenever you want, without giving prior notice, and at your own pace.</CardText>
          <Button>Learn More</Button>
        </Card>
        </div>
      </Col>
      
     
    </Row>
    <Row>
      <Col sm="4">
      <div style={{margin:'0 auto',textAlign:'center'
    }}>
        <Card body>
        
          <CardTitle><h5>Saave Money on Health Insurance</h5></CardTitle>
          <div style={{margin:'0 auto',textAlign:'center'
    }}>
      <div style={{margin:'0 auto'
    }}> <img width="250px" src={health} alt="Card image cap" /></div>
         
          </div>
         
       
          <CardText>Screenings may help detect medical problems sooner; in many cases early detection is the key to successful treatment…
Preventive Care: The Medicare Annual Wellness Visit
</CardText>
          <Button>Learn More</Button>
        </Card>
        </div>
      </Col>
      <Col sm="4">
      <div style={{margin:'0 auto',textAlign:'center'
    }}>
        <Card body>

          <CardTitle><h5>Veteran Home Loan</h5></CardTitle>
          <div style={{margin:'0 auto'
    }}> <img width="250px" src={vet} alt="Card image cap" /></div>
         
          <CardText>VA direct and VA-backed Veterans home loans can help Veterans, service members, and their survivors to buy, build, improve, or refinance a home. You'll still need to have the required credit and income for the loan amount you want to borrow. ... For example, nearly 90% of VA-backed loans are made with no down payment.</CardText>
          <Button>Read More</Button>
        </Card>
        </div>
      </Col>
      <Col sm="4">
      <div style={{margin:'0 auto',textAlign:'center'
    }}>
        <Card body>
          <CardTitle><h5>Stocks Continue Bobbing on Central Bank Decisions
</h5></CardTitle>
<div style={{margin:'0 auto'
    }}> <img width="250px" src={stock} alt="Card image cap" /></div>
         
          <CardText>Wealth Dailies rounds up overnight markets with Market Snapshot, Macro Strategy, Singapore Stock Pulse, and Regional Morning Pack.</CardText>
          <Button>learn More</Button>
        </Card>
        </div>
      </Col>
     <div style={{margin:'0 auto'
    }}><h5 >INITIATIVES</h5>
    <hr style={{border: '1px solid blue',
  borderRadius: '5px'}}/></div>
      
      <Row>
      <Col sm="4">
      <div style={{margin:'0 auto',textAlign:'center'
    }}>
        <Card body>
        
          <CardTitle>Early Savers Account</CardTitle>
          <div style={{margin:'0 auto'
    }}> <img width="250px" src={es} alt="Card image cap" /></div>
         
         
       
          <CardText>t’s never too early to learn the value of saving. Early Savers is a savings account designed especially for children below the age of 18 years, including unborn children.
 </CardText>
          <Button>Learn More</Button>
        </Card>
        </div>
      </Col>
      <Col sm="4">
      <div style={{margin:'0 auto',textAlign:'center'
    }}>
      <div style={{margin:'0 auto',textAlign:'center'
    }}>
        <Card body>
        
          <CardTitle>Special Title Treatment</CardTitle>
          <div style={{margin:'0 auto'
    }}> <img width="250px" src={mypic} alt="Card image cap" /></div>
          
         
       
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
        </div>
        </div>
      </Col>
      
      <Col sm="4">
      <div style={{margin:'0 auto',textAlign:'center'
    }}>
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <div style={{margin:'0 auto'
    }}> <img width="250px" src={mypic} alt="Card image cap" /></div>
          
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
        </div>
      </Col>
      <Col sm="4">
      <div style={{margin:'0 auto',textAlign:'center'
    }}>
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <div style={{margin:'0 auto'
    }}> <img width="250px" src={mypic} alt="Card image cap" /></div>
          
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
        </div>
      </Col>
      
     
    </Row>
      
     
    </Row>
     </div>
    
    
  
  
      
    </Layout>
  )
}
export {mypic}
export default IndexPage
