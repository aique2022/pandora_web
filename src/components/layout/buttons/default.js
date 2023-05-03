import { useRouter } from "next/router"
const Default = ({content, css,verifyNumber, service, moduleData, tat, nextPage, lockerLocation}) => {
    const router = useRouter()
    const getOTP = async () => {
        if(moduleData == '0001'){
            router.push({
                pathname: '/'+nextPage,
                query: {
                  mobilenumber: verifyNumber,
                  service: service,
                  moduleData: moduleData,
                  tat: tat,
                  lockerLocation: lockerLocation
                }
              },'/'+nextPage)
                try {
                    const response = await fetch (
                        'https://pandorav2-0-vlak.onrender.com/api/get/'+ verifyNumber, 
                        {
                            method: 'GET'
                        }
                    )
                    
                }
                catch (error) {
                    console.log(error)
                }
        }
       else {
            router.push({
            pathname: '/inputreceiver',
            query: {
              mobilenumber: verifyNumber,
              moduleData: moduleData,
              lockerLocation: lockerLocation,
              service: service
            }
          },'/inputreceiver')

          try {
            const response = await fetch (
                'https://pandorav2-0-vlak.onrender.com/api/get/'+ verifyNumber, 
                {
                    method: 'GET'
                }
            )
            
        }
        catch (error) {
            console.log(error)
        }
       }
    }


    return (
        <button className={css} onClick={()=>getOTP()}>{content} </button>
    )
}

export default Default