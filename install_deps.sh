#!/bin/bash

# MaxKB Development Dependencies Installation Script
# This installs the minimal dependencies needed to run the backend

echo "📦 Installing MaxKB dependencies..."

# Activate virtual environment if it exists
if [ -d "venv" ]; then
    source venv/bin/activate
else
    echo "Creating virtual environment..."
    python3 -m venv venv
    source venv/bin/activate
fi

echo "🔧 Installing core dependencies..."

# Core Django dependencies
pip install \
    django==5.2.4 \
    djangorestframework \
    "drf-spectacular[sidecar]" \
    django-redis==6.0.0 \
    django-mptt==0.17.0 \
    django-celery-beat==2.8.1 \
    django-apscheduler==0.7.0

# Database
pip install \
    psycopg2-binary \
    "psycopg[binary]" \
    django-db-connection-pool==1.2.6

# Utils
pip install \
    python-dotenv==1.1.1 \
    uuid-utils==0.11.0 \
    pytz==2025.2 \
    redis \
    celery \
    gunicorn==23.0.0

# Additional required modules
pip install \
    captcha==0.7.1 \
    psutil==7.0.0 \
    beautifulsoup4==4.13.4 \
    jieba==0.42.1 \
    html2text \
    openpyxl==3.1.5 \
    python-docx==1.2.0 \
    xlrd==2.0.2 \
    xlwt==1.3.0 \
    pydub==0.25.1

# Minimal AI dependencies (you can add more as needed)
pip install \
    langchain-community \
    langchain-openai

echo "✅ Dependencies installed!"
echo ""
echo "To run the backend:"
echo "  export MAXKB_DEV_MODE=true"
echo "  python main.py dev web"
