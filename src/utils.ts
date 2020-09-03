import { format } from 'date-fns'

export const todayForFirebase = format(new Date(), 'yyyyMd')
export const todayStr = format(new Date(), 'yyyy/MM/dd')
