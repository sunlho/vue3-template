/**
 * @description 自动播放音乐
 */
import { showFailToast } from "vant"
const wx = window.wx

type PlayMusicParams = {
  loadAutoPlay?: boolean
  url?: string
}

/**
 * @description 音乐播放工具类
 * @example const playMusic = new PlayMusic();
 *
 * @param {PlayMusicParams} [options] - 可选的参数。
 * @param {boolean} [options.loadAutoPlay] - 默认关闭 微信环境加载是否自动播放。
 * @param {string} [options.url] - 音乐链接。
 *
 * @method toggle - 切换音乐播放状态
 * @method start - 开始播放音乐
 * @method stop - 暂停播放音乐
 * @method destroy - 摧毁音频
 * @method loadMusic - 加载音频
 *
 * @property {boolean} state - 音乐播放状态
 *
 * @tip 1. 微信浏览器下,需要确保正确配置微信JsApi
 */
class PlayMusic {
  private loadAutoPlay: boolean
  constructor({ loadAutoPlay = false, url = "" }: PlayMusicParams) {
    this.loadAutoPlay = loadAutoPlay
    if (this.loadAutoPlay && wx) this.wxAutoPlay(url)
  }

  private audioContext: AudioContext | null = null
  private sourceNode: AudioBufferSourceNode | null = null
  private buffer: AudioBuffer | null = null
  private playState = false
  private firstPlay = true
  private loaded = false

  get loadedState() {
    return this.loaded
  }
  get state() {
    return this.playState
  }

  /**
   * @description 切换音乐播放状态
   * @returns {boolean} - 返回音乐播放状态
   */
  public toggle(): boolean {
    if (this.playState) {
      this.stop()
    } else {
      this.start()
    }
    return this.playState
  }

  public start() {
    if (!this.playState) {
      if (this.firstPlay) {
        this.sourceNode?.start(0)
        this.firstPlay = false
        this.playState = true
        return
      }
      this.audioContext?.resume()
      this.playState = true
    }
  }
  public stop() {
    if (this.playState) {
      this.playState = false
      this.audioContext?.suspend()
    }
  }
  /**
   *  摧毁音频
   *  @tip 当音频被销毁时,音频的所有状态会被重置,需要手动调用 loadMusic 方法
   */
  public destroy() {
    if (this.sourceNode) this.sourceNode.stop()
    this.audioContext?.close()
    this.audioContext = null
    this.sourceNode = null
    this.buffer = null
    this.playState = false
    this.loaded = false
    this.firstPlay = true
  }

  private wxAutoPlay(url: string) {
    if (url == "") return showFailToast("音频链接错误")
    if (this.buffer || this.sourceNode || this.audioContext) this.destroy()
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(url)
        const arrayBuffer = await response.arrayBuffer()
        wx.getNetworkType({
          success: async (res) => {
            await this._initSourceNode(arrayBuffer)
            this.start()
            this.loaded = true
            resolve(true)
          },
          fail: (err) => {
            reject(err)
          },
        })
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   *  @description 加载音频,当音频存在时,会先销毁音频
   *
   *  @param {string} url - 音频链接
   *  @param {boolean} isAutoPlay - 是否自动播放
   */
  public async loadMusic(url: string, isAutoPlay: boolean = false) {
    if (url == "") return showFailToast("音频链接错误")
    if (this.buffer || this.sourceNode || this.audioContext) this.destroy()
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(url)
        const arrayBuffer = await response.arrayBuffer()
        await this._initSourceNode(arrayBuffer)
        if (isAutoPlay) this.start()
        this.loaded = true
        resolve(true)
      } catch (error) {
        reject(error)
      }
    })
  }
  private async _initSourceNode(arrayBuffer: ArrayBuffer) {
    this.audioContext = new (window.AudioContext ||
      //@ts-ignore
      window.webkitAudioContext ||
      //@ts-ignore
      window.mozAudioContext)()
    this.buffer = await this.audioContext.decodeAudioData(arrayBuffer)
    this.sourceNode = null
    const audioContext = this.audioContext
    this.audioContext?.resume()
    const _sourceNode = audioContext.createBufferSource()
    _sourceNode.buffer = this.buffer
    _sourceNode.loop = true
    _sourceNode.connect(audioContext.destination)
    this.sourceNode = _sourceNode
  }
}

export default PlayMusic
