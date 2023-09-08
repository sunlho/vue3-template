/**
 * @description 自动播放音乐
 */
import { showFailToast } from "vant"
const wx = window.wx

type PlayMusicParams = {
  isAutoPlay?: boolean
  url?: string
}

/**
 * @description 音乐播放工具类
 * @example
 * const playMusic = new PlayMusic();
 *
 * @param {PlayMusicParams} [options] - 可选的参数。
 * @param {boolean} [options.isAutoPlay] - 默认关闭 是否自动播放。
 * @param {string} [options.url] - 音乐链接。
 *
 * @tip 1. 微信浏览器下,需要确保正确配置微信JsApi
 */
class PlayMusic {
  private isAutoPlay: boolean
  private url: string
  private audioContext = new (window.AudioContext ||
    window.webkitAudioContext ||
    window.mozAudioContext)()
  private sourceNode: AudioBufferSourceNode | null = null
  private buffer: AudioBuffer | null = null
  private playState = ref(false)
  private firstPlay = true

  constructor({ isAutoPlay = false, url = "" }: PlayMusicParams = {}) {
    this.isAutoPlay = isAutoPlay
    this.url = url
    this._init()
  }

  private _init() {
    if (this.url == "") {
      showFailToast("音频链接错误")
      return
    }
    this.loadMusic(this.url)
  }

  public state(): Ref<boolean> {
    return this.playState
  }

  /**
   * @description 切换音乐播放状态
   * @returns {boolean} - 返回音乐播放状态
   */
  public toggle(): boolean {
    if (this.playState.value) {
      this.stop()
    } else {
      this.start()
    }
    return this.playState.value
  }

  public start() {
    if (!this.playState.value) {
      if (this.firstPlay) {
        this.sourceNode?.start(0)
        this.firstPlay = false
        this.playState.value = true
        return
      }
      this.audioContext.resume()
      this.playState.value = true
    }
  }

  public stop() {
    if (this.playState.value) {
      this.playState.value = false
      this.audioContext.suspend()
    }
  }

  /**
   *  摧毁音频
   *  @tip 当音频被销毁时,音频的所有状态会被重置,需要手动调用 loadMusic 方法
   */
  public destroy() {
    if (this.sourceNode) this.sourceNode.stop()
    this.audioContext.close()
    this.sourceNode = null
    this.buffer = null
    this.playState.value = false
  }

  /**
   *  @description 加载音频,当音频存在时,会先销毁音频
   *
   *  @param {string} url - 音频链接
   *  @param {boolean} isAutoPlay - 是否自动播放
   */
  public async loadMusic(url: string, isAutoPlay: boolean = this.isAutoPlay) {
    if (this.playState.value) this.destroy()
    try {
      const response = await fetch(url)
      const arrayBuffer = await response.arrayBuffer()
      this.buffer = await this.audioContext.decodeAudioData(arrayBuffer)
      wx.getNetworkType({
        success: (res) => {
          this._initSourceNode()
          if (isAutoPlay) {
            console.log(res.networkType)
            this.start()
          }
        },
        fail: (err) => {
          console.log(err)
        },
      })
    } catch (error) {
      console.error(error)
      showFailToast("音频加载失败")
    }
  }

  private _initSourceNode() {
    this.sourceNode = null
    const audioContext = this.audioContext
    this.audioContext.resume()
    const _sourceNode = audioContext.createBufferSource()
    _sourceNode.buffer = this.buffer
    _sourceNode.loop = true
    _sourceNode.connect(audioContext.destination)
    this.sourceNode = _sourceNode
  }
}

export default PlayMusic
