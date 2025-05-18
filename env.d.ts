declare namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_KEY: string
      DATABASE_URL: string
      // 他の環境変数もここに追加
    }
  }