#!/usr/bin/env python3
"""
MaxKB Development Setup Script
This script sets up the development environment for MaxKB with PT-BR translation
"""

import os
import sys
import subprocess
import json
from pathlib import Path

# Colors for terminal output
class Colors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'

def print_header(msg):
    print(f"{Colors.HEADER}{Colors.BOLD}{msg}{Colors.ENDC}")

def print_success(msg):
    print(f"{Colors.OKGREEN}✅ {msg}{Colors.ENDC}")

def print_info(msg):
    print(f"{Colors.OKCYAN}ℹ️  {msg}{Colors.ENDC}")

def print_error(msg):
    print(f"{Colors.FAIL}❌ {msg}{Colors.ENDC}")

def run_command(cmd, shell=True, check=True):
    """Run a shell command and return the result"""
    try:
        result = subprocess.run(cmd, shell=shell, check=check, capture_output=True, text=True)
        return result.stdout
    except subprocess.CalledProcessError as e:
        print_error(f"Command failed: {cmd}")
        print(e.stderr)
        return None

def setup_environment():
    """Setup environment variables"""
    print_header("Setting up environment variables...")

    # Create .env file if it doesn't exist
    env_file = Path(".env")
    if not env_file.exists():
        env_content = """# MaxKB Development Environment
MAXKB_DEV_MODE=true
MAXKB_CONFIG=/Users/user0/Documents/IDEs/vscode/projetos-llm/MaxKB-br/opt/maxkb/conf

# Database (Docker PostgreSQL)
MAXKB_DB_HOST=localhost
MAXKB_DB_PORT=54321
MAXKB_DB_NAME=maxkb
MAXKB_DB_USER=maxkb
MAXKB_DB_PASSWORD=maxkb123

# Redis (Docker Redis)
MAXKB_REDIS_HOST=localhost
MAXKB_REDIS_PORT=63791
MAXKB_REDIS_PASSWORD=

# Language
LANGUAGE_CODE=pt-br
"""
        env_file.write_text(env_content)
        print_success(".env file created")
    else:
        print_info(".env file already exists")

    # Set environment variables for this session
    os.environ['MAXKB_DEV_MODE'] = 'true'
    os.environ['PYTHONPATH'] = os.getcwd()

def install_dependencies():
    """Install Python dependencies"""
    print_header("Installing Python dependencies...")

    # Check if we're in a virtual environment
    if not hasattr(sys, 'real_prefix') and not (hasattr(sys, 'base_prefix') and sys.base_prefix != sys.prefix):
        print_error("Not in a virtual environment! Please activate venv first:")
        print("  python3 -m venv venv")
        print("  source venv/bin/activate")
        return False

    # Core dependencies that must be installed
    core_deps = [
        "django==5.2.4",
        "djangorestframework",
        '"drf-spectacular[sidecar]"',
        "django-redis==6.0.0",
        "django-mptt==0.17.0",
        "django-celery-beat==2.8.1",
        "django-apscheduler==0.7.0",
        "psycopg2-binary",
        '"psycopg[binary]"',
        "django-db-connection-pool==1.2.6",
        "python-dotenv==1.1.1",
        "uuid-utils==0.11.0",
        "pytz==2025.2",
        "redis",
        "celery",
        "gunicorn==23.0.0",
        "captcha==0.7.1",
        "psutil==7.0.0",
        "beautifulsoup4==4.13.4",
        "jieba==0.42.1",
        "pycryptodome",
        "html2text",
        "openpyxl==3.1.5",
        "python-docx==1.2.0",
        "xlrd==2.0.2",
        "xlwt==1.3.0",
        "pydub==0.25.1",
        "langchain-community",
        "langchain-openai"
    ]

    print_info("Installing core dependencies...")
    for dep in core_deps:
        print(f"  Installing {dep}...")
        result = run_command(f"pip install {dep}", check=False)
        if result is None:
            print_error(f"Failed to install {dep}")

    print_success("Dependencies installed")
    return True

def create_directories():
    """Create necessary directories"""
    print_header("Creating necessary directories...")

    base_path = Path("/Users/user0/Documents/IDEs/vscode/projetos-llm/MaxKB-br/opt/maxkb")

    directories = [
        base_path / "logs",
        base_path / "conf",
        base_path / "media",
        base_path / "data",
        base_path / "cache",
        base_path / "model"
    ]

    for dir_path in directories:
        dir_path.mkdir(parents=True, exist_ok=True)
        print_success(f"Created {dir_path}")

def check_docker_services():
    """Check if Docker services are running"""
    print_header("Checking Docker services...")

    # Check PostgreSQL
    pg_result = run_command("nc -z localhost 54321", check=False)
    if pg_result is not None:
        print_success("PostgreSQL is running on port 54321")
    else:
        print_error("PostgreSQL is not running. Please run: cd ../opt/docker-dev && ./start.sh")
        return False

    # Check Redis
    redis_result = run_command("nc -z localhost 63791", check=False)
    if redis_result is not None:
        print_success("Redis is running on port 63791")
    else:
        print_error("Redis is not running. Please run: cd ../opt/docker-dev && ./start.sh")
        return False

    return True

def run_migrations():
    """Run Django migrations"""
    print_header("Running database migrations...")

    os.environ['MAXKB_DEV_MODE'] = 'true'
    result = run_command("python main.py upgrade_db", check=False)
    if result:
        print_success("Migrations completed")
        return True
    else:
        print_error("Failed to run migrations")
        return False

def main():
    print_header("🚀 MaxKB Development Setup")
    print_info("This script will set up your development environment")
    print()

    # Step 1: Setup environment
    setup_environment()

    # Step 2: Create directories
    create_directories()

    # Step 3: Check Docker services
    if not check_docker_services():
        print_error("Please start Docker services first!")
        sys.exit(1)

    # Step 4: Install dependencies
    if not install_dependencies():
        print_error("Failed to install dependencies")
        sys.exit(1)

    # Step 5: Run migrations (optional)
    print()
    response = input("Do you want to run database migrations? (y/n): ")
    if response.lower() == 'y':
        run_migrations()

    print()
    print_header("✨ Setup Complete!")
    print_success("You can now run the development server:")
    print()
    print("  Frontend:")
    print("    cd ui")
    print("    npm run dev")
    print()
    print("  Backend:")
    print("    export MAXKB_DEV_MODE=true")
    print("    python main.py dev web")
    print()
    print_info("Access the application at http://localhost:3000")

if __name__ == "__main__":
    main()
