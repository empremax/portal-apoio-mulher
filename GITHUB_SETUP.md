# Configuração GitHub Pages - Portal de Apoio à Mulher

## Instruções Passo a Passo

### 1. Criar uma conta GitHub (se não tiver)
- Acesse https://github.com/signup
- Preencha os dados e confirme o email

### 2. Criar um novo repositório
- Acesse https://github.com/new
- **Nome do repositório:** `portal-apoio-mulher`
- **Descrição:** Portal de Apoio e Proteção à Mulher
- **Visibilidade:** Public (obrigatório para GitHub Pages gratuito)
- Clique em "Create repository"

### 3. Fazer push do código para GitHub

Execute os seguintes comandos no terminal:

```bash
cd /home/ubuntu/portal-apoio-mulher

# Adicionar o repositório remoto
git remote add origin https://github.com/SEU_USUARIO/portal-apoio-mulher.git

# Renomear branch para 'main' (se necessário)
git branch -M main

# Fazer push do código
git push -u origin main
```

**Substitua `SEU_USUARIO` pelo seu nome de usuário do GitHub**

### 4. Habilitar GitHub Pages

1. Acesse seu repositório no GitHub
2. Vá para **Settings** (Configurações)
3. Clique em **Pages** (no menu lateral esquerdo)
4. Em "Build and deployment":
   - **Source:** Selecione "GitHub Actions"
   - O workflow já está configurado automaticamente
5. Clique em "Save"

### 5. Acompanhar o Deploy

1. Vá para a aba **Actions** do seu repositório
2. Você verá o workflow "Deploy to GitHub Pages" em execução
3. Aguarde a conclusão (geralmente 2-5 minutos)
4. Quando estiver verde (✓), o site está online!

### 6. Acessar seu site

Seu site estará disponível em:
```
https://SEU_USUARIO.github.io/portal-apoio-mulher/
```

**Exemplo:** Se seu usuário é `matheus-ferreira`, o site será:
```
https://matheus-ferreira.github.io/portal-apoio-mulher/
```

---

## Atualizar o site

Toda vez que você fizer push para o branch `main`:

```bash
git add .
git commit -m "Sua mensagem de commit"
git push origin main
```

O GitHub Actions automaticamente:
1. Faz o build do projeto
2. Faz deploy para GitHub Pages
3. Seu site é atualizado em minutos

---

## Usar um domínio personalizado (opcional)

Se quiser usar seu próprio domínio (ex: `portaldeapoioamulher.com.br`):

1. Compre um domínio em registradores como:
   - Registro.br
   - GoDaddy
   - Namecheap

2. Configure no GitHub:
   - Vá para **Settings > Pages**
   - Em "Custom domain", digite seu domínio
   - Configure os DNS do seu registrador conforme as instruções

---

## Solução de Problemas

### O deploy falhou
- Verifique a aba **Actions** para ver o erro
- Certifique-se de que o repositório é **Public**
- Verifique se o branch é `main` ou `master`

### O site não aparece
- Aguarde 5 minutos após o deploy
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Verifique se GitHub Pages está habilitado em Settings

### Preciso de ajuda
- Documentação GitHub Pages: https://docs.github.com/en/pages
- Documentação GitHub Actions: https://docs.github.com/en/actions

---

**Desenvolvido por:** Matheus Ferreira  
**Instituição:** UFBRA - Ciências da Computação
