import { useRouter } from 'next/router';
import BannerLogo from '@/components/layout/banner/bannerLogo';
import BannerText from '@/components/layout/banner/bannerText';
import InputReceiverNumber from './inputReceiverNumber'
import Button from '@/components/layout/buttons/navloc'
import { useEffect, useState } from 'react';
import SocialMedia from '@/components/layout/buttons/socialmedia';
const InputReceiver = () => {
    const router = useRouter()
    const [setmobile, setMobile] = useState(0)
    const [active, setActive] = useState('')
    let mobile = router.query.mobilenumber;
    let module = router.query.moduleData;
    let service = router.query.service;
    useEffect(() => {
        
        if(setmobile.length > 10) {
            setActive(true)
        }
        else {
            setActive(false)
        }
    })
    return (

        <div className='container-fluid pt-5'>
        <div className='row'>
            <div className='col-lg-6 left-panel align-self-center'>
                {/* left */}
                <div className='row'>
                    
                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-6 col-6'><div className='text-danger pb-3'>{global.config.globals.loggedOutText}</div><BannerText unboldChar="Please enter recipient" boldChar="Contact number" /></div>
                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-6 col-6'><BannerLogo/></div>
                </div>
            </div>

            <div className='col-lg-6 right-panel'>
                {/* right */}
                
                <div className='row'>
                    <div className='col-lg-12'>
                        < InputReceiverNumber setNumber={setMobile}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-12'>
                            <Button verifyNumber={mobile} service={service} receiverNumber={setmobile} lockerLocation={location} nextPage='inputotp'  moduleData={module} content ={global.config.globals.verificationText} css={active? 'mt-3 col-lg-6 col-12 border border-success rounded bg-gradients py-3 px-3' : 'opacity-50 pe-none mt-3 col-lg-6 col-12 border border-success rounded bg-gradients py-3 px-3'} />
                     
                    </div>
                </div>
                <div className='row'>
                <div className='col-lg-6 pt-5'>
                            <div><span>OR LOGIN USING</span></div>
                           <SocialMedia />
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    )
}

export default InputReceiver