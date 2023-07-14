import { onMounted, onUnmounted, ref } from "vue"
import { throttle } from 'underscore'

export default function useScroll(elRef) {
    let el = window
    const isReachBottom = ref(false)
    const clientHeight = ref(0)
    const scrollTop = ref(0)
    const scrollHeight = ref(0)
    // 节流的实现 throttle
    // 节流: n 秒内只运行一次，若在 n 秒内重复触发，只有一次生效
    // 防抖: n 秒后在执行该事件，若在 n 秒内被重复触发，则重新计时
    const scrollListenerHandler = throttle(() => {
        if(el === window){
            clientHeight.value = document.documentElement.clientHeight
            scrollTop.value = document.documentElement.scrollTop+5
            scrollHeight.value = document.documentElement.scrollHeight
        }else{
            clientHeight.value = el.clientHeight
            scrollTop.value = el.scrollTop+5
            scrollHeight.value = el.scrollHeight
        }
        // console.log(clientHeight,scrollTop,scrollHeight)
        if(clientHeight.value + scrollTop.value >= scrollHeight.value){
            isReachBottom.value = true
        }
    },100)
    onMounted (()=>{
        if(elRef) el = elRef.value
        el.addEventListener("scroll",scrollListenerHandler)
    })
    onUnmounted(()=>{
        window.removeEventListener("scroll",scrollListenerHandler)
    })
    return { isReachBottom,clientHeight,scrollTop,scrollHeight }
}