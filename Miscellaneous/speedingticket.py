speed = int(input("What is your speed?"))
ticket_price = 0

if speed <= 65:
    print("You are driving safely")
    print(f'Your ticket price is: {ticket_price}')
elif speed <= 80:
    ticket_price = 80
    print("You are speeding!")
    print(f'Your ticket price is: {ticket_price}')
else:
    ticket_price = 200
    print("Reckless driving!")
    print(f'Your ticket price is: {ticket_price}')