const sample = `
waves:
  recurrent:
    def1:
      type: default
      priority: 1
      frequency: 1
      monsters:
        zombies: 10
        skeletons: 4
        exploding_sheep: 5
    def2:
      type: default
      priority: 2
      frequency: 1
      wave: 5
      monsters:
        zombies: 10
        skeletons: 6
        creepers: 4
    spec1:
      type: special
      priority: 5
      frequency: 4
      wave: 4
      monsters:
        powered_creepers: 10
        angry_wolves: 10
        zombie_pigmen: 10
    upgrade1:
      type: upgrade
      priority: 7
      frequency: 10
      wave: 10
      upgrades:
        all: potion:instant_heal:2
        Archer: arrow:64
        Oddjob: tnt:2, netherrack
  single:
    swarm1:
      type: swarm
      wave: 7
      monster: slimes
      amount: medium
    boss1:
      type: boss
      wave: 9
      monster: spider
      health: medium
      abilities: fire-aura, disorient-target, fireballs, throw-nearby
      effects: speed:3:20, wither, increase_damage:1
      ability-interval: 5
    boss2:
      type: boss
      wave: 13
      monster: zombie_pigman
      health: high
      abilities: root-target, arrows, fetch-distant, fire-aura
      drops: lever, stone_button
    upgrade2:
      type: upgrade
      wave: 14
      upgrades:
        all: potion:instant_heal:2
        Knight:
          armor: diamond_helmet
          items: diamond_sword sharpness:2;knockback:1
        Tank:
          items: iron_sword knockback:3
        Oddjob:
          armor: iron_chestplate, iron_leggings
        Wizard:
          permissions:
          - magicspells.cast.ChainLightning
    boss3:
      type: boss
      wave: 16
      monster: wolf
      health: psycho
      abilities: warp-to-player, fire-aura, throw-nearby, fireballs, fetch-target, arrows
      effects: slow:1
      ability-interval: 1
      reward: diamond_chestplate
    supply1:
      type: supply
      wave: 19
      monsters:
        cows: 10
        pigs: 5
      drops: grilled_pork, cooked_chicken, cooked_beef, cooked_fish:2
    boss4:
      type: boss
      wave: 20
      monster: blaze
      health: low
      abilities: fire-aura, throw-nearby
      effects: speed
      reward: diamond_helmet
`

export default sample.trim()
