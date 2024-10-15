// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.tags('item', event => {
    event.add('create_new_age:nuclear/hazmat_suit', '#forge:armors/hazmat')
    event.add('create_new_age:nuclear/hazmat_suit', '#forge:armors/boots/hazmat')
    event.add('create_new_age:nuclear/hazmat_suit', '#forge:armors/leggings/hazmat')
    event.add('create_new_age:nuclear/hazmat_suit', '#forge:armors/chestplates/hazmat')
    event.remove('create_new_age:nuclear/hazmat_suit', 'minecraft:leather_helmet')
    event.remove('create_new_age:nuclear/hazmat_suit', 'minecraft:leather_chestplate')
    event.remove('create_new_age:nuclear/hazmat_suit', 'minecraft:leather_leggings')
    event.remove('create_new_age:nuclear/hazmat_suit', 'minecraft:leather_boots')} )
    