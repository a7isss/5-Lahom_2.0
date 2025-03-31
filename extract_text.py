import json

# Dictionary to hold the extracted text
extracted_text = {
    "forgot": "forgot",
    "howitworks": "howitworks",
    "lahom_public": "Lahom is now public!",
    "influencer_marketing": "Influencer Marketing Made Easy.",
    "find_hire": "Find and hire top Instagram, YouTube and Facebook influencers to create unique content for your brand.",
    "featured": "Featured",
    "hire_influencers": "Hire top influencers across all platforms",
    "instagram": "Instagram",
    "hire_instagram": "Hire Instagram influencers",
    "youtube": "Youtube",
    "hire_youtube": "Hire Youtube influencers",
    "login_account": "Login to your account",
    "forgot_password": "forgot password?",
    "no_account": "Don’t have an account? Sign up",
    "get_products": "Get your products to a different level",
    "discover_influencers": "Discover influential personalities, execute marketing campaigns, and generate distinctive content for your brand effortlessly.",
    "get_started": "Get Started ...",
    "select_influencer": "Select your favorite Influencer",
    "brand_information": "Brand Information",
    "permanent_address": "Use a permanent address where you can receive mails.",
    "brand_name": "Brand Name",
    "email_address": "Email address",
    "apartment": "Apartment, suite, etc.",
    "office_address": "Office Address",
    "city": "City",
    "state": "State",
    "pin_code": "PIN Code",
    "save": "Save",
    "reviews": "Reviews"
}

# Save the dictionary to a JSON file
with open('daaaaammmn.json', 'w', encoding='utf-8') as json_file:
    json.dump(extracted_text, json_file, ensure_ascii=False, indent=4)

print("Text extracted and saved to daaaaammmn.json")
