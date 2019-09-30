import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Layout from "../components/layout"
import { Table } from 'reactstrap'
import Header from "../components/neweader"
import ImageAvatars from '../components/avatar'
import  "../components/stylez.css"


const BASE_URL = "https://mandy-25207.firebaseio.com/.json";

function useDataFetcher(url) {
    const [posts, setPosts] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    
    React.useEffect(() => {
      setIsLoading(true);
      fetch(url)
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw Error("Error fetching posts!")
          }
        })
        .then(posts => {
          setPosts(posts);
          setIsLoading(false)
        })
        .catch(error => {
          setError(error)
        })
    }, [url])
  
    return { posts, isLoading, error }
  }
function TabPanel(props) {
  const { children, value, index, ...other } = props;
 
  

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 1000,
    margin: '0 auto',
   
  
  },
}));

export default function FullWidthTabs() {
    
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  const { posts, isLoading, error } = useDataFetcher(BASE_URL)

  if (error) {
    
    return  <Layout> <p style={{ color: 'red' }}>{error.message}</p>
    </Layout>
  }

  if (isLoading) {

    return <Layout> <p>Loading posts...</p>
    </Layout>}
  return (
<>
<Header/>


<div className='profile'>
<ImageAvatars/>
<p>Ernsting Braw</p>
</div>
    <div >
    <div style={{textAlign:'center'}}>
      <h3>TRANSACTIONS

      </h3>
      <hr style={{border:'1px solid blue'}}/>
      </div>
      </div>
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="TRANSACTIONS" {...a11yProps(0)} />
          <Tab label="ACTIVITY LOG" {...a11yProps(1)} />
          <Tab label="TRANSFER FUNDS" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <Table dark>
        <thead>
          <tr>
          
            <th>Name</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
        {posts.map(post => (
        <tr>
           
        <td>
          {post.name}
        </td>
        <td>{post.amount}</td>
        <td>{post.date}</td>
      </tr>

        
      ))}
          
          
        </tbody>
      </Table>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </div>
    </>
  );
}
