
// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
      main: string,
      secondary: string,
      thirdly: string,
      fourthly: string,
      fifthly: string,
      mobile: string,
      tabletsxl: string,
      tablets: string,
      laptop: string,
      laptopL: string
  }
}