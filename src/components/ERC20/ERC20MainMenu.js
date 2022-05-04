import { useState } from 'react';


const ERC20MainMenu = ({ onClickCreate, importToken }) => {
    const [tokenAddress, setTokenAddress] = useState("");

    return (
        <>
        <section class="contact-section spad">
          <div class="container">
           <div class="row">
            <div class="col-lg-9">
              <form class="contact-form">
                <div class="row">
                    <div class="element">
                        <h2 class="el-title">Buttons</h2>
                        <button 
                           class="site-btn sb-dark"
                           onClick={() => onClickCreate()}
                           >Create token</button>
                    </div>
                    <div class="col-md-12">
                        <input 
                          type="text" 
                          placeholder="token address"
                          value={tokenAddress}
                          onChange={(e) => setTokenAddress(e.target.value)}
                        />
                        <button 
                           class="site-btn"
                           onClick={() => importToken(tokenAddress)}
                           >
                           Import token</button>
                    </div>

                </div>
            </form>
         </div>
       </div>
     </div>
</section>
        </>
    )
}

export default ERC20MainMenu






