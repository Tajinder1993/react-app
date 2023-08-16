// Inserting Mock Data

// Inserting Mock Categories:
http POST http://localhost:3000/insert-category name="Marketing" vacancy="123 vacancy"
http POST http://localhost:3000/insert-category name="Customer Services" vacancy="100 vacancy"

// Inserting Mock Jobs:
http POST http://localhost:3000/insert-job title="Frontend Developer" type="FULL_TIME" company="Capgemini" salary=80000 applicationsReceived=200 status="APPLIED" location="Toronto, Ontario" contactPerson="John Doe" jobDescription="Frontend developer job description." skillsRequired:='["JavaScript", "HTML", "CSS"]' applicationDeadline="2023-12-31"
http POST http://localhost:3000/insert-job title="Backend Developer" type="CONTRACT" company="Zeta" salary=90000 applicationsReceived=150 status="REJECT" location="Vancouver, BC" contactPerson="Jane Smith" jobDescription="Backend developer job description." skillsRequired:='["Java", "Spring", "SQL"]' applicationDeadline="2023-11-30"

// Inserting Mock Companies:
http POST http://localhost:3000/insert-company logoUrl="public/images/companylogo1.png" name="Hiltons Hotels" location="New York, USA" description="Company description." type="private" founded="1990" companySize="10001+" benefits:='["cafeteria", "free food", "job training", "life insurance"]'
http POST http://localhost:3000/insert-company logoUrl="public/images/companylogo2.png" name="Zeta" location="San Francisco, USA" description="Company description." type="public" founded="2000" companySize="1001-5000" benefits:='["flexible hours", "remote work", "health benefits"]'

// Inserting Mock Contacts:
http POST http://localhost:3000/insert-contact name="Alice Johnson" email="alice@example.com" subject="Inquiry" message="Hello, I have a question."
http POST http://localhost:3000/insert-contact name="Bob Smith" email="bob@example.com" subject="Feedback" message="Just wanted to say great job"


// GET /get-category-list
http GET http://localhost:3000/get-category-list

// GET /get-job-list
http GET http://localhost:3000/get-job-list\?jobType\=FULL_TIME\&company\=Capgemini\&jobTitle\=Frontend%20Developer

// GET /get-company-list
http GET http://localhost:3000/get-company-list

// POST /contact
http POST http://localhost:3000/contact name="John Doe" email="john@example.com" subject="Inquiry" message="Hello, I have a question."

// POST /login
http POST http://localhost:3000/login email="alice@example.com" password="mypassword"

// POST /signup
http POST http://localhost:3000/signup firstName="Alice" lastName="Smith" email="alice@example.com" password="mypassword" confirmPassword="mypassword"