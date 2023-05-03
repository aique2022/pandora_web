import { useRouter } from "next/router"
import { useEffect, useState } from "react"
const VerifyOtp = ({content, css,verifyNumber, service, moduleData, tat, nextPage, setNumber}) => {
    const router = useRouter()
    const [mobileNumber, setMobileNumber] = useState(0)
    const [getMobileNumber, setGetMobileNumber] = useState(0)
    const [activeBorder, setActiveBorder] = useState('')

    function onlyNumberInput()
    {
            var key = event.which || event.keyCode;
            if (key && (key <= 47 || key >= 58) && key != 8) {
                event.preventDefault();
            }
    }
    useEffect(() => {
        setNumber(getMobileNumber)
        setMobileNumber(getMobileNumber)
        
        
    })



    return (
        <>
            <div className='container-fluid'>
                
                <div>Enter the OTP that you received</div>
                <div className="row">
                    <input type="text" id="otp1" className="fs-28 rounded border-dark font-success col-md-6 height-66 text-center" maxLength={6} onChange={(e)=>setGetMobileNumber(e.target.value)}
                    onKeyDown={onlyNumberInput}/>
                </div>
            </div>
        </>
    )
}

export default VerifyOtp