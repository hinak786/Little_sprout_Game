export const COLORS = [
  {id:'pink',name:'pink',hex:'#e993ac',dark:'#99405e'},
  {id:'yellow',name:'yellow',hex:'#efc453',dark:'#8a650c'},
  {id:'blue',name:'blue',hex:'#83b9d4',dark:'#34677f'},
  {id:'orange',name:'orange',hex:'#e69b69',dark:'#96501d'},
  {id:'purple',name:'purple',hex:'#b7a0d1',dark:'#6d4c90'}
];
export const SHAPES=['circle','triangle','square','heart'];
export function shuffle(items,rng=Math.random){ const a=[...items]; for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a; }
export function makeRounds(focus='mix',rng=Math.random){
  const colors=shuffle(COLORS,rng), shapes=shuffle(SHAPES,rng), counts=shuffle([1,2,3,4,5],rng);
  const modes=focus==='mix'?['colors','shapes','counting','colors','shapes','counting']:Array(3).fill(focus);
  return modes.map((mode,i)=>{
    const group=Math.floor(i/3);
    if(mode==='colors'){const target=colors[focus==='mix'?group:i];return {mode,target:target.id,options:shuffle([target,...shuffle(COLORS.filter(c=>c.id!==target.id),rng).slice(0,2)],rng).map(c=>c.id)};}
    if(mode==='shapes'){const target=shapes[focus==='mix'?group:i];return {mode,target,options:shuffle([target,...shuffle(SHAPES.filter(s=>s!==target),rng).slice(0,2)],rng)};}
    const target=counts[focus==='mix'?group:i];return {mode,target,options:shuffle([target,...shuffle([1,2,3,4,5].filter(n=>n!==target),rng).slice(0,2)],rng)};
  });
}
export class GardenGame{
  constructor(focus='mix',rng=Math.random){this.rounds=makeRounds(focus,rng);this.index=0;this.solved=false;this.wrong=0;this.counted=new Set();this.complete=false;}
  get current(){return this.rounds[this.index];}
  get blooms(){return this.index+(this.solved?1:0);}
  answer(value){if(this.solved||this.complete)return 'locked';if(value===this.current.target){this.solved=true;return 'correct';}this.wrong++;return 'retry';}
  count(id){if(this.current.mode!=='counting'||this.solved||!Number.isInteger(id)||id<0||id>=this.current.target||this.counted.has(id))return false;this.counted.add(id);return this.counted.size;}
  next(){if(!this.solved||this.complete)return false;if(this.index===this.rounds.length-1){this.complete=true;return 'complete';}this.index++;this.solved=false;this.wrong=0;this.counted.clear();return 'next';}
}
