        // Hero Slider Script
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }
        setInterval(nextSlide, 5000);

        // Testimonials Auto Rotation Script
        let currentTestimonial = 0;
        const testimonials = document.querySelectorAll('.testimonial-card');
        function nextTestimonial() {
            testimonials[currentTestimonial].classList.remove('active');
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            testimonials[currentTestimonial].classList.add('active');
        }
        setInterval(nextTestimonial, 4500);

        // Dynamic Review Submission Script
        function submitReview(event) {
            event.preventDefault();
            const name = document.getElementById('reviewName').value;
            const dest = document.getElementById('reviewDestination').value;
            const text = document.getElementById('reviewText').value;

            const slider = document.getElementById('testimonialsSlider');
            const newCard = document.createElement('div');
            newCard.className = 'testimonial-card active';
            newCard.innerHTML = `
                <p>"${text}"</p>
                <h4>${name}</h4>
                <span>${dest}</span>
            `;

            testimonials.forEach(card => card.classList.remove('active'));
            slider.appendChild(newCard);
            
            alert('Thank you! Your testimonial has been submitted successfully.');
            document.getElementById('reviewForm').reset();
        }

        // FAQ Toggle Function
        function toggleFaq(element) {
            const item = element.parentElement;
            item.classList.toggle('active');
            const span = element.querySelector('span');
            span.textContent = item.classList.contains('active') ? '-' : '+';
        }

        // Live WhatsApp Inquiry Pre-Filler
        function openWhatsAppInquiry(destination) {
            const phoneNumber = "233242929381";
            const message = encodeURIComponent(`Hello Akwantufuo Travel Consult, I am interested in travel and visa support for ${destination}. Please guide me on the requirements.`);
            window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        }

        // Interactive Eligibility Quiz State Handler
        let quizData = { goal: '', dest: '' };
        function setQuizGoal(goal) {
            quizData.goal = goal;
            document.getElementById('quizStep1').classList.remove('active');
            document.getElementById('quizStep2').classList.add('active');
        }

        function setQuizDest(dest) {
            quizData.dest = dest;
            document.getElementById('quizStep2').classList.remove('active');
            document.getElementById('quizStep3').classList.add('active');
            
            document.getElementById('quizResultText').textContent = `Based on your goal (${quizData.goal}) for ${quizData.dest}, you are fully qualified for our expert consultancy support!`;
            
            const waMsg = encodeURIComponent(`Hello Akwantufuo Travel Consult, I took your website quiz. I am interested in ${quizData.goal} for ${quizData.dest}. Please guide me on the next steps.`);
            document.getElementById('quizWhatsAppBtn').href = `https://wa.me/233242929381?text=${waMsg}`;
        }

        // Live Social Proof Toast Notification Simulator
        const toastItems = [
            { icon: "🇬🇧", title: "Kofi from Agona Swedru", desc: "Booked UK Visa support 6 mins ago" },
            { icon: "🇨🇦", title: "Abigail from Cape Coast", desc: "Secured Canadian university admission guide" },
            { icon: "✈️", title: "Kwame from Winneba", desc: "Booked flight tickets to London" },
            { icon: "🎓", title: "Yaa from Swedru", desc: "Started Study Abroad counseling today" }
        ];

        function showLiveToast() {
            const toast = document.getElementById('liveToast');
            const randomItem = toastItems[Math.floor(Math.random() * toastItems.length)];
            
            document.getElementById('toastIcon').textContent = randomItem.icon;
            document.getElementById('toastTitle').textContent = randomItem.title;
            document.getElementById('toastDesc').textContent = randomItem.desc;

            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 5000);
        }
        setInterval(showLiveToast, 12000);

        // Comprehensive Services Database
        const servicesList = [
            { id: 1, category: "travel", title: "Travel Consultancy", desc: "Expert advisory services to guide your destination choices and paperwork requirements.", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80" },
            { id: 2, category: "travel", title: "Flight Reservation", desc: "Secure the best flight routes and airline deals matching your schedule.", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80" },
            { id: 3, category: "travel", title: "Ticketing", desc: "Fast and reliable issuance of airline tickets for local and international flights.", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80" },
            { id: 4, category: "docs", title: "Passport Application Support", desc: "Seamless guidance through new passport acquisitions and renewals.", img: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80" },
            { id: 5, category: "docs", title: "Birth Certificate Application", desc: "Assistance with obtaining legitimate legal birth documentation.", img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80" },
            { id: 6, category: "travel", title: "Trip & Tour Guide", desc: "Customized itineraries and expert tour guidance for holidaymakers.", img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80" },
            { id: 7, category: "travel", title: "Holidays & Vacations", desc: "Curated vacation packages tailored for memorable leisure experiences.", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" },
            { id: 8, category: "travel", title: "Hotel Booking", desc: "Comfortable and secure accommodation bookings worldwide.", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80" },
            { id: 9, category: "travel", title: "Travel Insurance", desc: "Comprehensive coverage packages protecting your health and luggage abroad.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" },
            { id: 10, category: "travel", title: "Travel Itinerary", desc: "Detailed step-by-step travel schedule creation for visa filings and trips.", img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80" },
            { id: 11, category: "travel", title: "Visa Application Support", desc: "Professional counseling and filing assistance for successful visa approvals.", img: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=600&q=80" },
            { id: 12, category: "docs", title: "Documentations", desc: "General documentation processing and verification support.", img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80" },
            { id: 13, category: "study", title: "Conferences", desc: "Logistics and registration support for international business or academic conferences.", img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80" },
            { id: 14, category: "study", title: "Study Abroad Programs", desc: "End-to-end guidance for university admissions and student visas overseas.", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80" },
            { id: 15, category: "travel", title: "Business Trips", desc: "Corporate travel arrangement packages designed for busy professionals.", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80" },
            { id: 16, category: "study", title: "Work Abroad Program", desc: "Verified international employment pathway programs.", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80" },
            { id: 17, category: "travel", title: "Airport Pickup & Escort", desc: "Reliable ground transport arrangements right upon landing.", img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=600&q=80" },
            { id: 18, category: "travel", title: "Tourism Management Etc.", desc: "Full-scale tourism and leisure management provisions.", img: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=600&q=80" }
        ];

        const gridContainer = document.getElementById('servicesGrid');
        const selectDropdown = document.getElementById('serviceSelect');

        function renderServices(filter = 'all') {
            gridContainer.innerHTML = '';
            const filtered = filter === 'all' ? servicesList : servicesList.filter(s => s.category === filter);
            
            filtered.forEach(service => {
                const card = document.createElement('div');
                card.className = 'service-card';
                card.innerHTML = `
                    <div class="service-img-wrapper">
                        <img src="${service.img}" alt="${service.title}" loading="lazy">
                        <div class="service-badge">${service.category.toUpperCase()}</div>
                    </div>
                    <div class="service-content">
                        <h4>${service.title}</h4>
                        <p>${service.desc}</p>
                        <button class="service-action" onclick="openModal('${service.title}', '${service.desc}')">Learn More →</button>
                    </div>
                `;
                gridContainer.appendChild(card);
            });
        }

        function filterServices(category) {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            renderServices(category);
        }

        servicesList.forEach(service => {
            const option = document.createElement('option');
            option.value = service.title;
            option.textContent = service.title;
            selectDropdown.appendChild(option);
        });

        renderServices('all');

        function openModal(title, desc) {
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalDesc').textContent = desc;
            document.getElementById('serviceModal').classList.add('active');
        }

        function closeModal() {
            document.getElementById('serviceModal').classList.remove('active');
        }

        function calculateEstimate() {
            const serviceType = document.getElementById('estService').value;
            const speed = document.getElementById('estSpeed').value;
            let timeText = "2 - 4 Weeks";
            let descText = "Comprehensive file compilation and direct advisor oversight.";

            if(serviceType === 'visa') {
                timeText = speed === 'express' ? "10 - 15 Days" : "3 - 6 Weeks";
                descText = "Direct consulate appointment handling and application package review.";
            } else if(serviceType === 'study') {
                timeText = speed === 'express' ? "3 - 5 Weeks" : "6 - 10 Weeks";
                descText = "University admissions matching, acceptance tracking, and student visa filing.";
            } else if(serviceType === 'work') {
                timeText = speed === 'express' ? "4 - 8 Weeks" : "2 - 4 Months";
                descText = "Employment background vetting and structured legal processing support.";
            } else if(serviceType === 'ticketing') {
                timeText = speed === 'express' ? "Instant (Same Day)" : "24 - 48 Hours";
                descText = "Optimized flight itinerary routing with airline booking confirmation.";
            }

            document.getElementById('estTime').textContent = timeText;
            document.getElementById('estDesc').textContent = descText;
        }

        setTimeout(() => {
            const popup = document.getElementById('chatPopup');
            if(popup) popup.style.display = 'none';
        }, 10000);
