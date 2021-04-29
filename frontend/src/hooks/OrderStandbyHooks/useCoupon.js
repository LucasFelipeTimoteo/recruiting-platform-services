import { useEffect, useState } from 'react'
import api from '../../services/api'

export default function useCoupon() {
  const [coupon, setCounpon] = useState('')

  useEffect(() => {
    const getCoupon = async () => {
      try {
        const response = await api.get('/coupon')
        const couponData = response.data
        const couponCode = couponData.code
        setCounpon(couponCode)
      } 
      catch (error) {
        console.log(error)
      }
    }

    getCoupon()
  }, [])

  return coupon
}
