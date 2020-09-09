import { format } from 'date-fns'

export const todayForFirebase = format(new Date(), 'yyyyMMdd')
export const todayStr = format(new Date(), 'yyyy/MM/dd')
