# 나의 작은 웹 공간

GitHub Pages와 Jekyll을 처음 경험하기 위한 개인 블로그 템플릿입니다.

이 템플릿은 `damagethundercat.github.io`처럼 최대한 단순한 구조를 따릅니다. 글은 Markdown으로 쓰고, Jekyll이 글 목록과 글 페이지를 정적 HTML로 조립합니다.

## 시작하기

1. GitHub에서 이 저장소의 **Use this template** 버튼을 누릅니다.
2. 새 저장소 이름을 `username.github.io` 형식으로 만듭니다.
3. 새 저장소를 로컬로 가져옵니다.

```sh
git clone https://github.com/username/username.github.io.git
```

4. AI 에이전트에게 먼저 `AGENTS.md`를 읽어달라고 요청합니다.

```text
이 저장소의 AGENTS.md를 먼저 읽고, 이 프로젝트가 무엇인지 설명해줘.
아직 파일은 수정하지 마.
```

## 주로 바꾸는 파일

- `_config.yml`: 블로그 제목, 설명, 작성자 이름
- `_posts/*.md`: 블로그 글
- `assets/css/style.css`: 글꼴, 색, 여백 같은 디자인
- `README.md`: 저장소 소개

## 글 추가하기

글 파일은 `_posts/YYYY-MM-DD-title.md` 형식으로 만듭니다.

```md
---
layout: post
title: "글 제목"
author: "이름 또는 닉네임"
---

본문을 씁니다.
```

## 로컬에서 미리보기

Ruby와 Bundler가 설치되어 있다면 다음 명령을 사용할 수 있습니다.

```sh
bundle install
bundle exec jekyll serve
```

브라우저에서 보통 아래 주소를 엽니다.

```text
http://localhost:4000
```

로컬 실행이 어렵다면 파일을 수정한 뒤 GitHub에 push하고, GitHub Pages 배포 결과로 확인할 수 있습니다.

## 배포

저장소 이름이 `username.github.io`라면 GitHub Pages 주소는 보통 다음과 같습니다.

```text
https://username.github.io
```

변경한 뒤에는 다음 흐름을 사용합니다.

```sh
git status
git add .
git commit -m "첫 블로그 수정"
git push
```
