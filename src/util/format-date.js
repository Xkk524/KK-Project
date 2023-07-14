import dayjs from 'dayjs'

export function formatMountDay(date,formatStr = "MM月DD日"){
    return dayjs(date).format(formatStr)
}
// startDate 入住时间 endDate 离店时间
export function getDiffDays(startDate,endDate){
    return dayjs(endDate).diff(startDate,"day")
}