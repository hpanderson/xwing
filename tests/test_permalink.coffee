common = require './common'

common.setup()


casper.test.begin "Permalink", (test) ->
    common.waitForStartup('#rebel-builder')

    common.createList('#rebel-builder', [
        {
            ship: 'X-Wing'
            pilot: 'Red Squadron Pilot'
            upgrades: [
                null
                null
                null
            ]
        }
        {
            ship: 'X-Wing'
            pilot: 'Luke Skywalker'
            upgrades: [
                'Deadeye'
                'Proton Torpedoes'
                'R2-D2'
                null
            ]
        }
        {
            ship: 'YT-1300'
            pilot: 'Chewbacca'
            upgrades: [
                'Draw Their Fire'
                null
                'Nien Nunb'
                'Gunner'
                'Millennium Falcon'
                'Engine Upgrade'
            ]
        }
        {
            ship: 'B-Wing'
            pilot: 'Ibtisam'
            upgrades: [
                'Push the Limit'
                'Advanced Sensors'
                'Autoblaster'
                null
                null
                null
            ]
        }
    ])

    .then ->
        @click '#rebel-builder .permalink'
        @waitForUrl(/d=/)
    .then ->
        @waitUntilVisible '#rebel-builder .total-points'
    .then ->
        test.assertUrlMatch /f=/, 'Faction specified in permalink'
        test.assertUrlMatch /d=/, 'Serialization in permalink'
    common.assertTotalPoints(test, '#rebel-builder', 153)

    .run ->
        test.done()


casper.test.begin "Weird Rebel permalink v2", (test) ->
    common.waitForStartup('#rebel-builder', 'index.html?f=Rebel%20Alliance&d=v2!29:10,72:7:2:U.27;44:-1,-1,-1,-1:-1:-1:;44:-1,-1,-1,-1:-1:-1:;6:-1,-1,-1,70,18:-1:-1:')
    .then ->
        @waitUntilVisible '#rebel-builder .total-points'
    common.assertTotalPoints(test, '#rebel-builder', 99)

    .run ->
        test.done()


casper.test.begin "Weird Empire permalink v2", (test) ->
    common.waitForStartup('#empire-builder', 'index.html?f=Galactic%20Empire&d=v2!38:-1,-1,-1,-1,-1:1:-1:U.1;28:-1:5:1:M.5;10::-1:-1:;10::-1:-1:')
    .then ->
        @waitUntilVisible '#empire-builder .total-points'
    common.assertTotalPoints(test, '#empire-builder', 99)

    .run ->
        test.done()

casper.test.begin "Weird Rebel standard permalink v3", (test) ->
    common.waitForStartup('#rebel-builder', 'index.html?f=Rebel%20Alliance&d=v3!s!29:10,72:7:2:U.27;44:-1,-1,-1,-1:-1:-1:;44:-1,-1,-1,-1:-1:-1:;6:-1,-1,-1,70,18:-1:-1:')
    .then ->
        @waitUntilVisible '#rebel-builder .total-points'
    common.assertTotalPoints(test, '#rebel-builder', 99)
    common.assertGameTypeIs(test, '#rebel-builder', 'standard')
    common.assertPointsRemaining(test, '#rebel-builder', 1)

    .run ->
        test.done()


casper.test.begin "Weird Empire standard permalink v3", (test) ->
    common.waitForStartup('#empire-builder', 'index.html?f=Galactic%20Empire&d=v3!s!38:-1,-1,-1,-1,-1:1:-1:U.1;28:-1:5:1:M.5;10::-1:-1:;10::-1:-1:')
    .then ->
        @waitUntilVisible '#empire-builder .total-points'
    common.assertTotalPoints(test, '#empire-builder', 99)
    common.assertGameTypeIs(test, '#rebel-builder', 'standard')
    common.assertPointsRemaining(test, '#rebel-builder', 1)

    .run ->
        test.done()

casper.test.begin "Epic permalink v3", (test) ->
    common.waitForStartup('#rebel-builder', 'index.html?f=Rebel%20Alliance&d=v3!e!29:10,72:7:2:U.27;44:-1,-1,-1,-1:-1:-1:;44:-1,-1,-1,-1:-1:-1:;6:-1,-1,-1,70,18:-1:-1:;72:-1,-1,-1:-1:-1:;72:-1,-1,-1:-1:-1:;72:-1,-1,-1:-1:-1:;33:21,47:-1:3:;33:21,47:-1:3:;33:21,47:-1:3:')
    .then ->
        @waitUntilVisible '#rebel-builder .total-points'
    common.assertTotalPoints(test, '#rebel-builder', 300)
    common.assertPointsRemaining(test, '#rebel-builder', 0)
    common.assertGameTypeIs(test, '#rebel-builder', 'epic')

    .run ->
        test.done()

casper.test.begin "Custom permalink v3", (test) ->
    common.waitForStartup('#rebel-builder', 'index.html?f=Rebel%20Alliance&d=v3!c=256!31:-1,-1:-1:-1:;31:-1,-1:-1:-1:;31:-1,-1:-1:-1:;31:-1,-1:-1:-1:;43:-1,-1,-1,-1:-1:-1:;43:-1,-1,-1,-1:-1:-1:;43:-1,-1,-1,-1:-1:-1:;43:-1,-1,-1,-1:-1:-1:;3:-1,-1:-1:-1:;3:-1,-1:-1:-1:;3:-1,-1:-1:-1:;3:-1,-1:-1:-1:')
    .then ->
        @waitUntilVisible '#rebel-builder .total-points'
    common.assertTotalPoints(test, '#rebel-builder', 256)
    common.assertPointsRemaining(test, '#rebel-builder', 0)
    common.assertGameTypeIs(test, '#rebel-builder', 'custom')

    .run ->
        test.done()

