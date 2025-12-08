# 1️⃣ 빌드 스테이지: Vite 빌드
FROM node:20-alpine AS builder

# 작업 디렉토리
WORKDIR /app

# 의존성 먼저 설치
COPY package*.json ./
# 만약 pnpm / yarn 쓰면 여기에 lock 파일도 복사하고 명령만 바꿔줘
RUN npm install

# 소스 복사
COPY . .

# Vite 빌드
RUN npm run build


# 2️⃣ 런타임 스테이지: Nginx로 정적 파일 서빙
FROM nginx:1.27-alpine

# SPA 라우팅 처리를 위한 nginx 설정 복사
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 빌드 결과물을 nginx 기본 루트에 복사
COPY --from=builder /app/dist /usr/share/nginx/html

# 컨테이너가 리슨할 포트
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
