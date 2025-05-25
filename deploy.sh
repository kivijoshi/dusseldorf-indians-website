#!/bin/bash

echo "===================================="
echo "  Düsseldorf Indians Website Deploy"
echo "===================================="
echo

echo "Choose your deployment platform:"
echo "1. Netlify (Recommended)"
echo "2. Vercel"
echo "3. GitHub Pages"
echo "4. Surge.sh"
echo "5. Local Development Server"
echo "6. Open Admin Panel"
echo

read -p "Enter your choice (1-6): " choice

case $choice in
    1)
        echo
        echo "Deploying to Netlify..."
        echo "Make sure you have Netlify CLI installed: npm install -g netlify-cli"
        echo
        read -p "Press Enter to continue..."
        netlify deploy --prod --dir .
        ;;
    2)
        echo
        echo "Deploying to Vercel..."
        echo "Make sure you have Vercel CLI installed: npm install -g vercel"
        echo
        read -p "Press Enter to continue..."
        vercel --prod
        ;;
    3)
        echo
        echo "GitHub Pages Setup:"
        echo "1. Push this code to a GitHub repository"
        echo "2. Go to repository Settings > Pages"
        echo "3. Enable GitHub Actions for deployment"
        echo "4. The .github/workflows/deploy.yml will handle deployment"
        echo
        read -p "Press Enter to continue..."
        ;;
    4)
        echo
        echo "Deploying to Surge.sh..."
        echo "Make sure you have Surge installed: npm install -g surge"
        echo
        read -p "Press Enter to continue..."
        surge .
        ;;
    5)
        echo
        echo "Starting local development server..."
        echo "Website will be available at: http://localhost:3000"
        echo "Admin panel will be available at: http://localhost:3000/admin"
        echo
        echo "Installing serve if not already installed..."
        npm install -g serve
        serve . --single
        ;;
    6)
        echo
        echo "Opening admin panel..."
        if command -v xdg-open > /dev/null; then
            xdg-open admin/index.html
        elif command -v open > /dev/null; then
            open admin/index.html
        else
            echo "Please open admin/index.html in your browser"
        fi
        ;;
    *)
        echo "Invalid choice. Please run the script again."
        ;;
esac

echo
echo "Deployment script completed."