# 庫存及購買按鈕

## 限量商品搶購網站按鈕說明
在開始撰寫程式碼前的想法及預設：
1. 購買按鈕按下後直接購買，跳過加入購物車流程
2. 無串接 API，庫存僅以 dummy data 作為起始資料


## 規劃 & TODO：
- [ ] 起始庫存以及當下庫存顯示
- [ ] 購買按鈕建立
- [ ] 購買按鈕 hover 及 active 提示
- [ ] 初始頁面檢查庫存是否大於 0
- [ ] 庫存 0：顯示已售完，隱藏按鈕
- [ ] 庫存大於 0：顯示按鈕
- [ ] 購買按鈕點擊後觸發 disable
- [ ] 購買按鈕點擊後檢查庫存是否足夠（當使用者進入頁面顯示庫存後可能其他使用者可能已經購買了同產品。）
- [ ] 庫存足夠，購買成功訊息提示
- [ ] 庫存不足夠，購買失敗訊息提示
- [ ] 更新最新庫存


實作會以 React 搭配 Tailwind CSS，build tool 則使用 Vite。在介面上基本沿用說明文檔的設計。CTA 按鈕則使用鮮明顏色並使用深色以及淺色區別 hover 及 active 滑鼠與觸碰行為讓使用者得到點擊的反饋（桌機與行動裝置）。