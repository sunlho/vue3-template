/**
 * @author Caspian Sun
 * @notice 使用前请确保已安装 vant 4.x 版本
 */
import { type } from 'os'
import { showLoadingToast, showFailToast, closeToast } from 'vant'

/**
 * @description 一个用于防止重复请求的工具类。
 * @example
 * const checkRepeatRequest = new CheckRepeatRequest();
 * checkRepeatRequest.requests(async () => {
 *   // 这里是你的请求代码
 * });
 *
 * @param {CheckRepeatRequestParams} [options] - 可选的参数。
 * @param {boolean} [options.isShowLoading] - 默认开启 是否显示 loading 提示。
 * @param {boolean} [options.isAutoComplete] -  默认开启 是否在请求完成后自动调用 completeRequest 方法。关闭此选项后，你需要手动调用 completeRequest 方法。
 * @param {string} [options.repeatRequestText] - "请勿重复请求" 重复请求时的提示文本。
 */
class CheckRepeatRequest {
  readonly isAutoComplete: boolean
  readonly isShowLoading: boolean
  readonly repeatRequestText: string
  constructor({
    isShowLoading = false,
    isAutoComplete = true,
    repeatRequestText = '请勿重复请求'
  }: CheckRepeatRequestParams = {}) {
    this.isShowLoading = isShowLoading
    this.isAutoComplete = isAutoComplete
    this.repeatRequestText = repeatRequestText
  }

  public async requests(F: () => Promise<void>) {
    if (!this.startRequest()) return
    await F()
    if (this.isAutoComplete) this.completeRequest()
  }

  public awaitState = true

  private startRequest() {
    if (!this.awaitState) {
      showFailToast(this.repeatRequestText)
      return false
    }
    if (this.isShowLoading) {
      showLoadingToast({ forbidClick: true, duration: 0 })
    }
    this.awaitState = false
    return true
  }

  public async completeRequest() {
    if (this.isShowLoading) {
      closeToast()
    }
    this.awaitState = true
  }
}
type CheckRepeatRequestParams = {
  isShowLoading?: boolean
  isAutoComplete?: boolean
  repeatRequestText?: string
}
export default CheckRepeatRequest
