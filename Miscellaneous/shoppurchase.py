# Ticket prices
child = 6
teenager = 8
adult = 12
elderly = 7

age = int(input("How old are you?"))

if age <= 12:
    print(f'Your ticket costs ${child}')
elif age <= 17:
    print(f'Your ticket costs ${teenager}')
elif age <= 64:
    print(f'Your ticket costs ${adult}')
else:
    print(f'Your ticket costs ${elderly}')


