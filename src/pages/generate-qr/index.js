
import QRCodeGenerator from '@/components/layout/qrgenerator';
import { useRouter } from 'next/router';


const GenerateQR = () => {

    const router = useRouter()
    let transNumber = router.query.transNumber;
    let qpin = router.query.qpin;
    let location = router.query.location;

    return (

        <div className='container-fluid pt-5 '>
            <div className="row">
                <QRCodeGenerator  quickpin={qpin}/><br/>
                <strong>Transaction #: {transNumber}</strong><br />
                Quickpin : {qpin}<br/>
                Location : {location}
            </div>
            <div className="row">
                <button className='mt-3 col-lg-6 col-12 border border-dark rounded bg-light py-3 px-3'> Add new transaction</button>
            </div>
            <div className="row">
                <button className="mt-3 col-lg-6 col-12 border border-success rounded bg-gradients py-3 px-3"> Home</button>
            </div>
        </div>        
    )
}

export default GenerateQR