let alien: Sprite;
let x: number;
let y: number;
scene.setBackgroundColor(0)
let alien_image = assets.image`al`
let alien_width = 20
let alien_height = 20
let first_alien_x = 10
let first_alien_y = 10
let number_of_rows = 3
let aliens_per_row = 5
let alien_list : Sprite[] = []
for (let row = 0; row < number_of_rows; row++) {
    for (let col = 0; col < aliens_per_row; col++) {
        alien = sprites.create(alien_image, SpriteKind.Enemy)
        x = first_alien_x + col * alien_width
        y = first_alien_y + row * alien_height
        alien.setPosition(x, y)
        alien.vx = 20
        alien_list.push(alien)
    }
}
game.onUpdate(function on_update() {
    let alien: Sprite;
    let hit_edge = false
    for (alien of alien_list) {
        if (alien.x <= 0 || alien.x >= screen.width) {
            hit_edge = true
        }
        
    }
    if (hit_edge) {
        for (alien of alien_list) {
            alien.y += 10
            alien.vx *= -1
        }
    }
    
})
