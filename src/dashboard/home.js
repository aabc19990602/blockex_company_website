import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useConnect, useAccount, useDisconnect } from 'wagmi';
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { ITO, USTD, SENTOS } from '../contarcts/smartContarcts';
import * as itoAbi from '../contarcts/abis/ito.json';
import * as usdtAbi from '../contarcts/abis/usdt.json';
import * as sntAbi from '../contarcts/abis/sentos.json';
import { useState } from 'react';


const validationSchema = Yup.object().shape({
  coin: Yup.string()
    .required('Required'),
});

function DashboardHome() {
  const publicURL = process.env.REACT_APP_URL_ENDPOINT;
  const { address, isConnected } = useAccount();
  const [amount, setAmount] = useState(0);
  const { hash: approveHash, data, isLoading, isSuccess, writeContract, error: approveError } = useWriteContract({
    address: USTD,
    abi: usdtAbi,
    functionName: 'approve',
    args: [ITO, amount], // arguments for the function
  })
  console.log(isConnected);
  const { isLoading: isbuying, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      approveHash,
    })

  // function mnaskjca(){
  //   writeContract();
  // }

  const formik = useFormik({
    initialValues: {
      coin: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values.coin);
      fetch(publicURL + '/token-price/calculate-snt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usdtAmount: Number(values.coin) })
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
          fetch(publicURL + '/web3/generate-deposit-payload', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-API-Key': "pAyLoAd-gEnErAtIoN-aPi-kEy",
            },
            body: JSON.stringify({ usdtAmount: String(Number(values.coin) * 1e18), sntAmount: String(Number(res.sntAmount) * 1e18), userAddress: address })
          })
            .then(writeContract())
            .then(res => {
              console.log(approveError);
              console.log("data", data);
              console.log("isSuccess", isSuccess);

            });
        });
    }
  });
  return (
    <div>
      <p className="DH_title">You need <span style={{ color: '#00F0FF' }}>13.33k Sentos</span> coins to level up</p>
      <div className="d-flex">
        <div className="flex-grow sentosBalance">
          <p className="balanceTitle">Total Sentos Balanace</p>
          <p className="balance">0.00 Sentos</p>
        </div>
        <div className="flex-grow sentosBalance">
          <p className="balanceTitle">Your coin Worth at Launch</p>
          <p className="balance">0.00 </p>
        </div>
      </div>
      <div className="d-flex">
        <div className="flex-grow buySentosCoin">
          <p className="buySentos">Buy Sentos</p>
          <div className='paddingUpperPart'>
            <p className='go_live'>GO LIVE reveal JUNE 13TH</p>
            <div className='dash_marginBottom'></div>
            <div className='d-flex flex-wrap justify-content-around mt-3'>
              <div>
                <p className='total_coin_sales'>Total Coin Sales </p>
                <p className='coin_amount'>$270,727,713.80</p>
              </div>
              <div>
                <p className='total_coin_sales'>Total Coin Sold </p>
                <p className='coin_amount'>$270,727,713.80</p>
              </div>
            </div>
            <div class="progress">
              <div class="progress-bar bg-success" role="progressbar" style={{ width: 75 + '%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Remaining 18.46M</div>
            </div>
            <div className='d-flex flex-wrap justify-content-between '>
              <div>
                <p className='sentosVal'>1 SENTOS: <span>$0.001</span></p>
              </div>
              <div>
                <p className='sentosVal'>Next Batch: $0.0026</p>
              </div>
            </div>
          </div>
          <div className='dash_marginBottom'></div>
          <div className='paddingBottomEnd'>
            <div className='other_crytos'>
              <img src='/assets/images/dashboard/icons/otherCrypto.png' className='img-fluid' />
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div class="input-group mb-3">
                <span class="input-group-text">USDT</span>
                <input
                  type="text"
                  class="form-control customBGInput"
                  name="coin"
                  placeholder='Enter Amount'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.coin} />
                <span class="input-group-text maxColor">Max</span>
              </div>
              <p className='minAmount'>Min. Amount to Purchase: 0.05197 USDT</p>
              <p className='sentosWorth'><span>Sentos Worth</span> <span>0.00 USD</span></p>
              <button type="submit" className="btn btnBuySentos w-100" >Buy Coin</button>
            </form>
            <div className='GoInLive'>
              <div className='d-flex flex-wrap justify-content-between'>
                <div><p className='goLive'>GOINGLIVE</p></div>
                <div><p className='applied'>Applied</p></div>
              </div>
            </div>
            <span className='active_dash'>Active</span>
          </div>
        </div>
        <div className="flex-grow sentosBalance">
          <h1 className='last_trans'>Last Transactions</h1>
          <p className='no_trans'>There are no finalized transactions yet.</p>
        </div>
      </div>
    </div>
  )
}
export default DashboardHome