# Padrão Cloudflare Pages para LPs da FLUA

## Arquitetura

- Cada LP fica em `public/<slug>.html`.
- Assets ficam em `public/static/`.
- Use caminhos absolutos como `/static/img/logo-flua.png`.
- A raiz `/` serve `public/index.html`.
- URLs legadas `/lp/<slug>` redirecionam para `/<slug>`.
- `/lp/help` serve `public/help.json`.
- O projeto é estático, sem Flask, Docker ou etapa de build.

## Regras obrigatórias

- Preserve Google Tag Manager, analytics, UTMs e eventos de CTA.
- Preserve links de checkout, Amazon, UICLAP, Hotmart e seus parâmetros.
- Mantenha SEO, Open Graph, responsividade e identidade visual da FLUA.
- Use a capitalização exata dos arquivos; o ambiente é case-sensitive.
- Nenhum arquivo publicado pode ultrapassar 25 MiB.
- Não invente substitutos para assets ausentes.
- Não mova chaves ou segredos para o navegador.
- Atualize `public/help.json` ao adicionar ou remover uma LP.

## Validação

Antes de concluir uma mudança, audite referências e assets, confirme que não há
Jinja, teste `/`, cada `/<slug>`, cada `/lp/<slug>`, `/lp/help`, a página 404 e
assets representativos com Wrangler.

## Cloudflare Pages

- Framework: nenhum.
- Comando de build: vazio.
- Diretório de saída: `public`.

Não afirme que houve deploy sem evidência retornada pelo Cloudflare.
