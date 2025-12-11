# Set up
player_name = input("What is your name? ")
health = 100
gold = 75

sword_price = 65
potion_price = 35
potion_health = 50

has_sword = False
has_potion = False
player_won = False
player_ran = False

print(f'Hello {player_name}')
print("Welcome to Forest Adventure")

print(f'Your current health is {health} and gold is {gold}')
print("You currently have nothing in your inventory!")

# Path choice
path_chosen = input("Pick a path 1 or 2: ")

if path_chosen == '1':
    print("Congrats! You chose the sunny path!")
    gold += 10
    print("You walked safely and found some gold!")
    print(f'Your current gold: {gold}')
elif path_chosen == '2':
    print("Oh no! You chose the dark path!")
    health -= 20
    print("You injured yourself!")
    print(f'Your health is now at {health}')
else:
    print("Not a valid path! You wander around and nothing happens.")

print("============================")

# Merchant
print("The path you chose eventually led you to a merchant who can sell you useful items.")
print(f'Your total health: {health}')
print(f'Your total gold: {gold}')
print("You currently have nothing in your inventory!")

print("1) Buy a sword (65 gold)")
print("2) Buy a potion (35 gold)")
print("3) Walk away")

shop_choice = input("Enter a choice 1, 2, or 3: ")

if shop_choice == '1' and gold >= sword_price:
    has_sword = True
    gold -= sword_price
    print("Congrats! You bought a sword!")
elif shop_choice == '2' and gold >= potion_price:
    has_potion = True
    gold -= potion_price
    print("Congrats! You bought a potion!")
elif shop_choice == '3':
    print("Player walked past the merchant.")
elif shop_choice not in ('1', '2', '3'):
    print("Not a valid choice!")
else:
    print("Not enough gold!")

print(f'Your total health: {health}')
print(f'Your total gold: {gold}')

print("============================")

# Potion use
if has_potion:
    use_potion = input("Do you want to use your potion now? (yes/no): ").lower()

    if use_potion == 'yes':
        has_potion = False
        health += potion_health
        print(f'Current health is: {health}')
    else:
        print("You save the potion for later.")

print("============================")

# Troll encounter
print("Oh no! A dangerous troll jumps out and blocks the path!")
print("Run?")
print("or Fight!")
player_option = input("What will you do? (run/fight): ").lower()

if player_option == 'run':
    if health >= 100:
        print("You successfully escaped...")
        print("but you lost some health and gold on the way!")
        player_ran = True
        health -= 50
        gold = max(0, gold - 15)
    else:
        print("Health is too low, you failed to escape.")
        health = 0
        gold = max(0, gold - 20)

    print(f'Current health: {health}')
    print(f'Current gold: {gold}')

elif player_option == 'fight':
    if has_sword and health >= 100:
        print("You defeated the troll!")
        player_won = True
        gold += 50
    elif has_sword and health < 100:
        print("You defeated the troll!")
        print("but at a cost...")
        health -= 75
        if health <= 0:
            print("You collapse from your wounds...")
            health = 0
            player_won = False
        else:
            player_won = True
        print(f'Health: {health}')
    else:
        print("Oh no! The troll ate you!")
        health = 0
else:
    print("You hesitated and didn't pick a valid choice!")
    print("The troll ate you.")
    print("Game Over!")

# Ending
print("============================")
print(f'Player Name: {player_name}')
print(f'Overall health: {health}')
print(f'Overall gold: {gold}')

if has_sword:
    print('Player ended with a sword.')
if has_potion:
    print('Player ended with a potion.')

if health <= 0:
    print('Player Lost!')
elif player_won:
    print("Player Won!")
elif player_ran:
    print('Player Survived!')
else: 
    print('Player Lost!')



