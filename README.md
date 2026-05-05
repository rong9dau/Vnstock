# Danh mục CP Pro - GitHub Pages

Bản này chạy trên GitHub Pages, không dùng Netlify Functions.

## Tính năng
- Firebase Auth + Firestore sync tùy chọn.
- Chạy offline/local nếu chưa cấu hình Firebase.
- Fetch giá/lịch sử trực tiếp từ trình duyệt: TCBS -> Yahoo.
- Có Proxy CORS tùy chọn: AllOrigins hoặc custom template.
- Danh mục sortable/filter/select.
- Lịch sử giá theo ngày/tuần/tháng/giờ/phút nếu nguồn có dữ liệu.
- Lãi/lỗ lịch sử toàn danh mục/theo ngành/theo mã tick chọn.
- Backup/restore JSON.

## Cài lên GitHub Pages
1. Tạo repo GitHub.
2. Upload toàn bộ file trong thư mục này vào gốc repo:
   - index.html
   - app.js
   - firebase-config.js
   - manifest.json
   - service-worker.js
3. Repo -> Settings -> Pages.
4. Source: Deploy from a branch.
5. Branch: main, folder: /root.
6. Mở link GitHub Pages được cấp.

## Firebase
Nếu dùng Firebase:
1. Copy config Firebase Web vào firebase-config.js.
2. Firebase Auth -> Sign-in method -> bật Email/Password.
3. Firebase Auth -> Settings -> Authorized domains -> thêm:
   ten-user.github.io
4. Firestore Rules:

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Lưu ý API
GitHub Pages là web tĩnh. API phải cho phép CORS để trình duyệt fetch được.
Nếu lỗi CORS, vào tab "Giá & API" -> Proxy CORS -> AllOrigins.
