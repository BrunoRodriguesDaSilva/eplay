import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'
import fifa from '../../assets/images/fifa.png'

const promocoes: Game[] = [
  {
    id: 1,
    title: 'Resident Evil 4',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    category: 'Ação',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    title: 'Diablo IV',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    category: 'RPG',
    system: 'Windows',
    infos: ['5%', 'R$ 290,00'],
    image: diablo
  },
  {
    id: 3,
    title: 'The Legend of Zelda - TOK',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    category: 'RPG',
    system: 'Switch',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  },
  {
    id: 4,
    title: 'Star Wars Jedi Survivor',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    category: 'Aventura',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: starWars
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    title: 'FIFA 23',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    category: 'Esporte',
    system: 'PS5',
    infos: ['17/05'],
    image: fifa
  },
  {
    id: 6,
    title: 'FIFA 23',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    category: 'Esporte',
    system: 'Windows',
    infos: ['17/05'],
    image: fifa
  },
  {
    id: 7,
    title: 'FIFA 23',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    category: 'Esporte',
    system: 'PS5',
    infos: ['17/05'],
    image: fifa
  },
  {
    id: 8,
    title: 'FIFA 23',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    category: 'Esporte',
    system: 'Windows',
    infos: ['17/05'],
    image: fifa
  }
]

const Categories = () => (
  <>
    <ProductsList games={promocoes} title="RPG" background={'gray'} />
    <ProductsList games={emBreve} title="Ação" background={'black'} />
    <ProductsList games={promocoes} title="Aventura" background={'gray'} />
    <ProductsList games={emBreve} title="FPS" background={'black'} />
  </>
)

export default Categories
