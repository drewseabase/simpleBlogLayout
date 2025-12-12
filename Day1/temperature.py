#Cookie Party Planner
cookies_baked = 125
teammates_coming = 18

amount_for = cookies_baked // teammates_coming
amount_left = cookies_baked % teammates_coming

print(f'There are {amount_for} cookies for all the teammates')
print(f'There are {amount_left} cookies left')

#Calculating savings account growth
principal = 800
rate = 0.05
time_growth = 3

final_amount = round(principal * (1 + rate) ** time_growth, 2)
total_interest = round(final_amount - principal, 2) 

print(f'After three years youll have {final_amount} in your bank account assuming it is compounded once per year')
print(f'Total interest earned is {total_interest}')

#Leveling Up in a game

level_xp = 500
current_xp = 4327

level_current = current_xp // level_xp
xp_towards_nextlvl = current_xp % level_xp
total_xp_needed = level_xp - xp_towards_nextlvl
print(f'Your current level is {level_current}')
print(f'You have {xp_towards_nextlvl} xp in the current level')
print(f'You need {total_xp_needed} xp to reach the next level ')

#Tiling Room
tiles_sold = 12
area_of_room = 4 * 5
area_of_tile = 0.5 * 0.5
tiles_needed = int(area_of_room / area_of_tile)
full_boxes_needed = int(tiles_needed // tiles_sold)

print(f'You need {tiles_needed} tiles and {full_boxes_needed} boxes')

#Splitting Posts into pages

total_posts = 137
posts_per_page = 10

full_pages = total_posts // posts_per_page
posts_spill_over = total_posts % full_pages
total_pages = full_pages + 1
print(f'You have {full_pages} pages with {posts_spill_over} posts on the last one')
print(f'Your total amount of pages are {total_pages}')

