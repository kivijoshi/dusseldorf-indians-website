@echo off
echo ====================================
echo   Düsseldorf Indians Website Deploy
echo ====================================
echo.

echo Choose your deployment platform:
echo 1. Netlify (Recommended)
echo 2. Vercel
echo 3. GitHub Pages
echo 4. Surge.sh
echo 5. Local Development Server
echo 6. Open Admin Panel
echo.

set /p choice="Enter your choice (1-6): "

if %choice%==1 (
    echo.
    echo Deploying to Netlify...
    echo Make sure you have Netlify CLI installed: npm install -g netlify-cli
    echo.
    pause
    netlify deploy --prod --dir .
) else if %choice%==2 (
    echo.
    echo Deploying to Vercel...
    echo Make sure you have Vercel CLI installed: npm install -g vercel
    echo.
    pause
    vercel --prod
) else if %choice%==3 (
    echo.
    echo GitHub Pages Setup:
    echo 1. Push this code to a GitHub repository
    echo 2. Go to repository Settings ^> Pages
    echo 3. Enable GitHub Actions for deployment
    echo 4. The .github/workflows/deploy.yml will handle deployment
    echo.
    pause
) else if %choice%==4 (
    echo.
    echo Deploying to Surge.sh...
    echo Make sure you have Surge installed: npm install -g surge
    echo.
    pause
    surge .
) else if %choice%==5 (
    echo.
    echo Starting local development server...
    echo Website will be available at: http://localhost:3000
    echo Admin panel will be available at: http://localhost:3000/admin
    echo.
    echo Installing serve if not already installed...
    npm install -g serve
    serve . --single
) else if %choice%==6 (
    echo.
    echo Opening admin panel...
    start admin\index.html
) else (
    echo Invalid choice. Please run the script again.
    pause
)

echo.
echo Deployment script completed.
pause