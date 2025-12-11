password = input("What is your password?")

if password == 'python123':
    print("Access granted")
elif password == 'admin':
    print("Admin login not allowed")
else:
    print("Incorrect password")