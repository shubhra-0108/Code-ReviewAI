# 🚀 CodeReview AI — Smart Code Explanation & Review Tool

> ✨ Understand your code like never before
> Paste your code → Get instant AI-powered explanation

---

## 🧠 Overview

CodeReview AI is a powerful tool that helps developers understand code instantly.
It takes your code as input and generates a clear, structured explanation using AI.

Perfect for:

* 👨‍🎓 Beginners learning programming
* 👨‍💻 Developers reviewing code quickly
* 🧑‍🏫 Teaching & demonstrations

---

## 🌟 Features

* 🧠 AI-powered code explanation
* ⚡ Instant review with one click
* 🎯 Beginner-friendly breakdown
* 🖥️ Split-screen UI (Editor + Output)
* 🎨 Syntax highlighting
* 📄 Markdown formatted responses

---

## 🏗️ Tech Stack

### Frontend

* React.js
* PrismJS / Highlight.js
* React Markdown

### Backend

* Node.js
* Express.js
* AI API (Gemini / OpenAI)

---

## 📂 Project Structure

```
CodeReviewAI/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── styles/
│
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   └── config/
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```
git clone https://github.com/your-username/code-review-ai.git
cd code-review-ai
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
```

Create `.env` file:

```
PORT=5000
API_KEY=your_api_key_here
```

Run backend:

```
npm run dev
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

## 🔌 API Usage

### POST `/review`

#### Request:

```json
{
  "code": "function sum() { return 1 + 1; }"
}
```

#### Response:

```json
{
  "explanation": "This function returns the sum of 1 + 1 which is 2..."
}
```

---

## 🧠 How It Works

1. User writes code in editor
2. Clicks **Review**
3. Code sent to backend API
4. AI processes logic
5. Explanation returned
6. UI displays formatted output

---

## 🚀 Future Enhancements

* 🔍 Bug detection
* 🛠️ Code improvement suggestions
* 🌐 Multi-language support
* 📊 Complexity analysis
* 🧪 Test case generation
* 🧵 Chat-based interaction

---

## 🤝 Contributing

Contributions are welcome!

```
fork → clone → create branch → commit → push → pull request
```

---

## 📜 License

MIT License

---

## ❤️ Author

Shubhra Pandey

---

## ⭐ Support

If you like this project:

* ⭐ Star the repo
* 🔁 Share with others
* 🤝 Contribute

---

## 💡 Tagline

> "Understand code, not just write it."
