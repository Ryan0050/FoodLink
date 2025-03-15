Our website provides a space for **farmers** to easily register, sell their products, and directly contact companies they wish to work with. **Buyers** can browse through various fresh and quality products from local farmers and make purchases directly from them. Whether you're a farmer looking to expand your reach or a buyer seeking fresh produce, our platform connects both parties to make transactions simple and effective.

## Installation and Setup
## Step 1: Clone Repository
```
git clone https://github.com/Ryan0050/ureekaProject.git

cd ureekaProject
```

## Step 2: Install node_modules
```
npm install
```

## Step 3: Add New File
```
make new file called .env.local inside ureekaProject

repositort structure:
ureekaProject/
├── .next/
├── node_modules/
├── public/
├── src/
└── .env.local
```

## Step 4: Connect To Database
```
at.env.local add this text:
NEXT_PUBLIC_SUPABASE_URL=https://wpeqzyeulfyosmxngias.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwZXF6eWV1bGZ5b3NteG5naWFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwNzI5ODcsImV4cCI6MjA1NjY0ODk4N30.WtnEMMrGWoe6US223cRb2Sped3FZMzudSs71Cmyr0Vo
```

## Step 5: Run The Code
```
npm run dev
```
Visit http://localhost:3000 to view the application.
