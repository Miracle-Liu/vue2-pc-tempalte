<template>
  <div class="upload-avatar">
    <div class="avatar" @click="uploadPhoto($event)">
      <div v-if="defaultPhoto" class="pic" :style="{'background-image':'url('+ defaultPhoto +')'}" />
      <div v-else class="bg-icon">
        <slot />
      </div>
      <div class="mask">
        <i class="iconfont icon-paizhao-" />
      </div>
    </div>
    <input v-show="false" ref="file_input_file" type="file" class="file_input_file" accept="image/*" @change="uploadFileChange()">
  </div>
</template>

<script>
import * as tus from 'tus-js-client'
export default {
  props: {
    callback: {
      type: Function,
      default: () => {}
    },
    defaultAvatar: {
      type: String,
      default: ''
    }},
  data() {
    return {
      fileInputDom: null,
      defaultPhoto: ''
    }
  },
  created() {
    if (this.defaultAvatar) {
      this.defaultPhoto = this.defaultAvatar
    }
  },
  methods: {
    // 上传照片
    uploadPhoto(ev) {
      // eslint-disable-next-line no-undef
      this.fileInputDom = $(ev.target).parents('.upload-avatar').find('.file_input_file')
      this.fileInputDom.click()
    },
    // 限制上传文件类型
    uploadFileChange() {
      if (event.target.files[0].size / 1024 <= 500) {
        this.uploadFileRequest(event.target.files[0])
        this.fileInputDom.val('')
      } else {
        this.$message.error('上传头像图片大小不能超过 500kB!')
      }
    },
    // 上传文件请求
    uploadFileRequest(file) {
      // var reg = /\//
      var upload = new tus.Upload(file, {
        endpoint: window.situoyun.env.BASE_STATIC_FILE_API + '/upload/',
        withCredentials: false,
        chunkSize: window.situoyun.env.UPLOAD_CHUNK_SIZE,
        retryDelays: [0, 1000, 3000, 5000],
        overridePatchMethod: true,
        metadata: {
          filename: file.name,
          filetype: file.type,
          platform: 'web'
        },
        removeFingerprintOnSuccess: true,
        resume: false,
        onError: () => {
          this.$notify({
            title: '图片上传失败，请重试',
            type: 'error'
          })
        },
        onSuccess: () => {
          const _ts = this
          const reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onload = function(e) {
            _ts.defaultPhoto = e.target.result
          }
          this.callback(upload.url)
        }
      })
      upload.start()
    }
  }
}
</script>

<style lang="scss" scoped>
.upload-avatar {
  width: 48px;
  height: 48px;
  border-radius: 48px;
  line-height: 48px;
  font-size: 0;
  background: #e2ebff;
  text-align: center;
  overflow: hidden;
  .avatar {
    width: 100%;
    height: 100%;
    .pic {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .bg-icon {
      i {
        color: #4886ff;
        font-size: 32px;
      }
    }
    .mask {
      width: 100%;
      height: 20px;
      background: rgba(0, 0, 0, 0.25);
      position: absolute;
      bottom: 0;
      left: 0;
      line-height: 20px;
      font-size: 0;
      i {
        color: #fff;
        font-size: 16px;
      }
    }
  }
}
</style>
