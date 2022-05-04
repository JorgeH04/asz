import { useState } from 'react';
import ERC20App from './ERC20/ERC20App';



const AppAuthenticated = () => {
    const [ERCIndex, setERCIndex] = useState(0);
    const ERC = {
        ERC20: "ERC-20",

        //ERCs below are not yet implemented
        //ERC721: "ERC-721",
        //ERC777: "ERC-777",
        //ERC1155: "ERC-1155"
    }
    const allERCs = Object.values(ERC);
    const drawerWidth = 240;

    return (
      <>
      <ERC20App/>
      </>
    )
}

export default AppAuthenticated
