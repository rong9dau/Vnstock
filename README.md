# Danh mục CP Pro - GitHub Pages v100

## Upload GitHub
Upload toàn bộ file vào gốc repo:
- index.html
- app.js
- firebase-config.js
- manifest.json
- service-worker.js
- README.md

Repo -> Settings -> Pages -> Deploy from branch -> main -> /root.

## Firebase
Nếu dùng Firebase:
1. Dán config thật vào firebase-config.js.
2. Firebase Authentication -> Sign-in method -> bật Email/Password.
3. Firebase Authentication -> Settings -> Authorized domains -> thêm: rong9dau.github.io
4. Firestore Rules:

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
