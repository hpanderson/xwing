common = require './common'

common.setup()


casper.test.begin "German translations: Rebel", (test) ->
    common.waitForStartup('#rebel-builder')

    common.selectLanguage('Deutsch')

    common.createList('#rebel-builder', [
        {
            ship: 'X-Wing'
            pilot: "Anfängerpilot"
            upgrades: [
                "Protonen-Torpedos"
                "R2 Astromechdroide"
                "Verbesserte Schilde"
            ]
        }
        {
            ship: 'X-Wing'
            pilot: "Luke Skywalker"
            upgrades: [
                "Treffsicherheit"
                null
                "R2-D2"
                null
            ]
        }
        {
            ship: 'YT-1300'
            pilot: "Chewbacca"
            upgrades: [
                "Das Feuer auf mich ziehen"
                "Angriffsraketen"
                "Geheimagent"
                "Aufklärungs-Experte"
                "Millennium Falke"
                "Verbessertes Triebwerk"
            ]
        }

    ])

    common.assertNoMatch(test, "#rebel-builder #{common.selectorForUpgradeIndex(3, 3)}", 'Luke Skywalker')
    common.assertNoMatch(test, "#rebel-builder #{common.selectorForUpgradeIndex(3, 4)}", 'Luke Skywalker')
    common.assertNoMatch(test, "#rebel-builder #{common.selectorForUpgradeIndex(3, 3)}", 'R2-D2 (Crew)')
    common.assertNoMatch(test, "#rebel-builder #{common.selectorForUpgradeIndex(3, 4)}", 'R2-D2 (Crew)')

    common.assertTotalPoints(test, '#rebel-builder', 122)

    common.selectLanguage('English')

    common.assertShipTypeIs(test, '#rebel-builder', 1, 'X-Wing')
    common.assertPilotIs(test, '#rebel-builder', 1, 'Rookie Pilot')
    common.assertUpgradeInSlot(test, '#rebel-builder', 1, 1, 'Proton Torpedoes')
    common.assertUpgradeInSlot(test, '#rebel-builder', 1, 2, 'R2 Astromech')
    common.assertUpgradeInSlot(test, '#rebel-builder', 1, 3, 'Shield Upgrade')

    common.assertShipTypeIs(test, '#rebel-builder', 2, 'X-Wing')
    common.assertPilotIs(test, '#rebel-builder', 2, 'Luke Skywalker')
    common.assertUpgradeInSlot(test, '#rebel-builder', 2, 1, 'Marksmanship')
    common.assertNoUpgradeInSlot(test, '#rebel-builder', 2, 2)
    common.assertUpgradeInSlot(test, '#rebel-builder', 2, 3, 'R2-D2')
    common.assertNoUpgradeInSlot(test, '#rebel-builder', 2, 4)

    common.assertShipTypeIs(test, '#rebel-builder', 3, 'YT-1300')
    common.assertPilotIs(test, '#rebel-builder', 3, 'Chewbacca')
    common.assertUpgradeInSlot(test, '#rebel-builder', 3, 1, 'Draw Their Fire')
    common.assertUpgradeInSlot(test, '#rebel-builder', 3, 2, 'Assault Missiles')
    common.assertUpgradeInSlot(test, '#rebel-builder', 3, 3, 'Intelligence Agent')
    common.assertUpgradeInSlot(test, '#rebel-builder', 3, 4, 'Recon Specialist')
    common.assertUpgradeInSlot(test, '#rebel-builder', 3, 5, 'Millennium Falcon')
    common.assertUpgradeInSlot(test, '#rebel-builder', 3, 6, 'Engine Upgrade')

    common.assertTotalPoints(test, '#rebel-builder', 122)

    common.removeShip('#rebel-builder', 1)
    common.removeShip('#rebel-builder', 1)
    common.removeShip('#rebel-builder', 1)

    .run ->
        test.done()


casper.test.begin "German translations: Imperial", (test) ->
    common.waitForStartup('#rebel-builder')
    common.openEmpireBuilder()

    common.selectLanguage('Deutsch')

    common.createList('#empire-builder', [
        {
            ship: 'TIE Abfangjäger'
            pilot: "Pilot der Alpha-Staffel"
            upgrades: [
                null
                "Tarnvorrichtung"
            ]
        }
        {
            ship: 'TIE Fighter'
            pilot: "Pilot der Akademie"
            upgrades: [
                null
            ]
        }
        {
            ship: 'TIE Abfangjäger'
            pilot: "Soontir Fel"
            upgrades: [
                null
                "TIE der Roten Garde"
                "Verbesserte Hülle"
                "Verbesserte Schilde"
            ]
        }
    ])

    common.assertTotalPoints(test, '#empire-builder', 67)

    common.selectLanguage('English')

    common.assertShipTypeIs(test, '#empire-builder', 1, 'TIE Interceptor')
    common.assertPilotIs(test, '#empire-builder', 1, 'Alpha Squadron Pilot')
    common.assertUpgradeInSlot(test, '#empire-builder', 1, 2, 'Stealth Device')

    common.assertShipTypeIs(test, '#empire-builder', 2, 'TIE Fighter')
    common.assertPilotIs(test, '#empire-builder', 2, 'Academy Pilot')

    common.assertShipTypeIs(test, '#empire-builder', 3, 'TIE Interceptor')
    common.assertPilotIs(test, '#empire-builder', 3, 'Soontir Fel')
    common.assertUpgradeInSlot(test, '#empire-builder', 3, 2, 'Royal Guard TIE')
    common.assertUpgradeInSlot(test, '#empire-builder', 3, 3, 'Hull Upgrade')
    common.assertUpgradeInSlot(test, '#empire-builder', 3, 4, 'Shield Upgrade')

    common.assertTotalPoints(test, '#empire-builder', 67)

    common.removeShip('#empire-builder', 1)
    common.removeShip('#empire-builder', 1)
    common.removeShip('#empire-builder', 1)

    .run ->
        test.done()
