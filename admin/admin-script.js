// CMS Admin Panel JavaScript

class CMSAdmin {
    constructor() {
        this.data = this.loadData();
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupEventListeners();
        this.loadInitialData();
        this.renderAllSections();
    }

    // Default data structure
    getDefaultData() {
        return {
            basic: {
                title: "Indian Expat Community Düsseldorf",
                description: "Your trusted source for expat information, community, and services in Düsseldorf. Explore essential resources, connect with the community, and find everything you need for a smooth expat experience in Düsseldorf.",
                headerDate: "May 25, 2025"
            },
            offices: [
                {
                    name: "Bürgerbüro (Citizens' Office)",
                    url: "https://www.duesseldorf.de/buergerservice.html",
                    description: "For Anmeldung (address registration), ID, passport, and other citizen services.",
                    icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png"
                },
                {
                    name: "Ausländerbehörde (Foreigners' Office)",
                    url: "https://www.duesseldorf.de/auslaenderamt.html",
                    description: "Residence permits, visa, and expat immigration services.",
                    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png"
                },
                {
                    name: "Finanzamt Düsseldorf (Tax Office)",
                    url: "https://www.finanzamt.nrw.de/",
                    description: "Tax ID, tax returns, and all tax-related matters for residents.",
                    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                }
            ],
            steps: [
                "Register your address (Anmeldung) at the Bürgerbüro.",
                "Open a German bank account.",
                "Get health insurance (public or private).",
                "Apply for a residence permit (if required).",
                "Register for tax ID at the Finanzamt.",
                "Explore local transport and get a monthly ticket."
            ],
            restaurants: [
                {
                    name: "Spice Village",
                    description: "Authentic North Indian cuisine.",
                    url: "#",
                    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
                },
                {
                    name: "Bombay Curry",
                    description: "Popular for curries and tandoori.",
                    url: "#",
                    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80"
                }
            ],
            groups: [
                {
                    name: "Indians in Düsseldorf",
                    url: "https://www.facebook.com/groups/indiansindusseldorf/"
                },
                {
                    name: "Düsseldorf Indian Community",
                    url: "https://www.facebook.com/groups/duesseldorfindians/"
                }
            ],
            services: [
                {
                    name: "Electricians",
                    description: "Find on Facebook Groups",
                    url: "#",
                    icon: "https://cdn-icons-png.flaticon.com/512/1256/1256650.png"
                },
                {
                    name: "Maids & Cleaners",
                    description: "Find on Facebook Groups",
                    url: "#",
                    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png"
                }
            ]
        };
    }

    // Load data from localStorage
    loadData() {
        const saved = localStorage.getItem('dusseldorf-cms-data');
        return saved ? JSON.parse(saved) : this.getDefaultData();
    }

    // Save data to localStorage
    saveData() {
        localStorage.setItem('dusseldorf-cms-data', JSON.stringify(this.data));
        this.showNotification('Data saved successfully!', 'success');
    }

    // Load initial data into forms
    loadInitialData() {
        document.getElementById('site-title').value = this.data.basic.title;
        document.getElementById('site-description').value = this.data.basic.description;
        document.getElementById('header-date').value = this.data.basic.headerDate;
    }

