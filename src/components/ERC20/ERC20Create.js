import { useState } from 'react'
import Background from "../../images/1.jpg";
var foto = {backgroundImage:`url(${Background})`}

const ERC20Token = require("./ERC20Token");
const { applyDecimals, web3 } = require('../../utils/ethereumAPI');
const web3Token = new web3.eth.Contract(ERC20Token.abi);

const ERC20Create = ({ importToken }) => {
    const defaultDecimals = "18";
    const defaultInitialSupply = "1000000000000000000"; // 1
    const [tokenName, setTokenName] = useState("");
    const [tokenSymbol, setTokenSymbol] = useState("");
    const [tokenInitialSupply, setTokenInitialSupply] = useState(defaultInitialSupply);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const onClickAction = async () => {
        if(successMessage) {
            importToken(web3Token.options.address);
            return;
        }

        setLoading(true);
        setErrorMessage("");
        setSuccessMessage("");

        const accounts = await web3.eth.getAccounts();
        try {
            const result = await web3Token
                            .deploy({
                                data: ERC20Token.bytecode,
                                arguments: [tokenName, tokenSymbol, tokenInitialSupply]
                            })
                            .send({ from: accounts[0] });

            web3Token.options.address = result._address;
            setSuccessMessage(`Token successfully deployed at: ${result._address}`);
        } catch (error) {
            setErrorMessage(error.message);
        }

        setLoading(false);
    };

    return (

        <>




    <header class="header-section">
		<a href="index.html" class="site-logo">
			<img src="img/logo.png" alt=""/>
		</a>
		<nav class="header-nav">
			<ul class="main-menu">
				<li><a href="index.html" class="active">Home</a></li>
				<li><a href="about-us.html">About Us</a></li>
				<li><a href="#">Pages</a>
					<ul class="sub-menu">
						<li><a href="about-us.html">About Us</a></li>
						<li><a href="loans.html">Loans</a></li>
						<li><a href="elements.html">elements</a></li>
					</ul>
				</li>
				<li><a href="news.html">News</a></li>
				<li><a href="contact.html">Contact</a></li>
			</ul>
			<div class="header-right">
				<a href="#" class="hr-btn"><i class="flaticon-029-telephone-1"></i>Call us now! </a>
				<div class="hr-btn hr-btn-2">+45 332 65767 42</div>
			</div>
		</nav>
	</header>
 
 	<section class="hero-section" style={foto}>
		<div class="container"  >
			<div class="row">
				<div class="col-lg-6">
					<div class="hs-text">
						<h2>Looking for a same day loan?</h2>
						<p>Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. Proin vulputate congue rutrum. Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu ad litora torquent per conubia.</p>
						<a href="#" class="site-btn sb-dark">Find out more</a>
					</div>
				</div>
				<div class="col-lg-6">
					<form class="hero-form">
                        <input 
                           type="text" 
                           placeholder="GOLD"
                           onChange={(e) => setTokenName(e.target.value)}
                        />
                        <input 
                            type="text" 
                            placeholder="GLD"
                            onChange={(e) => setTokenSymbol(e.target.value)}
                        />
                        <input 
                           type="text" 
                           placeholder={defaultInitialSupply}
                           value={tokenInitialSupply}
                           onChange={(e) => setTokenInitialSupply(e.target.value)} 
  
                        />
                        <input 
                            type="text" 
                            placeholder="1"
                            value={applyDecimals(tokenInitialSupply, defaultDecimals)}                                           

                        />
                        <input 
                            type="text" 
                            placeholder="Your Phone"
                            value={defaultDecimals}
                            />


						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                        <button 
                            onClick={() => onClickAction()}
                            disabled={loading}
                            class="site-btn">Crear token
                        </button>
					</form>
				</div>
			</div>
		</div>
		<div class="hero-slider owl-carousel">
           <div class="hs-item set-bg"   ></div>
		 
		</div>
	</section>
 </>
    )
}

export default ERC20Create


