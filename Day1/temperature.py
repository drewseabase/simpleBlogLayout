#Exercise #1
number1 = int(input("Enter an integer "))
number2 = int(input("Enter an integer "))

calculation = number1 * number2

if calculation <= 1000:
    print(f'The result is {calculation}')
else:
    calculation = number1 + number2
    print(f'The result is {calculation}')

#Exercise #2
number3 = int(input("Enter an integer "))

for i in range(number3):
    current_num = i
    previous_num = current_num - 1
    if previous_num < 0:
        previous_num = 0
    sum = current_num + previous_num
    print(f'Current number {current_num} previous number {previous_num} sum: {sum}')

#Exercise #3

word = input("Enter a word ")

print(f'Original String is {word}')
print(f'Printing only even index chars')
for i in range(0, len(word), 3):
    print(word[i])

