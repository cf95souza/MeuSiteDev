# Estrutura do Banco de Dados - MeuSiteDev

Este documento descreve a estrutura de dados para o projeto MeuSiteDev. Embora o site seja majoritariamente estático, esta estrutura serve para a coleta de leads e eventual integração com um backend/CMS.

## Tabelas Propostas

### 1. Leads (Contatos)
Armazena informações de potenciais clientes que entram em contato através do site.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Identificador único |
| nome | VARCHAR | Nome completo do contato |
| email | VARCHAR | Email de contato |
| whatsapp | VARCHAR | Número de WhatsApp |
| servico_interesse | ENUM | Serviço desejado (Web, BD, Suporte, Infra) |
| mensagem | TEXT | Mensagem detalhada |
| status | ENUM | Status do lead (Novo, Em Atendimento, Finalizado) |
| criado_em | TIMESTAMP | Data de criação |

### 2. Projetos (Portfólio)
Tabela principal para gerenciar os trabalhos exibidos no site.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | UUID | Identificador único |
| `nome` | VARCHAR | Nome personalizado exibido no site |
| `titulo` | VARCHAR | Título do projeto (ex: "OsSystem") |
| `categoria` | VARCHAR | Tipo do projeto: `sistema`, `web`, `app` |
| `descricao` | TEXT | Descrição do projeto |
| `imagem_url` | VARCHAR | Link da imagem armazenada no Bucket |
| `tags` | ARRAY | Tecnologias (ex: `['React', 'PostgreSQL']`) |
| `github_url` | VARCHAR | Link opcional para o repositório |
| `live_url` | VARCHAR | Link opcional para o site ao vivo |
| `ordem` | INTEGER | Ordem de exibição no portfólio |

---

## Supabase Storage

### Bucket: `portfolio-images`
Utilizado para armazenar as capturas de tela e mockups dos sistemas e sites realizados.

- **Políticas de Acesso:**
  - `SELECT`: Público (Leitura anônima permitida para exibição no site).
  - `ALL`: Apenas usuários autenticados (Gestão via painel).

---

## SQL de Inicialização (Supabase)

```sql
-- Criar tabela de projetos
CREATE TABLE projects (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  nome TEXT NOT NULL,
  titulo TEXT NOT NULL,
  categoria TEXT NOT NULL CHECK (categoria IN ('sistema', 'web', 'app')),
  descricao TEXT,
  imagem_url TEXT,
  tags TEXT[] DEFAULT '{}',
  github_url TEXT,
  live_url TEXT,
  ordem INTEGER DEFAULT 0
);

-- Ativar RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Política de leitura pública
CREATE POLICY "Leitura pública de projetos" ON projects FOR SELECT USING (true);
```

## Regras de Segurança
- Validação de entrada no lado do cliente e do servidor.
- Proteção contra SQL Injection usando queries parametrizadas.
- Sanitização de campos de texto.
- Rate limiting para o formulário de contato.
