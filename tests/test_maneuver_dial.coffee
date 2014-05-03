common = require './common'

common.setup()

casper.test.begin "Test maneuver dial presence.", (test) ->
    common.waitForStartup('#rebel-builder')

    common.createList('#rebel-builder', [
        {
            ship: 'X-Wing'
            pilot: 'Red Squadron Pilot'
            upgrades: []
        }
    ])

    casper.then ->
        test.assertVisible("#rebel-builder .info-maneuvers")

    .run ->
        test.done()

casper.test.begin "Test maneuver dial rebel theme.", (test) ->
    common.waitForStartup('#rebel-builder')

    common.createList('#rebel-builder', [
        {
            ship: 'X-Wing'
            pilot: 'Biggs Darklighter'
            upgrades: []
        }
    ])

    casper.then ->
        test.assertVisible("#rebel-builder .info-maneuvers .rebel")

    .run ->
        test.done()

casper.test.begin "Test maneuver dial has red k-turn for X-Wing.", (test) ->
    common.waitForStartup('#rebel-builder')

    common.createList('#rebel-builder', [
        {
            ship: 'X-Wing'
            pilot: 'Wes Janson'
            upgrades: []
        }
    ])

    casper.then ->
      #test.assertVisible("#rebel-builder .info-maneuvers .rebel")
      test.assert(false) # not exactly sure how to check for this - check or a red fill attribute and a bezier curve (C) in the path?

    .run ->
        test.done()
