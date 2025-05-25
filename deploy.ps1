# PowerShell Deployment Script for Düsseldorf Indians Website

Write-Host "====================================" -ForegroundColor Blue
Write-Host "  Düsseldorf Indians Website Deploy" -ForegroundColor Blue
Write-Host "====================================" -ForegroundColor Blue
Write-Host ""

Write-Host "Choose your deployment option:" -ForegroundColor Yellow
Write-Host "1. Open Website Locally" -ForegroundColor White
Write-Host "2. Open Admin Panel" -ForegroundColor White
Write-Host "3. Deploy to Netlify (Manual)" -ForegroundColor White
Write-Host "4. Deploy to Vercel (Manual)" -ForegroundColor White
Write-Host "5. GitHub Pages Setup Guide" -ForegroundColor White
Write-Host "6. Create Deployment Package" -ForegroundColor White
Write-Host ""

$choice = Read-Host "Enter your choice (1-6)"

switch ($choice) {
    "1" {
        Write-Host ""
        Write-Host "Opening main website..." -ForegroundColor Green
        Start-Process "index.html"
    }
    "2" {
        Write-Host ""
        Write-Host "Opening admin panel..." -ForegroundColor Green
        Start-Process "admin\index.html"
    }
    "3" {
        Write-Host ""
        Write-Host "Netlify Deployment Steps:" -ForegroundColor Green
        Write-Host "1. Go to https://netlify.com" -ForegroundColor White
        Write-Host "2. Drag and drop this entire folder to deploy" -ForegroundColor White
        Write-Host "3. Or create a ZIP file and upload it" -ForegroundColor White
        Write-Host ""
        $createZip = Read-Host "Create ZIP file for upload? (y/n)"
        if ($createZip -eq "y" -or $createZip -eq "Y") {
            $zipName = "dusseldorf-indians-website.zip"
            Write-Host "Creating ZIP file: $zipName" -ForegroundColor Yellow
            Compress-Archive -Path ".\*" -DestinationPath $zipName -Force
            Write-Host "ZIP file created successfully!" -ForegroundColor Green
            Write-Host "Upload $zipName to Netlify" -ForegroundColor Yellow
        }
    }
    "4" {
        Write-Host ""
        Write-Host "Vercel Deployment Steps:" -ForegroundColor Green
        Write-Host "1. Go to https://vercel.com" -ForegroundColor White
        Write-Host "2. Import from Git repository or upload folder" -ForegroundColor White
        Write-Host "3. Vercel will automatically detect it's a static site" -ForegroundColor White
        Write-Host "4. Deploy and get your live URL" -ForegroundColor White
    }
    "5" {
        Write-Host ""
        Write-Host "GitHub Pages Setup:" -ForegroundColor Green
        Write-Host "1. Create a new repository on GitHub" -ForegroundColor White
        Write-Host "2. Upload all these files to the repository" -ForegroundColor White
        Write-Host "3. Go to repository Settings > Pages" -ForegroundColor White
        Write-Host "4. Select 'GitHub Actions' as source" -ForegroundColor White
        Write-Host "5. The .github/workflows/deploy.yml will handle deployment" -ForegroundColor White
        Write-Host ""
        Write-Host "Git commands to upload:" -ForegroundColor Yellow
        Write-Host "git init" -ForegroundColor Gray
        Write-Host "git add ." -ForegroundColor Gray
        Write-Host "git commit -m 'Initial commit'" -ForegroundColor Gray
        Write-Host "git branch -M main" -ForegroundColor Gray
        Write-Host "git remote add origin https://github.com/yourusername/yourrepo.git" -ForegroundColor Gray
        Write-Host "git push -u origin main" -ForegroundColor Gray
    }
    "6" {
        Write-Host ""
        Write-Host "Creating deployment package..." -ForegroundColor Green
        $zipName = "dusseldorf-indians-website-$(Get-Date -Format 'yyyyMMdd-HHmmss').zip"
        Compress-Archive -Path ".\*" -DestinationPath $zipName -Force
        Write-Host "Deployment package created: $zipName" -ForegroundColor Green
        Write-Host ""
        Write-Host "This package contains:" -ForegroundColor Yellow
        Write-Host "- Complete website with CMS" -ForegroundColor White
        Write-Host "- All deployment configurations" -ForegroundColor White
        Write-Host "- Documentation and setup guides" -ForegroundColor White
        Write-Host ""
        Write-Host "You can upload this to any static hosting service:" -ForegroundColor Yellow
        Write-Host "- Netlify, Vercel, GitHub Pages" -ForegroundColor White
        Write-Host "- AWS S3, Azure Static Web Apps" -ForegroundColor White
        Write-Host "- Firebase Hosting, Surge.sh" -ForegroundColor White
    }
    default {
        Write-Host "Invalid choice. Please run the script again." -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Website Features:" -ForegroundColor Cyan
Write-Host "- Main website: index.html" -ForegroundColor White
Write-Host "- Admin panel: admin/index.html" -ForegroundColor White
Write-Host "- CMS for content management" -ForegroundColor White
Write-Host "- Mobile responsive design" -ForegroundColor White
Write-Host "- Ready for production deployment" -ForegroundColor White

Write-Host ""
Write-Host "Deployment completed!" -ForegroundColor Green
Read-Host "Press Enter to exit"