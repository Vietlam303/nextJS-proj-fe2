'use client';

import { ShopPage } from './ShopPage';

// Animation variants
export const variants = {
   hidden: { opacity: 0 },
   show: {
      opacity: 1,
      transition: {
         staggerChildren: 0.3,
      },
   },
}
export const producti = {
   hidden: { opacity: 0, x: 50 },
   show: {
      opacity: 1,
      x: 0,
      transition: {
         duration: 1,
      }
   }
}
export const itop = {
   hidden: { opacity: 0, y: -30 },
   show: {
      opacity: 1,
      y: 0,
      transition: {
         duration: .4,
         ease: [.61, .61, .72, 1.59]
      }
   }
}
export const ibot = {
   hidden: { opacity: 0, y: 30 },
   show: {
      opacity: 1,
      y: 0,
      transition: {
         duration: .4,
         ease: [.61, .61, .72, 1.59]
      }
   }
}
export default ShopPage;
