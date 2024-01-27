import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

{
  server: {
    host: '127.0.0.1'
  }
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
