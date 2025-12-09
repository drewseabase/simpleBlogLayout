gold = 10
item_price = 18
print(f'You have {gold} gold pieces!')

purchase_item = input("Would you like to purchase an item for 18 gold pieces? (Yes/No)")

if purchase_item == 'yes' and gold >= item_price:
    gold = gold - item_price
    print("Item purchased!")
    print(f'You now have {gold} gold pieces!')
elif purchase_item == 'yes' and gold <= item_price:
    print("Not enough gold!")
else:
    print("Maybe next time!")

