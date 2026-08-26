<?php
declare(strict_types=1);

// DigimonTcg SDK configuration

class DigimonTcgConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "DigimonTcg",
                "slug" => "digimon-tcg",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://digimoncard.io/api-public",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "get_all_card" => [],
                    "search" => [],
                ],
            ],
            "entity" => [
        'get_all_card' => [
          'fields' => [
            [
              'name' => 'attribute',
              'short' => 'Digimon attribute (e.g., Vaccine, Virus, Data, Free)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'cardnumber',
              'short' => 'Unique card number identifier',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'cardset',
              'short' => 'Card set or series this card belongs to',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'color',
              'short' => 'Card color (e.g., Red, Blue, Yellow, Green, Black, Purple, White)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'digivolve1cost',
              'short' => 'First digivolution cost',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'digivolve1level',
              'short' => 'Level required for first digivolution',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'digivolve2cost',
              'short' => 'Second digivolution cost',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'digivolve2level',
              'short' => 'Level required for second digivolution',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'dp',
              'short' => 'Digimon power points',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'dpcost',
              'short' => 'DP cost for evolution or abilities',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'effect',
              'short' => 'Card effect text',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'image_url',
              'short' => 'URL to the card image',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'level',
              'short' => 'Card level',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'name',
              'short' => 'Name of the card',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'playcost',
              'short' => 'Cost to play the card',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'rarity',
              'short' => 'Card rarity (e.g., Common, Uncommon, Rare, Super Rare)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'stage',
              'short' => 'Digimon evolution stage (e.g., Rookie, Champion, Ultimate, Mega)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'type',
              'short' => 'Type of card (e.g., Digimon, Tamer, Option)',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'get_all_card',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'sortdirection',
                        'orig' => 'sortdirection',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/getAllCards.php',
                  'parts' => [
                    'getAllCards.php',
                  ],
                  'select' => [
                    'exist' => [
                      'sort',
                      'sortdirection',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'search' => [
          'fields' => [
            [
              'name' => 'attribute',
              'short' => 'Digimon attribute (e.g., Vaccine, Virus, Data, Free)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'cardnumber',
              'short' => 'Unique card number identifier',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'cardset',
              'short' => 'Card set or series this card belongs to',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'color',
              'short' => 'Card color (e.g., Red, Blue, Yellow, Green, Black, Purple, White)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'digivolve1cost',
              'short' => 'First digivolution cost',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'digivolve1level',
              'short' => 'Level required for first digivolution',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'digivolve2cost',
              'short' => 'Second digivolution cost',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'digivolve2level',
              'short' => 'Level required for second digivolution',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'dp',
              'short' => 'Digimon power points',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'dpcost',
              'short' => 'DP cost for evolution or abilities',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'effect',
              'short' => 'Card effect text',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'image_url',
              'short' => 'URL to the card image',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'level',
              'short' => 'Card level',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'name',
              'short' => 'Name of the card',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'playcost',
              'short' => 'Cost to play the card',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'rarity',
              'short' => 'Card rarity (e.g., Common, Uncommon, Rare, Super Rare)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'stage',
              'short' => 'Digimon evolution stage (e.g., Rookie, Champion, Ultimate, Mega)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'type',
              'short' => 'Type of card (e.g., Digimon, Tamer, Option)',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'search',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'attribute',
                        'orig' => 'attribute',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'card',
                        'orig' => 'card',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'cardnumber',
                        'orig' => 'cardnumber',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'color',
                        'orig' => 'color',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'dpcost',
                        'orig' => 'dpcost',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'level',
                        'orig' => 'level',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'playcost',
                        'orig' => 'playcost',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'series',
                        'orig' => 'series',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'sortdirection',
                        'orig' => 'sortdirection',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'stage',
                        'orig' => 'stage',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/search.php',
                  'parts' => [
                    'search.php',
                  ],
                  'select' => [
                    'exist' => [
                      'attribute',
                      'card',
                      'cardnumber',
                      'color',
                      'dpcost',
                      'level',
                      'playcost',
                      'series',
                      'sort',
                      'sortdirection',
                      'stage',
                      'type',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return DigimonTcgFeatures::make_feature($name);
    }
}
