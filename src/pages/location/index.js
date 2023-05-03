import BannerLogo from '@/components/layout/banner/bannerLogo';
import BannerText from '@/components/layout/banner/bannerText';
import SocialMedia from '@/components/layout/buttons/socialmedia';
import Locations from '@/components/layout/option/location'
const Location = () => {

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
                        <div>Select Locker Location:</div>
                            <Locations />
                        </div>
                </div>
              
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className="container-fluid">
                           
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