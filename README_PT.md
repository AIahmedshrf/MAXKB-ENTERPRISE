<p align="center"><img src= "https://github.com/1Panel-dev/maxkb/assets/52996290/c0694996-0eed-40d8-b369-322bf2a380bf" alt="MaxKB" width="300" /></p>
<h3 align="center">Plataforma open-source para construção de agentes empresariais</h3>
<h3 align="center">强大易用的企业级智能体平台</h3>
<p align="center"><a href="https://trendshift.io/repositories/9113" target="_blank"><img src="https://trendshift.io/api/badge/repositories/9113" alt="1Panel-dev%2FMaxKB | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a></p>
<p align="center">
  <a href="https://www.gnu.org/licenses/gpl-3.0.html#license-text"><img src="https://img.shields.io/github/license/1Panel-dev/maxkb?color=%231890FF" alt="License: GPL v3"></a>
  <a href="https://github.com/1Panel-dev/maxkb/releases/latest"><img src="https://img.shields.io/github/v/release/1Panel-dev/maxkb" alt="Latest release"></a>
  <a href="https://github.com/1Panel-dev/maxkb"><img src="https://img.shields.io/github/stars/1Panel-dev/maxkb?color=%231890FF&style=flat-square" alt="Stars"></a>    
  <a href="https://hub.docker.com/r/1panel/maxkb"><img src="https://img.shields.io/docker/pulls/1panel/maxkb?label=downloads" alt="Download"></a><br/>
 [<a href="/README_CN.md">中文(简体)</a>] | [<a href="/README.md">English</a>] | [<a href="/README_PT.md">Português</a>]
</p>
<hr/>

MaxKB = Max Knowledge Brain (Cérebro de Conhecimento Máximo), é uma plataforma open-source para construção de agentes empresariais. O MaxKB integra pipelines de Geração Aumentada por Recuperação (RAG), suporta fluxos de trabalho robustos e fornece recursos avançados de uso de ferramentas MCP. O MaxKB é amplamente aplicado em cenários como atendimento ao cliente inteligente, bases de conhecimento corporativo interno, pesquisa acadêmica e educação.

- **Pipeline RAG**: Suporta upload direto de documentos / rastreamento automático de documentos online, com recursos para divisão automática de texto e vetorização. Isso reduz efetivamente as alucinações em grandes modelos, proporcionando uma experiência superior de interação inteligente de perguntas e respostas.
- **Fluxo de Trabalho Agêntico**: Equipado com um poderoso motor de fluxo de trabalho, biblioteca de funções e uso de ferramentas MCP, permitindo a orquestração de processos de IA para atender às necessidades de cenários de negócios complexos.
- **Integração Perfeita**: Facilita a integração rápida sem código em sistemas de negócios de terceiros, equipando rapidamente os sistemas existentes com recursos de perguntas e respostas inteligentes para aumentar a satisfação do usuário.
- **Agnóstico de Modelo**: Suporta vários grandes modelos, incluindo modelos privados (como DeepSeek, Llama, Qwen, etc.) e modelos públicos (como OpenAI, Claude, Gemini, etc.).
- **Multi Modal**: Suporte nativo para entrada e saída de texto, imagem, áudio e vídeo.

## Início Rápido

Execute o script abaixo para iniciar um contêiner MaxKB usando Docker:

```bash
docker run -d --name=maxkb --restart=always -p 8080:8080 -v ~/.maxkb:/opt/maxkb 1panel/maxkb
```

Acesse a interface web do MaxKB em `http://seu_ip_do_servidor:8080` com as credenciais de administrador padrão:

- usuário: admin
- senha: MaxKB@123..

Para usuários na China que enfrentam problemas de falha no pull de imagens Docker, consulte esta [documentação de instalação offline](https://maxkb.cn/docs/v2/installation/offline_installtion/) para instalação.

## Capturas de Tela

<table style="border-collapse: collapse; border: 1px solid black;">
  <tr>
    <td style="padding: 5px;background-color:#fff;"><img src= "https://github.com/user-attachments/assets/eb285512-a66a-4752-8941-c65ed1592238" alt="MaxKB Demo1"   /></td>
    <td style="padding: 5px;background-color:#fff;"><img src= "https://github.com/user-attachments/assets/f732f1f5-472c-4fd2-93c1-a277eda83d04" alt="MaxKB Demo2"   /></td>
  </tr>
  <tr>
    <td style="padding: 5px;background-color:#fff;"><img src= "https://github.com/user-attachments/assets/c927474a-9a23-4830-822f-5db26025c9b2" alt="MaxKB Demo3"   /></td>
    <td style="padding: 5px;background-color:#fff;"><img src= "https://github.com/user-attachments/assets/e6268996-a46d-4e58-9f30-31139df78ad2" alt="MaxKB Demo4"   /></td>
  </tr>
</table>

## Stack Tecnológico

- Frontend：[Vue.js](https://vuejs.org/)
- Backend：[Python / Django](https://www.djangoproject.com/)
- Framework LLM：[LangChain](https://www.langchain.com/)
- Banco de Dados：[PostgreSQL + pgvector](https://www.postgresql.org/)

## Histórico de Estrelas

[![Star History Chart](https://api.star-history.com/svg?repos=1Panel-dev/MaxKB&type=Date)](https://star-history.com/#1Panel-dev/MaxKB&Date)

## Licença

Licenciado sob a Licença Pública Geral GNU versão 3 (GPLv3) (a "Licença"); você não pode usar este arquivo exceto em conformidade com a Licença. Você pode obter uma cópia da Licença em

<https://www.gnu.org/licenses/gpl-3.0.html>

A menos que exigido pela lei aplicável ou acordado por escrito, o software distribuído sob a Licença é distribuído "COMO ESTÁ", SEM GARANTIAS OU CONDIÇÕES DE QUALQUER TIPO, expressas ou implícitas. Consulte a Licença para o idioma específico que rege as permissões e limitações sob a Licença.
