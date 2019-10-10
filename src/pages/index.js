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
        desc:' Different types of investments involve varying degrees of risk, and there can be no assurance that the future performance of any specific investment, investment strategy, or product will be profitable, equal any corresponding indicated historical performance level(s). We assess this risk factors so you dont have to If you would like to learn more about Quantitative Trading, you can learn from the Quants at Quantinsti. Quantinsti offers the Executive Program in Algorithmic Trading which covers algorithmic, quantitative and high frequency trading. Topics include Statistics & Econometrics, Time Series, Machine Learning, and trading strategies across Equities, Options, Futures, ETFs, etc. The faculty is globally recognized and are current Quants running high frequency trading strategies, hedge funds, and other quantitative models. You can take a look at the EPAT program at the following link: https://www.quantinsti.com/epat/ '}} >Learn More</Link>
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
          <Link to='/content' state={{tite:'Offshore Bank Account',
        img:offshorepic,
        desc:' We can save you hours of research and the uncertainty involved with selecting a foreign bank. With our experience, we can select the countries and banks that make the most sense for your situation and banking requirements..Offshore bank accounts usually provide a highly personalised service, giving you round-the-clock access to your money through online and telephone banking, seven days a week, 365 days of the year.A relationship manager may also be assigned to your account, so you will always have a personal point of contact.The best banks offer the highest service levels, which can be appealing for expats who have international financial obligations and opportunities. With multi-currency accounts usually coming as standard, transferring money between accounts will be fast and free And, if you need to transfer money between currencies, some offshore banks provide a competitive foreign exchange rate, compared to a regular banking servic  This is one of the biggest advantages of offshore banking facilities for expats with international financial obligations.'}} >Learn More</Link>
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
          <Link to='/content' state={{tite:'Traditional Savings',
        img:save,
        desc:' Got money to save? Place it in your Traditional savings account*. Its a regulated savings account where your money is safe and available. And if you want to make your wishes come true, like take a holiday or get your urban garden made to measure or finally get your made-to-measure vegetable plot, you just use the money that you have saved. The Traditional Savings Account is the ideal choice for those of you who are still following the tradition! Deposit and withdraw money whenever you want, without giving prior notice, and at your own pace.The Traditional Savings Account is the ideal choice for those of you who are still following the tradition! Deposit and withdraw money whenever you want, without giving prior notice, and at your own pace'}} >Learn More</Link>
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
<Link to='/content' state={{tite:'Save Money on Health Insurance',
        img:health,
        desc:' Looking after our health is of crucial importance; it can also mean high costs as well as unpredictable needs. A private health insurance ensures fast and secure access to health care, without being subject to long awaits and uncertainty. MultiCare International Health Plan has been developed by Universal Life in association with AXA-Global Health Care. AXA is one of the largest health insurance companies of the UK with more than 60 years of experience and more than 2 million insured people all over the world. Screenings may help detect medical problems sooner; in many cases early detection is the key to successful treatment…Preventive Care: The Medicare Annual Wellness Visit'}} >Learn More</Link>
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
          <Link to='/content' state={{tite:'Veteran Home Loan',
        img:vet,
        desc:' VA direct and VA-backed Veterans home loans can help Veterans, service members, and their survivors to buy, build, improve, or refinance a home. Youll still need to have the required credit and income for the loan amount you want to borrow. ... For example, nearly 90% of VA-backed loans are made with no down payment.Have you found your dream home and are ready to buy? Are you hoping to start the search and want to get pre-qualified? Or are you refinancing your current home? We would love to be a part of your process! So when you choose to take out your mortgage with us, you’re more than just a number. We’ve been around since 1930, and we aren’t going anywhere! We’re community driven and live in the same place where you are planning to buy your new home. Local decision-making is important to us because it is important to you!'}} >Learn More</Link>
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
          <Link to='/content' state={{tite:'Stocks Continue Bobbing on Central Bank Decisions',
        img:stock,
        desc:' Wealth Dailies rounds up overnight markets with Market Snapshot, Macro Strategy, Singapore Stock Pulse, and Regional Morning Pack. Historically considered a “risk-off” stock, Dollar General has been performing more like a high-tech growth dynamo this year, with shares up more than 45% in 2019. Shares of the discount retailer have been on fire this year as investors have flocked to the slow-but-steady growth model. Perhaps one reason investors have been drawn to DG is because of its historical resilience in recessions. Recession fears have been elevated recently, as reflected in the flattening-to-inverted yield curve. Another reason DG continues to be one of the best stocks to buy going forward is due to its rock-solid financials: in late August, the company reported better-than-expected second-quarter earnings, with same-store sales up 4% vs. a 2.5% consensus. Adjusted earnings per share came in at $1.74 against expectations of $1.57.'}} >Learn More</Link>
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
export {mypic,vet,stock,offshorepic,health,save}
export default IndexPage
