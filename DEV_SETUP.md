# MaxKB Development Setup - PT-BR Translation Project

## Quick Start

### 1. Start Docker Services
```bash
cd ../opt/docker-dev
./start.sh
```

This starts:
- PostgreSQL on port 54321
- Redis on port 63791
- Nginx on port 8088
- Adminer on port 8091

### 2. Start Frontend (Vue.js)
```bash
cd MaxKB/ui
npm install  # First time only
npm run dev
```
Access at: http://localhost:3000

### 3. Start Backend (Django) - Optional
```bash
cd MaxKB

# Install dependencies (first time only)
poetry install
# OR
pip install -r requirements.txt

# With environment variable
export MAXKB_DEV_MODE=true
python main.py dev web
```
Access at: http://localhost:8080

## Current Implementation Status

### ✅ Completed
1. **Portuguese (Brazil) Translation Support**
   - Added pt-BR locale files for frontend
   - Registered pt-BR in backend Django settings
   - Created workflow templates in Portuguese

2. **Backend Configuration for Local Development**
   - Fixed permission errors with local paths
   - Configured LOG_DIR to use local opt/maxkb/logs
   - Created .env file with development settings

3. **Dynamic Translation System**
   - Converted static templates to use dynamic translations
   - Fixed issue with Chinese/Japanese text appearing in wrong contexts
   - Made workflow node titles reactive to language changes

### 📝 Testing the PT-BR Translation

1. Access http://localhost:3000
2. Click on language selector (top right)
3. Select "Português (Brasil)"
4. Verify:
   - Interface is fully translated
   - Workflow nodes show Portuguese titles
   - No Chinese/Japanese text appears

### 🐛 Known Issues & Solutions

1. **Permission Error on Backend Start**
   - Solution: Set `MAXKB_DEV_MODE=true` environment variable
   - Already fixed in `.env` file

2. **Node Titles in Wrong Language**
   - Solution: Implemented dynamic translation getters
   - Templates now use `t()` function for all text

## Git Commits Made

```bash
32b3738e - fix(dev): configure local development paths
4661c78d - fix(i18n): add dynamic translations for workflow templates
b541a7da - feat(i18n): add Portuguese (Brazil) translation support
```

## Environment Variables (.env)

```env
MAXKB_DEV_MODE=true
DB_HOST=localhost
DB_PORT=54321
DB_NAME=maxkb
DB_USER=maxkb
DB_PASSWORD=maxkb123
REDIS_HOST=localhost
REDIS_PORT=63791
```

## Useful Commands

### Frontend Development
```bash
npm run dev         # Development server
npm run build       # Production build
npm run type-check  # TypeScript validation
npm run lint        # ESLint
```

### Docker Management
```bash
cd ../opt/docker-dev
./start.sh    # Start all services
./stop.sh     # Stop all services
./logs.sh     # View logs
./status.sh   # Check status
```

### Git Workflow
```bash
git status
git add -A
git commit -m "feat: description"
git push origin feat/portuguese-brazilian-translation
```

## Project Structure

```
MaxKB-br/
├── MaxKB/                 # Main application (clean)
│   ├── ui/               # Vue.js frontend
│   │   └── src/locales/  # Translation files
│   └── apps/             # Django backend
├── MaxKB-antigo/         # Reference implementation (95% translated)
├── opt/
│   ├── docker-dev/       # Docker development environment
│   └── maxkb/           # Local data directories
│       ├── logs/        # Application logs
│       ├── conf/        # Configuration files
│       └── media/       # Uploaded files
└── docs2/               # Project documentation
```

## Next Steps

- [ ] Complete remaining 5% of translations
- [ ] Test all workflow functionalities in PT-BR
- [ ] Create pull request to upstream repository
- [ ] Document any backend translation needs