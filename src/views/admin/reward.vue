<template >
    <div class="upload-page">
     <el-upload
       ref="uploadRef"
       class="upload"
       drag
       multiple
       action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
       :auto-upload="false"
     >
     <el-icon class="el-icon--upload"><upload-filled /></el-icon>
       <div class="el-upload__text">
         将文件拖到此处，或<em>点击上传</em>
       </div>
       <template #tip>
         <div class="el-upload__tip">
           请上传5mb以内的文件
         </div>
       </template>
   
     </el-upload>
   
     <el-button class="ml-3" type="success" @click="submitUpload">
         上传
       </el-button>
    </div>
   </template>
   <script  setup>
   import { ref } from 'vue'
   
   const uploadRef = ref()
   
   const submitUpload = () => {
     uploadRef.value.submit()
   }
   </script>
   <style lang="scss">
   .upload-page{
     width: 100%;
     background-color: #fff;
     border-radius: 8px;
     padding: 32px;
     display: flex;
     justify-content: center;
     flex-direction: column;
     align-items: center;
     .el-upload-dragger{
     width: 500px;
   }
   .el-upload__tip{
     margin-top: 10px;
   }
   .el-icon--upload{
     font-size: 100px;
     color: #888;
   }
   }
   
   
   </style>
   