/**
 * @description 自动播放音乐
 */
import { showFailToast } from 'vant'
const wx = window.wx

/**
 * @description 音乐播放工具类
 * @example
 * const playMusic = new PlayMusic();
 *
 * @param {PlayMusicParams} [options] - 可选的参数。
 * @param {boolean} [options.isAutoPlay] - 默认关闭 是否自动播放。
 * @param {string} [options.url] - 音乐链接。
 */
class PlayMusic {
  private isAutoPlay: boolean
  private url: string
  constructor({ isAutoPlay = false, url = '' } = {}) {
    this.isAutoPlay = isAutoPlay
    this.url = url
    this._init()
  }
  private audioContext = new (window.AudioContext ||
    window.webkitAudioContext ||
    window.mozAudioContext)()
  private sourceNode: AudioBufferSourceNode | null = null
  private buffer: AudioBuffer | null = null
  private playState = false

  private _init() {
    if (this.url == '') {
      showFailToast('音频链接错误')
      return
    }
    this.loadMusic(this.url)
  }

  public start() {
    console.log('start')
    if (!this.playState) {
      if (this.sourceNode) this.sourceNode.start(0)
      this.playState = true
    }
  }
  public stop() {
    if (this.playState) {
      if (this.sourceNode) this.sourceNode.stop()
      this.playState = false
    }
  }
  public destroy() {
    if (this.sourceNode) {
      this.sourceNode.stop()
    }
    this.sourceNode = null
    this.buffer = null
    this.playState = false
  }

  public togglePlayState() {
    if (this.playState) {
      this.stop()
    } else {
      this.start()
    }
  }
  private _initSourceNode() {
    console.log('_initSourceNode')
    const audioContext = this.audioContext
    audioContext.resume()
    const _sourceNode = audioContext.createBufferSource()
    _sourceNode.buffer = this.buffer
    _sourceNode.loop = true
    _sourceNode.connect(audioContext.destination)
    this.sourceNode = _sourceNode
  }
  /**
   *  @description 加载音频,当音频存在时,会先销毁音频
   *
   *  @param {string} url - 音频链接
   *  @param {boolean} isAutoPlay - 是否自动播放
   */
  public async loadMusic(url: string, isAutoPlay: boolean = this.isAutoPlay) {
    if (this.playState) this.destroy()
    try {
      const response = await fetch(url)
      const arrayBuffer = await response.arrayBuffer()
      this.buffer = await this.audioContext.decodeAudioData(arrayBuffer)
      wx.getNetworkType({
        success: (res) => {
          console.log(res)
          this._initSourceNode()
          if (isAutoPlay) {
            this.start()
          }
        }
      })
    } catch (error) {
      showFailToast('音频加载失败')
      throw new Error('音频加载失败')
    }
  }
}
export default PlayMusic