    // Setup navigation
    setupNavigation() {
        const navBtns = document.querySelectorAll('.nav-btn');
        const sections = document.querySelectorAll('.content-section');

        navBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetSection = btn.dataset.section;
                
                // Update nav buttons
                navBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Update sections
                sections.forEach(s => s.classList.remove('active'));
                document.getElementById(`${targetSection}-section`).classList.add('active');
            });
        });
    }

    // Setup event listeners
    setupEventListeners() {
        // Save all changes
        document.getElementById('save-all').addEventListener('click', () => {
            this.collectAllData();
            this.saveData();
        });

        // Preview site
        document.getElementById('preview-site').addEventListener('click', () => {
            this.collectAllData();
            this.saveData();
            window.open('../index.html', '_blank');
        });

        // Export data
        document.getElementById('export-data').addEventListener('click', () => {
            this.exportData();
        });

        // Import data
        document.getElementById('import-btn').addEventListener('click', () => {
            document.getElementById('import-data').click();
        });

        document.getElementById('import-data').addEventListener('change', (e) => {
            this.importData(e.target.files[0]);
        });

        // Add buttons
        document.getElementById('add-office').addEventListener('click', () => this.addOffice());
        document.getElementById('add-step').addEventListener('click', () => this.addStep());
        document.getElementById('add-restaurant').addEventListener('click', () => this.addRestaurant());
        document.getElementById('add-group').addEventListener('click', () => this.addGroup());
        document.getElementById('add-service').addEventListener('click', () => this.addService());

        // Basic info changes
        document.getElementById('site-title').addEventListener('input', (e) => {
            this.data.basic.title = e.target.value;
        });
        document.getElementById('site-description').addEventListener('input', (e) => {
            this.data.basic.description = e.target.value;
        });
        document.getElementById('header-date').addEventListener('input', (e) => {
            this.data.basic.headerDate = e.target.value;
        });
    }

    // Render all sections
    renderAllSections() {
        this.renderOffices();
        this.renderSteps();
        this.renderRestaurants();
        this.renderGroups();
        this.renderServices();
    }

    // Render offices
    renderOffices() {
        const container = document.getElementById('offices-list');
        container.innerHTML = '';
        
        this.data.offices.forEach((office, index) => {
            const card = document.createElement('div');
            card.className = 'item-card';
            card.innerHTML = `
                <button class="btn btn-danger remove-item" onclick="cms.removeOffice(${index})">Remove</button>
                <div class="form-row">
                    <div class="form-group">
                        <label>Office Name</label>
                        <input type="text" value="${office.name}" onchange="cms.updateOffice(${index}, 'name', this.value)">
                    </div>
                    <div class="form-group">
                        <label>Website URL</label>
                        <input type="url" value="${office.url}" onchange="cms.updateOffice(${index}, 'url', this.value)">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Description</label>
                        <textarea rows="2" onchange="cms.updateOffice(${index}, 'description', this.value)">${office.description}</textarea>
                    </div>
                    <div class="form-group">
                        <label>Icon URL</label>
                        <input type="url" value="${office.icon}" onchange="cms.updateOffice(${index}, 'icon', this.value)">
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // Render steps
    renderSteps() {
        const container = document.getElementById('steps-list');
        container.innerHTML = '';
        
        this.data.steps.forEach((step, index) => {
            const card = document.createElement('div');
            card.className = 'item-card';
            card.innerHTML = `
                <button class="btn btn-danger remove-item" onclick="cms.removeStep(${index})">Remove</button>
                <div class="form-row single">
                    <div class="form-group">
                        <label>Step ${index + 1}</label>
                        <textarea rows="2" onchange="cms.updateStep(${index}, this.value)">${step}</textarea>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // Render restaurants
    renderRestaurants() {
        const container = document.getElementById('restaurants-list');
        container.innerHTML = '';
        
        this.data.restaurants.forEach((restaurant, index) => {
            const card = document.createElement('div');
            card.className = 'item-card';
            card.innerHTML = `
                <button class="btn btn-danger remove-item" onclick="cms.removeRestaurant(${index})">Remove</button>
                <div class="form-row">
                    <div class="form-group">
                        <label>Restaurant Name</label>
                        <input type="text" value="${restaurant.name}" onchange="cms.updateRestaurant(${index}, 'name', this.value)">
                    </div>
                    <div class="form-group">
                        <label>Website URL</label>
                        <input type="url" value="${restaurant.url}" onchange="cms.updateRestaurant(${index}, 'url', this.value)">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Description</label>
                        <textarea rows="2" onchange="cms.updateRestaurant(${index}, 'description', this.value)">${restaurant.description}</textarea>
                    </div>
                    <div class="form-group">
                        <label>Image URL</label>
                        <input type="url" value="${restaurant.image}" onchange="cms.updateRestaurant(${index}, 'image', this.value)">
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // Render groups
    renderGroups() {
        const container = document.getElementById('groups-list');
        container.innerHTML = '';
        
        this.data.groups.forEach((group, index) => {
            const card = document.createElement('div');
            card.className = 'item-card';
            card.innerHTML = `
                <button class="btn btn-danger remove-item" onclick="cms.removeGroup(${index})">Remove</button>
                <div class="form-row">
                    <div class="form-group">
                        <label>Group Name</label>
                        <input type="text" value="${group.name}" onchange="cms.updateGroup(${index}, 'name', this.value)">
                    </div>
                    <div class="form-group">
                        <label>Facebook URL</label>
                        <input type="url" value="${group.url}" onchange="cms.updateGroup(${index}, 'url', this.value)">
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // Render services
    renderServices() {
        const container = document.getElementById('services-list');
        container.innerHTML = '';
        
        this.data.services.forEach((service, index) => {
            const card = document.createElement('div');
            card.className = 'item-card';
            card.innerHTML = `
                <button class="btn btn-danger remove-item" onclick="cms.removeService(${index})">Remove</button>
                <div class="form-row">
                    <div class="form-group">
                        <label>Service Name</label>
                        <input type="text" value="${service.name}" onchange="cms.updateService(${index}, 'name', this.value)">
                    </div>
                    <div class="form-group">
                        <label>URL/Link</label>
                        <input type="url" value="${service.url}" onchange="cms.updateService(${index}, 'url', this.value)">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Description</label>
                        <textarea rows="2" onchange="cms.updateService(${index}, 'description', this.value)">${service.description}</textarea>
                    </div>
                    <div class="form-group">
                        <label>Icon URL</label>
                        <input type="url" value="${service.icon}" onchange="cms.updateService(${index}, 'icon', this.value)">
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // Add methods
    addOffice() {
        this.data.offices.push({
            name: "New Office",
            url: "#",
            description: "Description here",
            icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png"
        });
        this.renderOffices();
    }

    addStep() {
        this.data.steps.push("New step description");
        this.renderSteps();
    }

    addRestaurant() {
        this.data.restaurants.push({
            name: "New Restaurant",
            description: "Description here",
            url: "#",
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
        });
        this.renderRestaurants();
    }

    addGroup() {
        this.data.groups.push({
            name: "New Facebook Group",
            url: "https://www.facebook.com/groups/"
        });
        this.renderGroups();
    }

    addService() {
        this.data.services.push({
            name: "New Service",
            description: "Description here",
            url: "#",
            icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png"
        });
        this.renderServices();
    }

    // Update methods
    updateOffice(index, field, value) {
        this.data.offices[index][field] = value;
    }

    updateStep(index, value) {
        this.data.steps[index] = value;
    }

    updateRestaurant(index, field, value) {
        this.data.restaurants[index][field] = value;
    }

    updateGroup(index, field, value) {
        this.data.groups[index][field] = value;
    }

    updateService(index, field, value) {
        this.data.services[index][field] = value;
    }

    // Remove methods
    removeOffice(index) {
        this.data.offices.splice(index, 1);
        this.renderOffices();
    }

    removeStep(index) {
        this.data.steps.splice(index, 1);
        this.renderSteps();
    }

    removeRestaurant(index) {
        this.data.restaurants.splice(index, 1);
        this.renderRestaurants();
    }

    removeGroup(index) {
        this.data.groups.splice(index, 1);
        this.renderGroups();
    }

    removeService(index) {
        this.data.services.splice(index, 1);
        this.renderServices();
    }

    // Utility methods
    collectAllData() {
        // Basic info is already updated via event listeners
        // Other data is updated via onchange events
    }

    exportData() {
        const dataStr = JSON.stringify(this.data, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'dusseldorf-cms-data.json';
        link.click();
        URL.revokeObjectURL(url);
        this.showNotification('Data exported successfully!', 'info');
    }

    importData(file) {
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedData = JSON.parse(e.target.result);
                this.data = importedData;
                this.saveData();
                this.loadInitialData();
                this.renderAllSections();
                this.showNotification('Data imported successfully!', 'success');
            } catch (error) {
                this.showNotification('Error importing data: Invalid JSON file', 'error');
            }
        };
        reader.readAsText(file);
    }

    showNotification(message, type = 'info') {
        const notification = document.getElementById('notification');
        notification.textContent = message;
        notification.className = `notification ${type}`;
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
}

// Initialize CMS
const cms = new CMSAdmin();