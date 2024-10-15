let inter = 'create_new_age:incomplete_fuel'
ServerEvents.recipes(e => {
	e.recipes.createSequencedAssembly([
        Item.of('16x create_new_age:nuclear_fuel').withChance(92.0),
        Item.of('mekanism:dirty_dust_uranium').withChance(8.0)
    ],'vintageimprovements:uranium_sheet',[
        e.recipes.createPressing(inter,inter),
        e.recipes.createDeploying(inter,[inter,'create:electron_tube']),
        e.recipes.createDeploying(inter,[inter,'create:iron_sheet']),
        e.recipes.createDeploying(inter,[inter,'create_new_age:copper_wire']),
        e.recipes.createPressing(inter,inter)
    ]).transitionalItem(inter).loops(1)
})