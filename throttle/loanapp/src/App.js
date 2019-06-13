import React from 'react';
import './App.css';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

const styles = {
  root: {
    width: 1000,
  },
  slider: {
    padding: '30px 0px',
  },
};




class App extends React.Component {
  ondata(){
  
    if(this.state.data){
      return(
         
        <div className="displaydata">
        <div className = "datahead">
          <h3 style ={{ textDecoration:"underline"}}>Loan Calculation.</h3>

        </div>
        <div className="datadistribute">
          <div className="principle">
            <h4 style={{color:"white"}}>
              Principle Amount 
              </h4>
            <h2 style={{color:"white"}}>
              {this.state.data.principal.amount}$
            </h2>
          </div>
          <div className="intrest">
          <h4 style={{color:"white"}}>
              MonthlyPayment ($)
              </h4>
            <h2 style={{color:"white"}}>
              {this.state.data.monthlyPayment.amount}$
            </h2>
            <h6 style={{color:"white"}}>number of Payments:<b>{this.state.data.numPayments}</b></h6>
          </div>
          <div className="rate">
           <h4 style={{color:"white"}}>
              Rate of intrest
            </h4>
            <h2 style={{color:"white"}}>
              {this.state.data.interestRate}$
            </h2>
          </div>
        </div>  
       </div>
     






      )
    }
    else{

    }





  }
 
  
  state = {
    value: 500,
    period:6,
    data:null,
  };

  handleChange = (event, value) => {
    this.setState({ value });
    console.log(this.state.value)
    axios.get(`https://ftl-frontend-test.herokuapp.com/interest?amount=${this.state.value}&numMonths=${this.state.period}`).
         then((response)=>{
           console.log(response.data)
           this.setState({data:response.data})
           })
         .catch(
              (e)=>
              {
                console.log(e)
              }
           ) ;
   };

  handleloan=(event , period)=>{
        this.setState({period})
       
         axios.get(`https://ftl-frontend-test.herokuapp.com/interest?amount=${this.state.value}&numMonths=${this.state.period}`).
         then((response)=>{
           console.log(response.data)
           this.setState({data:response.data})
         }).catch(
           (e)=>{
             console.log(e)
           }
         ) 
   }

  
  render(){
    const { classes } = this.props;
    const { value } = this.state;
    const { period} = this.state;
    return (
    <div className="App">
     
      <div className="Card">
        <div className = "identify">
          <h3 className="textdec">
             Loan Amount($) 
           </h3>
           <div className="Nodisplay">
                <h4 style={{color:"white"}}>{this.state.value}$</h4>
                </div>
            <div className={classes.root}>
             <Slider
               className={classes.slider}
               value={value}
               min={500}
               max={5000}
               step={100}
               onChange={this.handleChange}
              />
              
              

            </div>
          </div>
          
          
         <div className = "identifys">
           <h3 className="textdec">
             Loan Duration (in months)
            </h3>
           <div className="Nodisplay">
                <h4 style={{color:"white"}}>{this.state.period}M</h4>
                </div>
               <div className={classes.root}>
                  <Slider
                    className={classes.slider}
                    value={period}
                    min={6}
                    max={24}
                    step={1}
                    onChange={this.handleloan}
                  />
               </div>
            </div>

              {this.ondata()}

        </div>
    </div>
  );
}}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(App);
