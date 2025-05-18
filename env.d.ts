declare namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_GITHUB_URL: string
      NEXT_PUBLIC_LINKEDIN_URL: string
      EMAIL_USER: string
      EMAIL_PASS: string
      // 他の環境変数もここに追加
    }
  }