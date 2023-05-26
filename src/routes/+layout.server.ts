import { ANALYTICS_ID, EMAIL_PUBLIC_KEY } from '$env/static/private'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = () => {
  return {
    analyticsId: ANALYTICS_ID,
    emailPublicKey: EMAIL_PUBLIC_KEY
  }
} 