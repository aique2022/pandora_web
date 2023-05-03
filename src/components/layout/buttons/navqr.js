import { useRouter } from "next/router"
import axios from 'axios'
const NavtoQR = ({content, css ,otp, service, verifyNumber, moduleData, tat, nextPage, lockerLocation,receiverNumber}) => {
    const router = useRouter()
    const verifyOTP = async () => {
        console.log(verifyNumber +'-'+ moduleData + '-'+receiverNumber)
        try {
            const response = await fetch (
                'https://pandorav2-0-vlak.onrender.com/api/get/'+ verifyNumber, 
                {
                    method: 'GET'
                }
            )
            router.push({
                pathname: '/inputotp',
                query: {
                  moduleData: moduleData,
                  mobilenumber: verifyNumber,
                  receiverNumber: receiverNumber,
                  lockerLocation: lockerLocation,
                  service: service,
                  tat: ''
                }
              },'/inputotp')
        }
        catch (error) {
            console.log(error)
        }
        /*
        try {
            axios.post('https://pandorav2-0-vlak.onrender.com/api/verify/otp/'+verifyNumber, {
                "mobileNumber": verifyNumber,
                "otp": otp
            }).then(res => {
                axios.post('https://pandora-dashboard.onrender.com/api/wash/post/trans',{
                    'booking_origin': '2',
                    'mobileNumber': verifyNumber,
                    'moduleData': moduleData,
                    'locData':  lockerLocation,
                    'serviceType': service,
                    'turnAroundTime' : tat,
                    'milestone': [{
                        'mlocData': lockerLocation
                    }]
          
                  }).then(res=> {
                    console.log(res.data.Data.qpin)

                    router.push({
                        pathname: '/generate-qr',
                        query: {
                          qpin: res.data.Data.qpin,
                          transNumber: res.data.Data.transNumber,
                          location: res.data.Data.locName
                        }
                      },'/generate-qr')
                  })
            })
            .catch(err => {
                console.log(err)
            })   
        }
        catch (error) {
            console.log(error)
        }
        */
    }


    return (
        <button className={css} onClick={() => verifyOTP()}>{content}</button>
    )
}

export default NavtoQR