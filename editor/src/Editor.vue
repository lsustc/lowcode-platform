<template>
  <div class="codeviewer">
    <div class="editor" ref="editor"></div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped type="text/stylus">
  .codeviewer {
    height: 100vh;
    width: 100%;

    .editor {
      height: 100%;
      width: 100%;
    }

    .theme {
      position: absolute;
      left: 0;
      top: 0;
    }
  }
</style>

<script type="text/ecmascript-6">
  export default {
    name: 'CodeViewer',
    editor: null,
    mounted () {
      this.$nextTick(this.initEditor)
    },
    beforDestroy: function () {
      if (this.mEditor) {
        this.mEditor.container.remove()
      }
    },
    methods: {
      initEditor () {
        this.mEditor = monaco.editor.create(this.$refs.editor, {
          language: 'javascript',
            theme: 'vs-dark',
            lineNumbersMinChars: 3,
            scrollBeyondLastLine: false,
        })
      }
    }
  }
</script>

