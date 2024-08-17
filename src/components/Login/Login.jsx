import { NavLink, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";
import Swal from "sweetalert2";

const Login = () => {
    const auth=getAuth(app)
    const navigate=useNavigate();
    const handleLogin=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password)
        // Login system
        signInWithEmailAndPassword(auth,email,password)
        .then(res=>{
            console.log(res.user);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully login",
                showConfirmButton: false,
                timer: 1500
              });
            //   navigate
            navigate('/dummy')
        })
        .catch(error=>{
            console.log(error.message);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text:`${error.message}`,
              });
        })
    }
    return (
        <div className="hero min-h-screen flex flex-row-reverse justify-evenly bg-blue-50">
            <div className="card shrink-0 w-full max-w-sm shadow-4xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p className="text-center">New to our website?please <NavLink to="/register"><span className="font-bold text-green-700 border-b-4">Register</span></NavLink></p>
                </form>
                <div className="flex justify-center items-center p-3">
                    <SocialLogin></SocialLogin>
                </div>

            </div>
            <div>
                <img className="md:h-[400px] md:w-[400px]" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAABAAIDBgQFBwj/xABUEAABAgQEAwMHBAwLBQkAAAABAgMABBEhBRITMQZBUQciYRQjMjNxgZFCUqHBCBYkNkN0lLGywtHSFRc0VVZigpOi4fAlU2NzozVFRnJ1g5Kz8f/EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAnEQACAgEEAQQBBQAAAAAAAAAAAQIRAwQSITFREyJBYQUjQoGR8P/aAAwDAQACEQMRAD8A7Pm8pOSmWnOCFVOiR4VhKOp6kXF+kIkFJQPWi1f84AWbQOTfMa16QKeT0VXMTaCClsZXTc3FbwE+bqp41BsK3gAlOQ69a+EDLq+d2y8usMKsis59WeVfqhJLi1ZkijY3pb6IAk/lP9WkAq1fM7Ec4S/OeoNKb0tBJSoZEen12gBZtLzVK15wv5NWvezQAQkZHB5zlz+mCnzfrr12reAFl0fO1zV5QgM/ntiOUADIrOsktnat/ohEEq1ATp8xX6oAWXym/o5bQc2sSgWpDHTnBLVqbitIaXC5lSyBmvWlrQBLmp5gfGAT5P3aZs3OCMoTpk+cNq0hJIbBDlzyreABTycZxevKEU0o8PbSEmrd3vR5VNYVDmK60b6f5QAaa4DhOWnKBXyhOX0aH2wlAuEFo93nSEshyzQum5O0ALNm8x7qwgrSAa3J5wiU5ctQHPbT6Yj1cgKVjM51N/ZAEtpYV3rAy5DrVrW9IDdUDz9ydq3ggFJzqu2b79fCAFl1vO7U5QfKv6v0wCCtWZuyPA0+iHarI+SP/jAAUA3di6j74RCQnOPWwMvkwr6VbdIVKDXA8SIAQoQC/TNsIjC3HAoOgbHLyiTKHwVqNALUhtEvpoapCbwAxCPOZTdpJtagES95JypNUHe3xvDCvN5lNAmBnLdG96xNEWSK7nqCDXfnBIAGZHrD7/bESvMC3OKxxRx7w9wm+lvEZxaptSc3k0u3nXQ8zcAe8xNAtgCVDM56w+72Qk+c9fbpyiq8Lce8PcWPlrDptSZtKc5ln29NwjqLkK9xMWcr165u7lva8RRI6qqkO+rG31Qxa1BQbaHmz+aCXkrGmbdOtoZnQ35lNKG2bNCiLAsFChpVNSa0GbnE1MozsgBXMC8RBxMvUDKSb7wcwaOcKF+VYULRKACM59b0rASA4CX7KG3KIyoEaxIzC9KwM+v3ioCnjChZMnvkh70RtakCpzFH4Lr4e2Ig4l3uqUmg51hVvpi42tChZKolshLXoc//ANhq1JQKy91VoqIyrSOUbHnAppKzCh5dInaLHK7yNT8JSovW/O0PbSFDM4KL3FTQmGpTlOtvXkeUEHWOdVlDYRDRI9NXPX2ptyhAlSsq/V8rQh907mlOkIKznQpQC1fZEARJSrK16BubfGHabHX6YbXR81Svj7YPko+efhAASCyKunNX3wgDXVJ83vSEmpPn9vGFfN/wfqgBEF05m7JFjDHFaxAaFKb8oe4Sn1Xo0vSNFxliqsD4WxPE5VbSHZZhSm9Q0Tn2T9JFue0WSIJcT4kwPC3hKYli8lJzKhUIefShQHXeoHjGfLTMu+w2uXfafQ6nM242oKSodQRvHlbAuHeION52efw9Hlsyghcyt10JJKiaXPsMXjs64E4twrjHDn8TlFykpKlbqguZSsXSUnKlKjckiFijuMw4qVl3nSnOpKCoJ3qQK0jyvhuEYpxnjc+piYlvLVLU8sTT+QrBV3qE2OUXPgLVj1XmS2krfWEIQCTmsABuTHD+J+yqaxIv4pw5LpDU3MqdbYmHcim2iBSgI+UcyrkEDKOsGEUPEZjDcGxyQ+1d1592QI1J+pHlTua5Qn5KOQ6i5junaRxLiMjhWESOCeaxXGXUsNuGnmgQKkeNVARTOBex/EGcUZnuJCyiXYWFol2l51LUDXvHYD2VrFn7UQgcV8CZNzif6zcQB7HY+lbaVz3FeOrmSPOLamAEk86AgmkSHsckt/tm4hJ/GU/ux02EYgk8xcU4HO8NcbDCcQxXGBhClIUmcSta16RFzQWqDUbctodJM8PuNrM7xXxM2sOrCUolnCCgKIQr2lND749MgZYINYA8yYgzgDcjMLkOK+JnZlLai02uWWErVSwJraNl2W8GYjxe3OTWKYti8nKskIbLT5Clr3PpVsBSPRFYQ2gDmn8Tcl/SbiH8pT+7Gux3s7xLhjDnsZ4Z4lxVybk0l1TU26FIcSLkcht1jrwjU8Wfexi/4m7+iYA13BmPJ4h4Xw/FlN5FTLZK0jZKgopUPZmSYzhNttrugqHtirdi+X+LXCM2/n6f3y43q/SPtjowxUuzKcqNNxTxijB2XnW8raWhVxargeAHMxTOGu1aZxLEltPqYaatkDywlThJpQeMZXEODt4zMHD551TTLk0guKG+TMK090Y3EPZjhOErlJ/BplbL7M2lJacXqhYTcm+x2t4x15MaxzjCMeGYwlui5N9HUpbGmZ2XQ4y2pNeh2PSNhLzCZlvIgELHWKdw0lSZVaiDlU53fri0YZ6pZT6dRSMNTghjb2l8WRyM4KDY013WYboO/O+mHJy087TU8YaDMcwY4zoCkmYsqw8IRUSdCltqwlEP91G46wagp0flbVgBjh0TppuFXPtjQccYAniDheewhK8rkwkaaq2C0kKTXwqKe+N8To1S5U16Rqn8ekZJakKcLqhvpgmnvjSMW1wQk30VPsc4ZOBYJN+XMrk8SccyzBzg5koWSk9KUJHsi7hDvlLKn1ee01KcFbAWAp4VFffGFhc9J4nrJZcU2+lxRy0FSg0tQ1BB/wBUiKSxSU11tzM0kvJORSiKJOUmyaWA8PiTSIUJX0W2s3dndxSl6QArOdLYD5UCofSC2RTexhKVmTkAuOcTRRhKiijdK+Mc67UEBHFnAlD/AN5frIjoiVBAyK3Mc67T0lPFfAmb+cv1kRD6COqwCYMAxQsaTjLiFnhjhycxZ9OfRTRCPnrNgPjFDwrgTGuLJVGLcZ49PtuzI1ESEs4W22EnYEdaf51jZdsRTinD/wDBcqpLsymZaW40D8kEE190WZviXDAhoeVAUSARlMaLFkatRZRzivkobjmOdmOMSAm8VmMV4annxLkzKszkus7UPSxttYx1pJBTUGo6xzjtUnZbH+EXJHC3A/NGYaWlGxoFCp+FYu+BT0vN4eyGHQsttpQscwaCIlinFW0SpxfTNlGp4s+9jFvxN39ExthGp4s+9jFvxN39ExQsVLsYSF9muDlXyS+P+ssxvF7mo50jRdjKVK7NsIy7DXr/AHy4sbKssxmzBBuAVCoryjpwuk2Y5O0anEcKYnVJczablKZhz8Igfwx+b0fLZvOlpIQgJFKJ6RviucElRM7JpxDTbSuYLJ0lKCqromtbitL2qN4ep51T7Zl35ZtkOrL6FtlSnE5e6EnlenW1Yl5HKUZO+OuSY+2Liq5+jCZbSwhLTCQEIFKCNnhfcbcWLkERjBx8oVnfYMuWEBDAR30uV7xKq3FKWpyjJwrupWs7AxOSblBtlYx2ypGcE6o1VWI2ENE0rmkQSkuq1E7DeHeUo6GOQ3Aqguxv4QrZK/hfrhKHk92zWtqGEUjLq7r3pAFf4pxBUtKJYSaTD1faEjc/VFMUqgqbHbxqTQX98WbHcJnsRUcTljqJVbQpcIFQCnrXenjFVUSuYCNksmrgIvm5J9o3PS0elpnHbx2dOKkuCfZWYEhQ2ItT/VYFABTlSkKhG8ImgraOlJLk2pG/4VnnkTJlCsltYJQOhEW1QSQSimpFEwSWnkTAn0tKMu08BnqAKUFfGlzF0S6oqCpaWfcWflKTkQPeqhPuBjztRt38HHmS3cE6aUqr0x1jnHafm+2zgTP/ADlt/aRF9flXlqTMzj6GS2lWVtpZubfKIFbDoKVO8c54/Do4n4FLq1Lz4mFgEk5bt2uSY52+DI66doiU5UDJS8SnaBlA2EVLHMOIhTHZ01/C/UIrWPY/I4G20ZvVUXahKGhUmm5udrxZeJP+357/AJn1CKD2hyDs5h0uZaVW/MIdoFIBJSkg1/MI+jcpQ0ylDukeYkpZakWWSmmp2UamZdWZp1OZJpF37Pt53+x9cUXC2ES+HSzTTRaQltICDum20Xrs93nf7H1xTWtvTW/oYK9XguQ2jVcWfexi34m7+iY2o2jVcWfexi34m7+iY+fPTKj2M5v4tsHy/wDHr/fLizOypDiy0pJvWh5RWexlZR2bYOAK11z/ANZYi6qSGrpFTTc3jWE3HozkrNWZJ1VMzid6gA3hyZNwKyqUlJABpmjZZQBrA0UbkQwDO+Vm3cHMdT74v60iuyJheROAgVQn2kxnScuqXBS5QoVvTaHJOsCF1FPdEiFFfmjTKOfOKzySaotGKXITmBAa9XzpD6Mf1YYVFo6abpP0QRLNjmfjGJoBI8nNVXra0KlFax9HeEnMgkv+jy5wu9mr+CgDHw95DaUSjtULR3WyRZwDYpPs3G4p0oTXeJeHnErcnpFK3EqJU8zSqvFSeviPh0NmmWUPoypQFN/KEU+U4jn5J1balJmWUqICXD3gK/O/bG+FTu4GmPd+00SSk0VmGXmaiAlxBAGZJVtSvOLdLSmF4855dKN5JlC0rel1LoDQ1uB1pSvtiDizEmnmWJRoJTnJW8LV7pIA+IJ90dUdQ3JRo2WW3SRt+EFUwVOYgUcUIzXMQz92SSHeSnSfNp9/yvd7yI0vC8uwvC6vtJc84aBfeGw5bRvBUWX6rl9UceVe9nNN+5kKZRLh1XjrO/OUAaeAHKKB2orC+LOBP/U/1kR0Ug1GQdyOddqBQeLOBMn85frIirXBU6pAMGMRycShZTkJp4xVRb6DaXZTsf4cxOYxaYflmUutOqCgQsAiwFDX2RgDhfGgLSf/AFUfti/eWp/3Z+MLy5P+7Pxj0Ia3URiopI5ngxt3ZQPtXxnfyOh/5qP2xZ+D8JmsMTMqm0pStwpokKBsPZ7Y3HlyfmH4wfLk/wC7PximbVZ80NkkTDFCDtGWI1XFf3sYt+Ju/omM5iYDqiAgiMHiv72MW/E3f0THE1R0op3YyXE9nGEd8UUX6DLt51f13i6hLrIqpxO42T4ftim9jBR/FthAXv5+n98uLqkU9d+2LIgjyOg6ucUJBpl5UpT43gobKlF4rzGgrUU2+qHioVf1X1QlVr3PQ5xJAVDXsk0pDkrzjRFa7VhiqH1Pv5RIimTuesiGSOCtLzRBJ6wPJlfPEEFIFHqanKG5ZjqfiIoSFJ1rODa/SEDVWlTzYsDBKvKO6BSnOEVAjRAvtWAAols5EXBvHn7jPjV7BuL8Uw+VlGnJZh7KkqVQ1pe9+Zj0DmEsMqzUUzE9I8e8STC5ziPE5hSs5cmnCD1GY0+iLwnKDtEptdFvb7UJ1moaw5pAJqQVIXf+0gxDM9pmIPEqMkzqEAFa15thQWAAp4RS0M1zVSTlFTTl7fiPjAdyZKCldxE+rNOydzPTvZZiDmM8FSk5N5NVS3M2UUFcx+qkWwEqORXoxzvsHUX+Aw1X1c46APA0joubMdMcrQu+WZt8gJKVBKQcnOOddqKQnizgSn85frIjotclW96845z2oIKOLOBKmv8AtL9ZEQ+gdVjVuBaZhSsh9LpGzO0Ybk4UuFKWwQOdYY7+CJ1XJEXHNbPpG3hAS44Hi5pkk2pSHuTy0nLpjN0rDUzj6iKNJ36xpz4K8eQNrWlaiWlHP1G0Jpa0hYDaqG9SIlE4skgNCo3vCE44a0bFvGFPwP5GyKVBwkpI7vMRDxX97GLfibv6JjMlpnWUQU0tWMHitQ+1vFE1GZUq4lI6kpIAjOVuVF4tUVTsXSFdm2EVNKa//wBy4uiTqd1e3haOVcGNYo1wrhPD7TZQ8yHFO5F3OZxShU8hRQi24LjqmScPxZSm3EKol1e//lV+2Ol6Wahfz4+TH1o7q+C0VqS2QcmwMDMU91GxttCK0lAQlQoflcjEZWpIUgD0juOUc5qTKOldul94elIQjUT6ZiJNWBVdyekSpTp+eNx0irLIckBxOddlw3Xc6fRDsuqdQWA5dYPlI+afjFSRqiF2YqFc6Wg1TlyD1ohKo3dmhPMbwqCmcEanSAMDHZxGG4FPzcz+Cl1rJN6AAx5BbSbHvFZvm3vzj072sznknZ5jDqwQtxsMgeC1BP1x5cC1AHvEQB0ns44YOL8M8Wzymwr7iXLsX/CAan50t/THNnF5yDQC0eoeyzCP4I4Jw6VeRRUwgvv5gK5l3pHmziLD/wCCsdxHDwCBLTLjaQfmhRofhSJYO3fY+ulzhWdZQbtTlT4VTHUSaiibOeH0xx/7HZ1Qw3Gmkip1m1f4SI7AoUGYemaf5xZFWIFKUlKyc5jnPaeFjizgTP8Azl+siOip73eX6Y2Ec67Tyo8WcCZhT/af6yIPoI6odo1TqXddSkJVTwEbWGlI6bxEZbSWrNYQ8X8+kSodBQQ9Gul0uaZJVuKbRosV4knpXFH5aXaaKGjS6STt7YhTxPi6gkplWiF3TRtV/pjnlr8adNHZH8ZnlFS45LIhT6VKOke94QkF9IUNI97wisDirFVAkS7JpvRB8B18R8Y23DeNzWKTD7MyhtOmkKBQCOcTDW45y2pEZPx2bFBzdcfZg8Q4hPYWlvyejZcqkqKa0tGMxgGLYxpzGIzmVlYCh3sxp4AWEb3i6SM3g7mVNVtHUHu3+isR8GTvlWDNtqVVbByGvTl/rwj1VmccG+C5vk8vZ+pUmbHC8LlcLZ05ZFz6a1eko+JjFxrBJTFRVxOm+kUS8nenj1HhGvxrjvA8Hcn5Z99xc/J5R5Gls6jxWO6GwfSrWlRYQ3hHDcXcm3uIOI3lonJtsIaw9CvNybVahNOazzPujiWSaluvk6NsWqrg1U1h2MYCyt9qbBYFLoPU0FUn2xYOH51c7hzb0yBqkqSCB6VOcYHHk0dKXw9m63FaigOdLAfH80bnDJVMth7DBoFNop747Mst2GMpLlswgqyNLpGQnuA6w325xIjMO8uulEaaOettTaHtFR7ivVxxM6Bxqo5mq6fwh2dnp/hhqlFBCG7o6w4ss1uR8YqSNyiXOata9YWUDzwPjSEkFskvXFPbCykEuH1e9IA5f9kHOqRwdKtJISZieSlSeqUpUr8+WOH8LYYrG+I8OwxIqZmYSg2rQVqT8AY6h9kfNpcnsDlEKpkaddKAfnFIBp/ZP0xquwHBzOcUzeJKALchLEA1uHHO6P8ACF/RAHf0pQhtMq0AlCEhI8AI829tuHeQdoE24KlM22h8WtWmU/o/THpStRkSO9yNI4t9kRIU/gjEeffYUab/AChf3GLMhEP2Os1pzuMskW0m1/SRHbqZaub15RwX7Hp4I4lxBpX4SVH0GO9UIOdXonYRKIYaZ/OVpTlHOO1BZXxZwJUU/wBpfrIjo1M3eTZHMRzntj1JNXDfELbC3ZXCZ8LmQkeiklNCegqmntI6wfQR1SATFek+OuFpyXbfax7DkoWKgOTCUKHtBNRE324cMf0hwr8sb/bFCxpMWwnE1Y1NPy0prNuG3eTcEDqYiRh2Ooplw61swzI71BQV73IRvxxfwwP/ABDhX5Y3+2D9uHDH9IcK/LG/2xyPSRbbtnoL8jNRUXFOv95K41hmPMk5JEgqUVHvIvWlRvt3RG24Tw2dk5yZdnGC0FpAFVA1NT0MZp4w4Y/pDhX5Y3+2F9t/DH9IcK/LG/2xMNLGMt1srl188kHDalfg3ShUEG9eUUSXUrhjiFTbgIk3tjyCTsfdFh+3Dhj+kOFfljf7Yq3aBxpwozgy3RicrOTKT5lqVdS4on3bD2x6WnyKLcZ9Ps8zJBtJrtF1ewnDZyelsSelJd2bYSQxMKSCpIPQxkzUy1KMLffWEoQMyieUUbAuIZrCmmmcQl39BTYW2laSFoBFhf8ANy2hTU5PcUTYaZQWpRs35geJPM9BGq0ct1t+3yU9e11ySYOF41jruKTCTosmqa7V+Sn6/hFuy6nf6RjyEm1h8uhpoUZT7yrxMZHpd5FkiM82RTlx0ui2OG1c9i9fcDLSJEKzjRpS+9YZTVs1brElQpGRA84LVpGDNQ5tLzVK151geS/1/ogpIQMrl1nnDdJ7r/iipIUlTnr7DkDaESoKyk+bhV8oFCKU5i8KtfMUttWAOa9pmCM4lj0u4rh6YxHLKJTrMoqB31nLWouN/wC1A4BM3gc4JGU4cnZSTmnBqqU0KJVSgUTX2R0sq0DkAzZr70pBI8noqubNa9o2WZ7NlL+inpq7G5QG8yfWdPGKt2hyaJ3A2kuYWrEHNcENIbCymxveLMs5TrIJP9Wm5gpQp2riyaD5PWkZxk4uyzVqjkODszeATflmH8KTbTlKKAlkjOOYrWOuSyi822txCm0KSDlVYpttEyT5RzKadDACtTzNKAcxGmXM8rtlYwUegKFFBLd2zuYZMMNOMrZ00PNOApcQoZgoHcEGJM2l5kCoPOCfufbvV91IysuVJ/s04McBWMAl9RRqUpUsAe4GGjsw4LKP+w2QvoXF/vRbiA0NUGpPL2wgnN5+lx8mIBUW+zDgqh1MDZH/ALi/3oCOzDgwqJXgTIRy84v96LYtQfryKbWvDQVzJCa5QL1/ygCqfxY8GZ7YC1k66i/3oK+zDgzMA3gTJHXUX+9FvzZfM0ttWDXQIQO9mvAFQc7MOC8vmsDYJ/5i/wB6MvDOAuFMKfRNyOCSqJpF0KVVZSeoCiaHxix5RL98AmvLaFltr1vvSAMeZkZSeayT7CHOaQoXHv5Q6WlmWWg0lpDTSfRSBSJgNfv+jltTeED5R3SMtOe8TudURtQAmq8qgA0NjCUCFUaFU9YRWK6B2HMf68IjzLRmaB325UhZJMoZLs3rvSEQAnMmmrTbxhoBlkj5VbdIdlyDWFyb09sQBJAUM7nrOkN1Hxah+EOCdUaptTlA8qPzR8YAKjrDK33aXgVGXR+XtWCqif5Pc86QjQIqPW/TADcwYGVdTU1rEdForqnuqFLXiYAEVepn5V6QE3/lFhyrADEIKVF0DK3vQm8Py5znTZKeXWEKlVFV0R1EEkhVG/V8+kAJXn/V92m8IqDidJNldfZCVank9+tIRygZm6avh9MAIENjSVdR5xi4iXZfD5osvBl7RVpulOYINNyL7eyMoZSmrnrPHeEmp/lFvm1tAFVlccxBp6UbRLKfbcXlU684k56rocigE2AuO6SaUtvD2sem1MMzDyWSXWwrTQ2sFC6iraq7kAm9tthFmBUSdX1Z+HhCJUFAINWuu8AVr+FsSXOSjRk2QH1rvdNEheUCpVdVO9tzpTnE7uMPNP4wxmCn2phAl0rbIAa0WiVW9IBSlnfkRG+UaEeT7c6CogkgJqyTm6C/0QBV3OIZ5CWkLaYTnW22DprrMZ3SjOg/JAABoak15c83CMQxBT7CJtltLLiFAHKrOClKTVRNr1IpQbe6NouVl3XW5l5pCppA7ilC4PKJk0UDr+lXu1gBJBZ7zlCOm8LL3tb5O9IKa1OtXLyrABUVEfgfqgAkapzIsBuIY6vWGVvu0ofaPCHGoI0PR506wlZU+ouvwvAEVlDTuXNtvrh6KNAIXc8gNoeaBNU+t8N684Qy0q5TU8YASfMes71doASUHWJqg3p7YSb/AMo91bQgTmov1XK1qcoARSXSHEmiRyh3lDZ+T9ENJUFUa9XztaHBLHIp+MABQ0BVNybXgZRl1vlb0hJBYOZZqDCoc2tXub0gAgB8ZySKWtAB8o7qrAXtCKS6cyBQCxBgqOvQIsRAACsytCgoLV5wirSUGgKg84JOYaI9LrCCg2NJV1HbwgBK+5/RvXrCKQ2NYVJPI+MJP3P6y9YASWzqq9E8oAITqjVNiOQgJ+6fStl6QSkuK1UmiRCV90ertTfxgAA6p0jYDnztCKihWiBUdTBJDidNNlCEkhI0jdXWAAo+T2TfNe8Ep0e+LnakBJ0Khd81xSEElpedZzDaADlqNYk13pCSNeqlWpaARVRdHo706wSNZQUg5QLUgABWuShVABzELN3tHltWCo6wyosRAJGXRp3tqwAidA5U3re8FQ0BmF81jWAghkZF3JvCQksd5ZzA7CACRlTrj0t6e2EEh4aijQ+EAApVrE9zekIpLpDiPR6QAUnyiyrUvaAFZzo0okWr7IKjr2btSFmCxpJsoWr7IABVpHSFwecO8lT84wAoNDTVdRhvk6/nD4wB/9k=" alt="" />
            </div>

        </div>
    );
};

export default Login;