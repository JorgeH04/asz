import { useState, useEffect } from 'react'
// import BalanceOf from './ImportMenu/BalanceOf';
// import Transfer from './ImportMenu/Transfer';
// import TransferFrom from './ImportMenu/TransferFrom';
// import Approve from './ImportMenu/Approve';
// import Allowance from './ImportMenu/Allowance';

const ERC20Token = require("./ERC20Token");
const { web3, applyDecimals } = require("../../utils/ethereumAPI");

const ERC20Import = ({ tokenAddress }) => {
    const web3Token = new web3.eth.Contract(ERC20Token.abi, tokenAddress);
    const [tokenRefresh, setTokenRefresh] = useState(0);
    const [tokenData, setTokenData] = useState([
        { id: 0, name: 'Address', value: tokenAddress },
        { id: 1, name: 'Name', value: '' },
        { id: 2, name: 'Symbol', value: '' },
        { id: 3, name: 'TotalSupply', value: '' },
        { id: 4, name: 'Decimals', value: '' },
        { id: 5, name: 'Current balance', value: '' }
    ]);

    const columns = [
        { field: 'name', headerName: 'Token', width: 150 },
        { field: 'value', headerName: 'Value', width: 500 }
    ];

    useEffect(() => {
        async function fetchData() {
            const web3Token = new web3.eth.Contract(ERC20Token.abi, tokenAddress);
            const name = await web3Token.methods.name().call();
            const symbol = await web3Token.methods.symbol().call();
            const totalSupply = await web3Token.methods.totalSupply().call();
            const decimals = await web3Token.methods.decimals().call();

            const accounts = await web3.eth.getAccounts();
            const currentBalance = await web3Token.methods.balanceOf(accounts[0]).call();
            
            setTokenData(tokenData => [
                tokenData[0],
                { ...tokenData[1], value: name },
                { ...tokenData[2], value: symbol },
                { ...tokenData[3], value: applyDecimals(totalSupply, decimals) },
                { ...tokenData[4], value: decimals },
                { ...tokenData[5], value: applyDecimals(currentBalance, decimals) }
            ]);
        }
        fetchData();
    }, [tokenAddress, tokenRefresh]);

    const refreshDataGrid = () => setTokenRefresh(t => ++t);

    return (
        <div>

      <section class="blog-section spad">
		<div class="container">
			<div class="row">
				<div class="col-lg-8">
					<div class="blog-post">
 						<div class="blog-date">Apr 08, 2019</div>
						<h2 class="blog-title">How to apply for a good loan</h2>
                        <ul>
                            <li>{tokenData} / {columns}</li>
                        </ul>    

    
				 
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem por incididunt ut labore et dolore mag na aliqua.  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti.</p>
                      </div>

				</div>
				 
			</div>
		</div>
	</section>


        </div>
    )
}

export default ERC20Import
