# Health status
health = int(input("Enter your health (0–100): "))

if health <= 0:
    print("You died.")
elif health < 30:
    print("You are in critical condition!")
elif health < 70:
    print("You are hurt, be careful.")
else:
    print("You are in great shape!")
    
