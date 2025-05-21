'use client'

import React, { useEffect } from 'react'
import { RxCheck } from "react-icons/rx";
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import Link from 'next/link';
export const Reedem = () => {
const searchParams = useSearchParams();

  const offer = useMemo(() => {
    const data = searchParams.get('data');
    if (!data) return null;

    try {
      const decoded = JSON.parse(atob(decodeURIComponent(data)));
      return decoded;
    } catch (error) {
      console.error('Invalid offer data:', error);
      return null;
    }
  }, [searchParams]);

  console.log("---offer--",offer)


    //  useEffect(() => {
    //   const timer = setTimeout(() => {
    //     window.location.href = "https://top5shots.com/";
    //   }, 3000);

    //   return () => clearTimeout(timer); // cleanup
    // }, []);



    //  const [redirectUrl, setRedirectUrl] = useState(null);

    //   useEffect(() => {
    //     // Simulate API call to get the URL

        
    //     const fetchRedirectUrl = async () => {
    //       try {
    //         // Example: Replace with your actual API call
    //         const response = await fetch('/api/get-redirect-url'); 
    //         const data = await response.json();
    //         setRedirectUrl(data.url); // assume response is { url: "https://top5shots.com/" }
    //       } catch (error) {
    //         console.error('Failed to fetch redirect URL:', error);
    //       }
    //     };

    //     fetchRedirectUrl();
    //   }, []);

    //   useEffect(() => {
    //     if (redirectUrl) {
    //       const timer = setTimeout(() => {
    //         window.location.href = redirectUrl;
    //       }, 3000);

    //       return () => clearTimeout(timer); // cleanup
    //     }
    //   }, [redirectUrl]);



       useEffect(() => {
        if (offer) {
          const timer = setTimeout(() => {
            window.location.href = offer?.website;
          }, 3000);

          return () => clearTimeout(timer); // cleanup
        }
      }, [offer]);


    return (
        <div className='h-[90vh] bg-gradient-to-b from-blue-500 to-purple-600 '>

            <h1 className=' text-white text-[40px] text-center pt-[40px] pb-[40px]'>Coupon Culture</h1>
            <div className='flex justify-center items-center'>

                <div className=' bg-[white] w-[500px] h-[400px] rounded-sm flex flex-col  item-center gap-[20px]  p-[20px]'>
                    <div className='flex justify-center items-center w-[40px] h-[40px] rounded-full bg-yellow-500 mx-auto' >
                        <RxCheck />
                    </div>

                    <div className=''>
                        <p className='text-[25px] text-black text-center'>Coupon Code Copied Successfully</p>
                    </div>

                    <div className='w-[70%] mx-auto border border-dotted border-blue-500 p-[10px] bg-blue-100'>
                        <p className=' text-center text-blue-400'>{offer?.code}</p>
                    </div>


                    <p className='text-center '>Pleas Wait while we are redirecting you to the offer page</p>

                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                            <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                            <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                            <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></span>
                        </div>
                    </div>

                    <div className='w-[80%] mx-auto flex gap-[20px] justify-center items-center'>
                        <p className='text-red-400'>Not Redirection ?</p>
                        
                       <Link href={offer?.website}>
                         <button className='rounded-sm bg-blue-500 text-white p-[10px]'>Go To Offer Page</button>
                       </Link> 
                    </div>

                </div>

            </div>

        </div>
    )
}
