import { useState } from 'react';
import { useRouter } from 'next/router';
import BannerLogo from '@/components/layout/banner/bannerLogo';
import BannerText from '@/components/layout/banner/bannerText';
import KeepDuration from '../../../utils/keep_duration'
const DoorRate = () => {
    const [active, setActive] = useState(null)
    const router = useRouter()
    let moduleData = router.query.moduleData;
    const navPage = (e) => {
 
        router.push({
            pathname: '/keep/keeptype',
            query: {
              moduleData: moduleData,
              keepDuration: e,
    
    
            }
          },'/keep/keeptype')
    }
    return (
        <>
          <div className='container-fluid pt-5'>
            
                <div className='row'>
                    <div className='col-lg-5 left-panel align-self-center'>
                        {/* left */}
                        <div className='row'>
                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-6 col-6'><BannerText unboldChar="Please select" boldChar="Keep Duration" /></div>
                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-6 col-6'><BannerLogo/></div>
                        </div>
                    </div>
                    <div className='col-lg-7 right-panel'>
                        {/* right */}
                        <div className='row'>
                            <div className='col-lg-12'>
                                {
                                    KeepDuration.map((val) =>
                                        <li className={`row bg bg-white rounded align-items-center mb-2 border-shadow services px-3 ${active == val && 'active'}`} key={val.durationCode} onMouseLeave={()=> setActive(null)} onMouseEnter={()=> setActive(val)} onClick={() => navPage(val.durationCode)}>
                                            <div className="fs-28 col-lg-5 col-md-6 col-sm-6 col-6">
                                               <div>{val.durationName}</div>
                                                
                                                
                                            </div>
                                            <div className='text-left col-lg-4 col-md-3 col-sm-6 col-6'>
                                                <h2 className="fs-12 font-dark m-0 opacity-50">{val.durationDescription}</h2>
                                                <h2 className="fs-12 font-dark m-0 opacity-50">{val.durationDescription1}</h2>
                                                <h2 className="fs-12 font-dark m-0 opacity-50">{val.durationDescription2}</h2>
                                            </div>
                                            
                                        </li>
                                        
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DoorRate