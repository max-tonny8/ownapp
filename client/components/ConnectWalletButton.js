

const ConnectWalletButton = ({ connectWallet }) =>

<div className=" flex justify-around flex-col justify-center py-0">

  <div className='pt-0 mt-15 justify-center flex-col '>
  <h1 className='text-7xl font-bold py-3 px-1 mt-20 '>I_TASK APP</h1>
    <p className='text-3xl italic font-semi-bold py-10 mt-20'>Get it done with I-Task, this App <br></br>is used to store 
      information <br></br>on the blockchain so as to 
      <br></br>make it more secure and safe</p>
  </div>
  <div>
  <button
    className='h-[5rem] text-2xl font-bold py-3 px-12 mt-20 ml-7 mb-20 bg-[#FFE492] rounded-lg mb-10 hover:scale-105 transition duration-500 ease-in-out'
    // Add an onClick functionality
    onClick={connectWallet}
  >
    Connect Wallet
  </button>
  </div>
</div>


export default ConnectWalletButton