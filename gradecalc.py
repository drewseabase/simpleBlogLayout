grade = int(input("Enter your grade (0/100):"))

if 90<= grade <= 100:
    print("You got an A!")
elif 80<=grade<=89:
    print("You got a B")
elif 70<=grade<=79:
    print("You got a C")
elif 60<=grade<=69:
    print("You got a D")
elif grade <= 60:
    print("F")