// CMS Content Loader for Düsseldorf Indians Website

class CMSLoader {
    constructor() {
        this.data = this.loadData();
        this.init();
    }

    // Load data from localStorage
    loadData() {
        const saved = localStorage.getItem('dusseldorf-cms-data');
        if (saved) {
            return JSON.parse(saved);
        }
        
        // Return null if no CMS data exists - use original HTML content
        return null;
    }

    // Initialize CMS loader
    init() {
        if (!this.data) return; // No CMS data, keep original content
        
        document.addEventListener('DOMContentLoaded', () => {
            this.loadBasicInfo();
            this.loadOffices();
            this.loadSteps();
            this.loadRestaurants();
            this.loadGroups();
            this.loadServices();
        });
    }

    // Load basic information
    loadBasicInfo() {
        const { basic } = this.data;
        
        // Update page title
        document.title = basic.title;
        
        // Update header date
        const dateElement = document.querySelector('.nyt-date');
        if (dateElement) dateElement.textContent = basic.headerDate;
        
        // Update logo/site title
        const logoElement = document.querySelector('.nyt-logo');
        if (logoElement) logoElement.textContent = basic.title.replace(' Düsseldorf', '').replace('Indian Expat Community', 'Düsseldorf Indians');
        
        // Update main heading
        const mainHeading = document.querySelector('.nyt-featured h1');
        if (mainHeading) mainHeading.textContent = basic.title.replace('Indian Expat Community ', '').replace(' Düsseldorf', ' Indians');
        
        // Update description
        const description = document.querySelector('.nyt-featured-desc');
        if (description) description.textContent = basic.description;
    }

    // Load government offices
    loadOffices() {
        const tableBody = document.querySelector('.nyt-table-offices tbody');
        if (!tableBody || !this.data.offices) return;
        
        tableBody.innerHTML = '';
        
        this.data.offices.forEach(office => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${office.icon}" alt="Office" class="nyt-icon"></td>
                <td><strong>${office.name}:</strong></td>
                <td><a href="${office.url}" target="_blank">Official Website</a></td>
                <td>${office.description}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Load first steps
    loadSteps() {
        const stepsList = document.querySelector('.nyt-list-steps');
        if (!stepsList || !this.data.steps) return;
        
        stepsList.innerHTML = '';
        
        this.data.steps.forEach((step, index) => {
            const li = document.createElement('li');
            li.setAttribute('data-step', index + 1);
            li.textContent = step;
            stepsList.appendChild(li);
        });
    }

    // Load restaurants
    loadRestaurants() {
        const restaurantsContainer = document.querySelector('.nyt-restaurants');
        if (!restaurantsContainer || !this.data.restaurants) return;
        
        restaurantsContainer.innerHTML = '';
        
        this.data.restaurants.forEach(restaurant => {
            const card = document.createElement('div');
            card.className = 'nyt-restaurant-card';
            card.innerHTML = `
                <img src="${restaurant.image}" alt="${restaurant.name}" class="nyt-restaurant-img">
                <div>
                    <strong>${restaurant.name}</strong><br>
                    ${restaurant.description}<br>
                    <a href="${restaurant.url}">Website</a>
                </div>
            `;
            restaurantsContainer.appendChild(card);
        });
    }

    // Load Facebook groups
    loadGroups() {
        const groupsList = document.querySelector('.nyt-list-groups');
        const sidebarGroups = document.querySelector('.nyt-side-card:last-child ul');
        
        if (this.data.groups) {
            // Update main groups section
            if (groupsList) {
                groupsList.innerHTML = '';
                this.data.groups.forEach(group => {
                    const li = document.createElement('li');
                    li.innerHTML = `
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" class="nyt-icon">
                        <a href="${group.url}" target="_blank">${group.name}</a>
                    `;
                    groupsList.appendChild(li);
                });
            }
            
            // Update sidebar groups
            if (sidebarGroups) {
                sidebarGroups.innerHTML = '';
                this.data.groups.forEach(group => {
                    const li = document.createElement('li');
                    li.innerHTML = `<a href="${group.url}" target="_blank">${group.name}</a>`;
                    sidebarGroups.appendChild(li);
                });
            }
        }
    }

    // Load services
    loadServices() {
        const servicesList = document.querySelector('.nyt-list-services');
        if (!servicesList || !this.data.services) return;
        
        servicesList.innerHTML = '';
        
        this.data.services.forEach(service => {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="${service.icon}" alt="${service.name}" class="nyt-icon">
                <strong>${service.name}:</strong>
                <a href="${service.url}">${service.description}</a>
            `;
            servicesList.appendChild(li);
        });
    }
}

// Initialize CMS Loader
new CMSLoader();