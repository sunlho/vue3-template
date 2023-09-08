import { ref } from 'vue'
import { getDog } from '@/api/demo'
import CheckRepeatRequest from '@/hook/tools/useCheckRepeatRequest'

const checkRepeatRequest = new CheckRepeatRequest({
  isAutoComplete: false,
  isShowLoading: true
})

const url = ref('')
const handleGetDog = async () => {
  checkRepeatRequest.requests(async () => {
    const { message } = await getDog()
    url.value = message
  })
}
const handleComplete = () => {
  checkRepeatRequest.completeRequest()
}

export { url, handleGetDog, handleComplete }
