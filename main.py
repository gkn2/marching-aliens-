scene.set_background_color(0)

alien_image = assets.image("""al""")

alien_width = 20
alien_height = 20
first_alien_x = 10
first_alien_y = 10
number_of_rows = 3
aliens_per_row = 5

alien_list: List[Sprite] = []


for row in range(number_of_rows):
    for col in range(aliens_per_row):
        alien = sprites.create(alien_image, SpriteKind.enemy)
        x = first_alien_x + col * alien_width
        y = first_alien_y + row * alien_height
        alien.set_position(x, y)

        alien.vx = 20

        alien_list.append(alien)


def on_update():
    hit_edge = False

   
    for alien in alien_list:
        if alien.x <= 0 or alien.x >= screen.width:
            hit_edge = True

  
    if hit_edge:
        for alien in alien_list:
            alien.y += 10 
            alien.vx *= -1  

game.on_update(on_update)