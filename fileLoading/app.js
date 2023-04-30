import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import { upload } from './upload.js'

const firebaseConfig = {
  apiKey: 'AIzaSyCUUiJPYFzXl3003qrWkkOevs37cW3Txu0',
  authDomain: 'fe-upload-c6bfd.firebaseapp.com',
  projectId: 'fe-upload-c6bfd',
  storageBucket: 'fe-upload-c6bfd.appspot.com',
  messagingSenderId: '622363823743',
  appId: '1:622363823743:web:6e9d1162383b2f03e6794a',
}

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()

upload('#file', {
  multi: true,
  accept: ['.png', '.jpg', '.jpeg', '.gif'],
  onUpload(files, blocks) {
    files.forEach((file, index) => {
      const ref = storage.ref(`images/${file.name}`)
      const task = ref.put(file)

      task.on(
        'state_changed',
        (snapshot) => {
          const percentage =
            ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(
              0
            ) + '%'
          const block = blocks[index].querySelector('.preview-info-progress')
          block.textContent = percentage
          block.style.width = percentage
        },
        (error) => {
          console.log(error)
        },
        () => {
          task.snapshot.ref.getDownloadURL().then((url) => {
            console.log('Download URL', url)
          })
        }
      )
    })
  },
})
