import * as React from 'react';
// import AppBar from '@material-ui/core';
import { useState } from 'react';
import  {  AppBar, makeStyles } from '@material-ui/core';
import { Toolbar }from '@material-ui/core';
import {Typography} from '@material-ui/core';
import {Button} from '@material-ui/core';
import{IconButton} from '@material-ui/core';
import{Cancel, Favorite, Menu, RestaurantRounded, Search, ShoppingCart }from '@material-ui/icons';
import classsNames from 'classnames'


const useStyles = makeStyles(theme =>({
  root: {
    display:'flex',
   justifyContent:'space-between', 
     [theme.breakpoints.down('md')]:{
         fontSize:'25%'
}},

  res_name:{
      fontSize:'2.5rem',
      fontWeight:'bolder',
      color:theme.palette.primary.dark,
      [theme.breakpoints.down('sm')]:{
        fontSize:'1.7rem',
        marginRight:theme.spacing(5)
    }
        

  },
 
  res_logo:{
      color:theme.palette.secondary.main,
      fontSize:'2.5rem',
    [theme.breakpoints.down('sm')]:{
        fontSize:'1.7rem',
        marginLeft:theme.spacing(0.2)
  }},
  header_btn:{
      fontSize:'1.rem',
       [theme.breakpoints.down('sm')]:{
         fontSize:'0.8rem'},
      color:theme.palette.primary.light,
      marginRight:theme.spacing(1),
      '&:hover':{
          color:theme.palette.primary.main,
          background:theme.palette.secondary.main,
      }

  },
  header__rigth:{
    display :'flex',
    alignItems:'center'
  },
  header_left:{
      display:'flex',
      alignItems:'center'
  },
  iconbutton:{
      width:'2.5rem',
      height:'2.5rem',
  },
  iconbutton_menu:{
    display:'none',
    [theme.breakpoints.down('sm')]:{
         display:'flex'
  }},
  header__right__options:{
      fontSize:'1.7rem',
      color:theme.palette.primary.dark,
      borderRadius:'50%',
      background:'#eee',
      '&:hover':{
          color:'#fff',
          background:theme.palette.secondary.main,
            
        //   transform:'rotate(360deg)'
      },
      [theme.breakpoints.down('sm')]:{
             padding: theme.spacing(0.8),
            }
  },
  //---------responsive design
  header_options1:{
     [theme.breakpoints.down('sm')]:{
         display:'none'
  }},
  header_options:{
    display:'none',
    flexDirection:'column',
    background:'#fff',
    [theme.breakpoints.down('sm')]:{
            display:(props) =>(props.state ?  'flex' : 'none' ),
            
        }
    
},
  header_btn2:{
      textAlign:'left',
      margin:theme.spacing(1),
      paddingRight:'750px',
      background:'#eee',
     
   } ,
   header_homebtn:{
       margin:theme.spacing(1),
       paddingRight:'750px',
   },
   cancel:{
    display:'none',
    [theme.breakpoints.down('sm')]:{
         display:'flex'
   }

   }




}));


export default function NavBar() {
    const [state, setstate] = useState(false)
    const classes =useStyles({state})
  return (
    // < sx={{ flexGrow: 1 }}>
    <div>
      <AppBar position="static">
        <Toolbar className={classes.root}>
           <div className={classes.header__rigth}>
               <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2,
             }}
          >
           
            <RestaurantRounded className={classes.res_logo} />
          </IconButton>
           
          <Typography variant="h6"  component="div" className={classes.res_name}>
            Resto
          </Typography>
        </div> 
          
          <div className={classes.header_options1} >
                   <Button  className={classes.header_btn } variant='contained' color='secondary'>Home</Button>
                    <Button  className={classes.header_btn}>Dishes</Button>
                    <Button className={classes.header_btn}>About</Button>
                    <Button  className={classes.header_btn}>Menu</Button>
                    <Button className={classes.header_btn}>Review</Button>
                    <Button className={classes.header_btn}>Order</Button>
        
          </div>
          

          <div className="header_left"   >
              <IconButton className={classes.iconbutton} sx={{ mr: 2 }}>  
                 <Menu onClick={() => (setstate(true))} className={classsNames(classes.header__right__options, classes.iconbutton_menu)} />
                <Cancel onClick={() => (setstate(false))} className={classsNames(classes.cancel, classes.header__right__options)}  />
              </IconButton> 
            {/* <IconButton className={classes.iconbutton} sx={{ mr: 2 }}>    <Cancel onClick={() => (setstate(false))} className={classsNames(classes.cancel, classes.header__right__options)}  onClick={() => setstate(false)}/></IconButton>  */}
            <IconButton  className={classes.iconbutton} sx={{ mr: 2 }}>   <Search className={classes.header__right__options} /></IconButton> 
              <IconButton  className={classes.iconbutton} sx={{ mr: 2 }}>   <Favorite className={classes.header__right__options} /> </IconButton> 
              <IconButton  className={classes.iconbutton} sx={{ mr: 2 }}>   <ShoppingCart className={classes.header__right__options} /></IconButton> 
          </div>
              
              
                       
                        
    
                   
        </Toolbar>
      </AppBar>
      <div className={classes.header_options} >
                    <Button  className={classsNames(classes.header_btn, classes.header_homebtn)} variant='contained' color='secondary'>Home</Button>
                    <Button className={classsNames(classes.header_btn, classes.header_btn2)}>Dishes</Button>
                    <Button className={classsNames(classes.header_btn, classes.header_btn2)}>About</Button>
                    <Button className={classsNames(classes.header_btn, classes.header_btn2)}>Menu</Button>
                    <Button className={classsNames(classes.header_btn, classes.header_btn2)}>Review</Button>
                    <Button className={classsNames(classes.header_btn, classes.header_btn2)}>Order</Button>
          </div>       

    </div>
);
}
