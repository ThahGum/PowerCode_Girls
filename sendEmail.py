import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Replace these with your actual email credentials and Google Form link
sender_email = "msmbonambi.kwanele@gmail.com"
sender_password = "Zeeltage@061"
recipient_email = "melokuhlezek17@gmail.com"
google_form_link = "https://docs.google.com/forms/your-form-link"

# Email content
subject = "Google Form Link"
body = f"Here's the Google Form link: {google_form_link}"

# Create the email message
msg = MIMEMultipart()
msg["From"] = sender_email
msg["To"] = recipient_email
msg["Subject"] = subject

# Attach the body to the email
msg.attach(MIMEText(body, "plain"))

# Send the email using Gmail's SMTP server
try:
    server = smtplib.SMTP("smtp.gmail.com", 587)
    server.starttls()
    server.login(sender_email, sender_password)
    server.sendmail(sender_email, recipient_email, msg.as_string())
    server.quit()
    print("Email sent successfully to", recipient_email)
except Exception as e:
    print("Failed to send email:", str(e))
