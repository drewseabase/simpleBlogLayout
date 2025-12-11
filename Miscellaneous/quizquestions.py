#Are you allowed in?

age = int(input("How old are you? "))

if age < 18:
    print("Access denied. You are too young.")
elif age >= 18:
    has_Id = input("Do you have valid ID? (yes/no)").lower()
    if has_Id == 'yes':
        print("Access granted!")
    elif has_Id == 'no':
        print("You are old enough, but need an ID.")

#Simple Damage System 
print("=================")

health = 100
damage = int(input("How much damage did you take? "))
health -= damage

if health < 0:
    print("You have fallen in battle.")
elif health <= 29:
    print("You are in critical condition.")
elif health <= 70:
    print("You are hurt.")
elif health <= 100:
    print("You are in good shape!")

#Store checkout
print("=================")

item_price = int(input("How much is your item? "))
wallet_amount = int(input("How much $ in your wallet? "))

if wallet_amount >= item_price:
    print("Purchase succesful!")
    wallet_amount -= item_price
    print(f'Money left: {wallet_amount}')
else:
    print("Purchase failed. You need more money!")
