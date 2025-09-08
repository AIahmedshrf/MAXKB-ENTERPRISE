#!/bin/bash

# Script para manter o fork MaxKB atualizado com o upstream
# e preservar nossas alterações de tradução pt-BR

echo "🔄 Sincronizando fork MaxKB com upstream..."

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Verifica se estamos no diretório correto
if [ ! -f "main.py" ]; then
    echo -e "${RED}❌ Erro: Execute este script no diretório raiz do MaxKB${NC}"
    exit 1
fi

# Salva branch atual
CURRENT_BRANCH=$(git branch --show-current)
echo -e "${YELLOW}📍 Branch atual: $CURRENT_BRANCH${NC}"

# Adiciona upstream se não existir
if ! git remote | grep -q "upstream"; then
    echo -e "${YELLOW}➕ Adicionando upstream...${NC}"
    git remote add upstream https://github.com/1Panel-dev/MaxKB.git
fi

# Fetch do upstream
echo -e "${GREEN}📥 Buscando atualizações do upstream...${NC}"
git fetch upstream

# Checkout para main
echo -e "${GREEN}🔀 Mudando para branch main...${NC}"
git checkout main

# Merge do upstream
echo -e "${GREEN}🔄 Mesclando com upstream/main...${NC}"
git merge upstream/main

# Volta para a branch de tradução
echo -e "${GREEN}🔀 Voltando para branch de tradução...${NC}"
git checkout feat/portuguese-brazilian-translation

# Rebase com main
echo -e "${YELLOW}🔧 Fazendo rebase com main atualizado...${NC}"
git rebase main

echo -e "${GREEN}✅ Sincronização completa!${NC}"
echo ""
echo "Próximos passos:"
echo "1. Resolver conflitos se houver: git status"
echo "2. Continuar rebase se necessário: git rebase --continue"
echo "3. Push forçado se necessário: git push --force-with-lease origin feat/portuguese-brazilian-translation"
