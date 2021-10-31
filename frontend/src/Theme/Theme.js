import { createTheme } from "@material-ui/core";



export const theme = createTheme({
    palette:{
        primary:{
            main:'#fff',
            //black
            dark:'#192a56',
            //light-color
            light:'#666',
        },
        secondary:{
            //green
            main:'#27ae60',
        },
       },
    typography:{
           fontFamily:[
                'Nunito',
                'sans-serif'
        ],
        fontSize:'20%',
        htmlFontSize:15,
        // [breakpoints.down('md')]:{
        // htmlFontSize:4,//}
    },
    breakpoints: {
            values: {
            xs: 0,
            sm: 600,
            md: 851,
            lg: 900,
            xl: 1536,
    },
  },
})





    // typography:{
    //     fontFamily:[
    //          'Nunito',
    //          'sans-serif'
    //     ],

    //     htmlFontSize:15

    // },
//    overrides: {
//     MuiButton: {
//         contained: {
//             backgroundColor: palette.primary.main,
//             color: palette.primary.contrastText,
//             "&:hover": {
//                 backgroundColor: palette.primary.active,
// //     },
//     },
//     outlined: {
//         color: palette.primary.main,
//         "&:hover": {
//         backgroundColor: palette.primary.active,
//         },
//     },
//     }
