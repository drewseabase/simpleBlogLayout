coffee_cost = 4.75
coffees_per_week = 5

calc_week1 = coffee_cost * coffees_per_week
calc_per_week = (coffee_cost * coffees_per_week) * 4
print(f'You spent ${calc_week1} on coffee in the first week')
print(f'You spent ${calc_per_week} on coffee in four weeks')

phone_storage = 128
pic_storage = 37.5
apps_storage = 42

calc1 = pic_storage + apps_storage
available_storage = phone_storage - calc1
print(f'You have {available_storage} GB of available storage left')

gym_membership = 60
discount = 0.15
discounted_membership = gym_membership - (gym_membership * discount)
cost_six_months = discounted_membership * 6
print(f'You are eligible for a 15% discount!')
print(f'With that discount your total is now ${discounted_membership}')
print(f'The total price after six months will be ${cost_six_months}')
    

