import { useState } from 'react'

import ERC20Create from './ERC20Create'
import ERC20MainMenu from './ERC20MainMenu'
//import ERC20Import from './ERC20Import'

const Menu = {
    Main: 1,
    Create: 1,
    Import: 2
}

const ERC20App = () => {
    const [menu, setMenu] = useState(Menu.Main);
    const [tokenAddress, setTokenAddress] = useState("");

    const onClickCreate = () => setMenu(Menu.Create);
    const importToken = (address) => {
        setTokenAddress(address);
        setMenu(Menu.Import);
    };

    return (
        <div>
   
    
            {menu === Menu.Create && <ERC20Create importToken={importToken} />}
        </div>
    )
}

export default ERC20App
