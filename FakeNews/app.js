let adj = [ 'logical', 'needless', 'hellish', 'fearful', 'faithful', 'evanescent',
    'redundant', 'electric', 'broad', 'outrageous', 'popular', 'curvy', 'coherent',
    'tame', 'harsh', 'lyrical', 'chunky', 'prickly', 'deafening', 'cultured', 'vulgar',
    'sweltering', 'imminent', 'wasteful', 'humdrum' ];

let verb = [ 'concludes', 'tempts', 'covers', 'rewards', 'stretchs', 'exerts', 'exhibits',
    'participates', 'advertises', 'shouts', 'squeezes', 'repeats', 'shakes', 'drowns', 
    'reinforces', 'constructs', 'separates', 'accompanies', 'dedicates', 'favours',
    'urges', 'dictates', 'deserves', 'qualifies', 'solves' ];

let noun = [ 'fire', 'killer', 'landslide', 'tsunami', 'tornado', 'hurricane', 'plague',
    'drought', 'flood', 'virus', 'earthquake'];

const randomAdj = adj[Math.floor(Math.random() * adj.length)];
const randomVerb = verb[Math.floor(Math.random() * verb.length)];
const randomNoun = noun[Math.floor(Math.random() * noun.length)];
    
const headlineTitle = `${randomAdj} ${randomNoun} ${randomVerb} the world`
    
const headline = document.getElementById('headline');
const button = document.getElementById('flip');

const changeHeadline = () => {
    headline.innerHTML = headlineTitle;
    headline.style.backgroundColor = 'transparent';
}

button.addEventListener('click', changeHeadline);