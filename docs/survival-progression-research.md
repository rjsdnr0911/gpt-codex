# Codex Craft Survival Progression Research

이 문서는 Minecraft Wiki의 ore, crafting, smelting, generated structures 정보를 참고해 Codex Craft에 필요한 생존 진행 요소를 정리한 것이다. 공식 에셋이나 명칭 의존은 피하고, 기능적 역할을 독립 voxel sandbox에 맞춰 재해석한다.

## 1순위 진행 루프

1. 나무 계열
   - 통나무 -> 판자 -> 막대기 -> 제작대.
   - 초반 도구, 집, 상자, 문, 울타리, 횃불 손잡이의 기반.

2. 돌 계열
   - 돌/조약돌 -> 돌 도구, 화로, 기본 건축 블록.
   - 나무 곡괭이 이후 첫 업그레이드 지점.

3. 연료와 조명
   - 석탄 또는 숯.
   - 횃불, 화로 연료, 동굴 탐험 안정성을 만든다.

4. 금속 제련
   - 철 원석 -> 철 주괴.
   - 철 곡괭이, 양동이, 방패, 갑옷, 고급 기계/레일 계열의 출발점.

5. 고급 채굴
   - 금, 레드스톤, 청금석, 다이아몬드.
   - 금은 희귀 제작/거래 느낌, 레드스톤은 전기 회로, 청금석은 강화/염료, 다이아몬드는 최고급 도구로 역할 분리.

## 광물 후보

| 광물 | 권장 드롭 | 필요한 도구 | 게임 내 역할 |
| --- | --- | --- | --- |
| Coal Ore | coal | wooden pickaxe+ | 횃불, 화로 연료 |
| Copper Ore | raw_copper | stone pickaxe+ | 장식 블록, 피뢰침/망원경류 확장 |
| Iron Ore | raw_iron | stone pickaxe+ | 철 도구, 갑옷, 양동이, 방패, 기계류 |
| Gold Ore | raw_gold | iron pickaxe+ | 희귀 장비, 음식, 거래/보상 |
| Redstone Ore | redstone_dust x4-5 | iron pickaxe+ | 회로, 자동화, 특수 장치 |
| Lapis Ore | lapis_lazuli x4-8 | stone pickaxe+ | 강화/마법, 염료 |
| Diamond Ore | diamond | iron pickaxe+ | 최상위 도구, 강화 테이블 |
| Emerald Ore | emerald | iron pickaxe+ | 거래, 마을 보상 |

## 제작법 후보

1. 즉시 추가 가치가 큰 레시피
   - torch: stick + coal
   - furnace: 8 stone/cobblestone
   - chest: 8 planks
   - wooden/stone/iron pickaxe, axe, shovel, sword
   - door, ladder, fence, slab/stair 계열

2. 생존 시스템을 살리는 레시피
   - bread: wheat x3
   - bucket: iron ingot x3
   - shield: planks + iron ingot
   - bed: wool x3 + planks x3
   - armor set: iron/diamond 재료 기반

3. 중후반 확장 레시피
   - enchantment table: book + diamond + obsidian
   - anvil: iron blocks + iron ingots
   - compass/clock: iron/gold + redstone
   - rails/minecart: iron + stick
   - redstone torch, lever, pressure plate, piston

## 월드 구조 후보

1. 초반 체감이 큰 구조
   - small cabin: 나무/판자, 상자 1개, 침대나 제작대 확률.
   - ruined camp: 모닥불, 통나무, 기본 식량/횃불 보상.
   - shallow mineshaft: 나무 지지대, 레일 느낌, 광물 노출, 상자.

2. 탐험 보상이 있는 구조
   - village-lite: 집 3-6개, 농장, 우물, 작업대, 상자.
   - desert ruin: 모래/사암 건물, 숨겨진 보상 상자.
   - ruined portal analogue: 흑요석 느낌 블록, 금/희귀 광물 보상.

3. 동굴/지하 구조
   - dungeon room: 조약돌 방, 위험 몹을 나중에 붙일 수 있는 중심방, 상자.
   - geode: 수정/장식 광물 채집 장소.
   - deep mine: 철 이상 광물과 고급 보상이 있는 긴 복도.

## 구현 우선순위

1. Coal/Iron/Copper/Gold/Diamond 블록과 raw/ingot 아이템 추가.
2. furnace UI와 smelting queue 추가.
3. torch 설치와 동적 point light 추가.
4. chest 블록과 보관 UI 추가.
5. axe/shovel/sword, iron/diamond pickaxe 추가.
6. 지형 생성에 광물별 고도/희귀도 분포 추가.
7. small cabin, shallow mineshaft, village-lite 순서로 구조물 생성.

## 참고 자료

- Minecraft Wiki: Ore - https://minecraft.wiki/w/Ore
- Minecraft Wiki: Smelting - https://minecraft.wiki/w/Smelting
- Minecraft Wiki: Crafting - https://minecraft.wiki/w/Crafting
- Minecraft Wiki: Pickaxe - https://minecraft.wiki/w/Pickaxe
- Minecraft Wiki: Structure - https://minecraft.wiki/w/Structure
