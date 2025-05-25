# Düsseldorf Indians Website with CMS

A community website for Indian expatriates in Düsseldorf, Germany, featuring a complete Content Management System (CMS) for easy content editing.

## Features

### Main Website
- **Responsive Design**: NYT-inspired layout that works on all devices
- **Government Offices**: Interactive table with official links and information
- **First Steps Guide**: Numbered checklist for new expats
- **Indian Restaurants**: Card-based layout with images and descriptions
- **Community Groups**: Facebook group links for networking
- **Service Providers**: Directory of English-speaking services
- **Contact Form**: Functional contact form with validation
- **Weather Widget**: Live weather information for Düsseldorf

### Content Management System
- **Easy-to-use Admin Panel**: Intuitive interface for content editing
- **Real-time Updates**: Changes appear immediately on the website
- **Data Management**: Add, edit, and remove content items
- **Import/Export**: Backup and restore content data
- **Preview Functionality**: View changes before publishing
- **Responsive Admin Interface**: Manage content from any device

## File Structure

```
website/
├── index.html              # Main website
├── style.css              # Website styles
├── cms-loader.js          # CMS integration script
├── README.md              # This file
└── admin/
    ├── index.html         # CMS admin panel
    ├── admin-style.css    # Admin panel styles
    ├── admin-script.js    # Admin panel functionality
    └── config.yml         # CMS configuration
```

## Getting Started

### Accessing the Website
1. Open `index.html` in a web browser to view the main website
2. The website works without any server setup

### Using the CMS
1. Open `admin/index.html` in a web browser to access the admin panel
2. Use the navigation tabs to switch between content sections:
   - **Basic Info**: Edit site title, description, and header date
   - **Government Offices**: Manage office listings with links and descriptions
   - **First Steps**: Edit the step-by-step guide for new expats
   - **Restaurants**: Add/edit restaurant information with images
   - **Facebook Groups**: Manage community group links
   - **Services**: Edit service provider listings

### Managing Content

#### Adding New Items
1. Navigate to the desired section in the admin panel
2. Click the "Add" button (e.g., "+ Add Restaurant")
3. Fill in the required information
4. Click "Save All Changes" to persist your edits

#### Editing Existing Items
1. Find the item you want to edit
2. Modify the text in the input fields
3. Changes are automatically tracked
4. Click "Save All Changes" to save

#### Removing Items
1. Click the "Remove" button on any item card
2. The item will be deleted immediately
3. Click "Save All Changes" to persist the changes

### Data Management

#### Exporting Data
1. Click "Export Data" in the admin header
2. A JSON file will be downloaded with all your content
3. Use this for backups or transferring content

#### Importing Data
1. Click "Import Data" in the admin header
2. Select a previously exported JSON file
3. All content will be replaced with the imported data

#### Viewing Changes
1. Click "Preview Site" to open the main website in a new tab
2. Your changes will be visible immediately

## Technical Details

### Data Storage
- Content is stored in the browser's localStorage
- Data persists between browser sessions
- No server or database required

### Content Structure
The CMS manages the following content types:

```javascript
{
  basic: {
    title: "Site title",
    description: "Site description", 
    headerDate: "Header date"
  },
  offices: [
    {
      name: "Office name",
      url: "Website URL",
      description: "Office description",
      icon: "Icon image URL"
    }
  ],
  steps: ["Step 1 text", "Step 2 text", ...],
  restaurants: [
    {
      name: "Restaurant name",
      description: "Description",
      url: "Website URL",
      image: "Image URL"
    }
  ],
  groups: [
    {
      name: "Group name",
      url: "Facebook URL"
    }
  ],
  services: [
    {
      name: "Service name",
      description: "Description",
      url: "Service URL",
      icon: "Icon URL"
    }
  ]
}
```

### Browser Compatibility
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **JavaScript**: ES6+ features used (classes, arrow functions, template literals)
- **CSS**: Grid and Flexbox layout

### Customization
- Edit `style.css` to change website appearance
- Edit `admin/admin-style.css` to customize admin panel
- Modify `admin/config.yml` for CMS settings
- Update `cms-loader.js` to change how content is loaded

## Troubleshooting

### Content Not Updating
1. Ensure you clicked "Save All Changes" in the admin panel
2. Refresh the main website page
3. Check browser console for JavaScript errors

### Admin Panel Not Loading
1. Ensure JavaScript is enabled in your browser
2. Check that all files are in the correct locations
3. Open browser developer tools to check for errors

### Data Loss
1. Regularly export your data as backup
2. localStorage data can be cleared by browser cleaning tools
3. Consider implementing a server-based storage solution for production use

## Deployment Options

The website is ready for deployment on various hosting platforms. Choose the option that best suits your needs:

### **1. Netlify (Recommended)**
1. **Via GitHub:**
   - Push your code to a GitHub repository
   - Connect your GitHub account to Netlify
   - Select the repository and deploy
   - Netlify will automatically use the `netlify.toml` configuration

2. **Direct Upload:**
   - Zip all files in the website folder
   - Go to [Netlify](https://netlify.com) and drag the zip file to deploy
   - Your site will be live instantly with a custom URL

### **2. Vercel**
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the website directory
3. Follow the prompts to deploy
4. Or connect via GitHub at [vercel.com](https://vercel.com)

### **3. GitHub Pages**
1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Enable GitHub Actions for deployment
4. The `.github/workflows/deploy.yml` will handle automatic deployment

### **4. Other Static Hosting Services**
The website works with any static hosting service:
- **Firebase Hosting**: `firebase deploy`
- **Surge.sh**: `surge .`
- **AWS S3 + CloudFront**
- **Azure Static Web Apps**
- **DigitalOcean App Platform**

### **Deployment Checklist**
- [ ] All files are in the website directory
- [ ] Admin panel is accessible at `/admin`
- [ ] CMS functionality works in production
- [ ] Weather API is functioning
- [ ] All external links are working
- [ ] Mobile responsiveness is tested
- [ ] Browser compatibility is verified

### **Post-Deployment**
1. **Test the CMS**: Access `yoursite.com/admin` to ensure the admin panel works
2. **Backup Strategy**: Regularly export CMS data as backup
3. **Custom Domain**: Configure your custom domain in the hosting platform
4. **SSL Certificate**: Ensure HTTPS is enabled (automatic on most platforms)
5. **Analytics**: Consider adding Google Analytics or similar tracking

### **Environment-Specific Considerations**
- **localhost**: CMS data stored in browser localStorage
- **Production**: CMS data persists per user's browser
- **Shared Admin**: Consider implementing cloud storage for shared content management

## Future Enhancements

Potential improvements for production use:
- User authentication and authorization
- Server-side data storage (database)
- Image upload functionality
- Content versioning and revision history
- SEO optimization tools
- Multi-language support
- Email notification system
- Real-time collaborative editing
- Content scheduling and publishing
- Advanced analytics and insights

## Support

For technical issues or feature requests, please refer to the website's contact form or community Facebook groups listed on the main site.

## License

This project is open source and available under the [MIT License](LICENSE).