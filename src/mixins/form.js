/*
 * @Description:表单公用代码
 * @Features:
 * @Author: Miri
 * @Date: 2020-07-30 16:49:42
 * @LastEditTime: 2020-08-18 10:43:33
 * @LastEditors: Miri
 * @Maintainer: Miri
 * @Contributor: Miri
 * @FilePath: /holly/src/utils/formMixin.js
 */
export default {
  methods: {
    /**
     *
     * @param {String} ref 表单的ref
     * @param {Function} submitFn 表单验证成功后的逻辑
     */
    validateFormAndSubmit(ref, submitFn) {
      this.$refs[ref].validate((valid) => {
        if (valid && typeof submitFn === 'function') {
          submitFn.apply(this)
        }
      })
    },
    /**
     * 清理表单数据
     * @param {String} ref form ref
     */
    cleanForm(ref) {
      this.$refs[ref].resetFields()
    },
    /**
     * 挑选出修改过的字段
     * @param {Object} pre 原对象
     * @param {Object} curr 当前对象
     * @return {Object} 修改过的字段集合
     */
    pickModifiedFields(preObj, currObj) {
      const modifiedFields = {}
      if (typeof preObj === 'object' && typeof currObj === 'object') {
        for (const key in currObj) {
          const curr = currObj[key]
          const pre = preObj[key]
          if (curr !== pre) {
            modifiedFields[key] = curr
          }
        }
      }
      return modifiedFields
    }
  }
}
