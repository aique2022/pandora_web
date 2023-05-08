import { useEffect, useState } from 'react';
import BannerLogo from '@/components/layout/banner/bannerLogo';
import BannerText from '@/components/layout/banner/bannerText';
import SocialMedia from '@/components/layout/buttons/socialmedia';
import Locations from '@/components/layout/option/location'
import Button from '@/components/layout/buttons/navqr'
import { useRouter } from 'next/router';
const Location = () => {
    const [loc, setLockerLoc] = useState('0000')
    const [active, setActive] = useState('')
    const router = useRouter()
    let service = router.query.service;
    let tat = router.query.tat;
    let moduleData = router.query.moduleData;
    let mobilenumber = router.query.mobilenumber;
    let receiverNumber = router.query.receiverNumber
   
    useEffect(() => {
        if(loc == '0000') {
            setActive(false)
        }
        else {
            setActive(true)
        }
    })
    return (
        <>
        <div className='container-fluid pt-5'>
        <div className='row'>
            <div className='col-lg-6 left-panel align-self-center'>
                {/* left */}
                <div className='row'>
                 
                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-6 col-6'><div className='text-danger pb-3'>{global.config.globals.loggedOutText}</div><BannerText unboldChar="Please select " boldChar="Locker Location" /></div>
                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-6 col-6'><BannerLogo/></div>
                </div>
            </div>

            <div className='col-lg-6 right-panel'>
                {/* right */}
                <div className='row'>
                    <div className='col-lg-12'>
                        Module Data: {moduleData} <br />
                        Location : {loc} <br />
                        {service} <br />
                        {mobilenumber}<br/>
                        {receiverNumber}<br/>
                        {tat}
                        <div>Select Locker Location:</div>
                            <Locations setLocation={setLockerLoc}/>
                        </div>
                </div>
              
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className="container-fluid">
                        <Button verifyNumber={mobilenumber} receiverNumber = {receiverNumber} lockerLocation={loc} service={service} tat={tat} moduleData={moduleData} content ={global.config.globals.verificationText} css={active? 'mt-3 col-lg-6 col-12 border border-success rounded bg-gradients py-3 px-3' : 'opacity-50 pe-none mt-3 col-lg-6 col-12 border border-success rounded bg-gradients py-3 px-3'} />
                        </div>
                    </div>
                </div>
                <div className='row'>
                <div className='col-lg-6 pt-5'>
                        <div className="container-fluid">
                            <div><span>OR LOGIN USING</span></div>
                           
                           <SocialMedia />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Location