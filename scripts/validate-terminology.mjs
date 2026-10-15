import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const atlas=JSON.parse(await readFile(new URL('../public/models/atlas.json',import.meta.url)));
const glossary=JSON.parse(await readFile(new URL('../app/terminology/zh-Hant.json',import.meta.url)));
const targetParts=atlas.parts.filter(p=>['skeletal','muscular','nervous'].includes(p.system));
const targetIds=new Set(targetParts.map(p=>p.id));
const targetConcepts=atlas.concepts.filter(c=>c.elements.some(id=>targetIds.has(id)));
const names=new Set([...atlas.parts,...atlas.concepts].map(p=>p.name.toLowerCase()));
for(const name of names){
 const zh=glossary[name];
 assert.ok(typeof zh==='string'&&/\p{Script=Han}/u.test(zh),`Missing Chinese: ${name}`);
 assert.ok(!zh.endsWith('第'),`Incomplete ordinal: ${name}`);
 if(/\bleft\b/.test(name))assert.ok(zh.includes('左'),`Missing left side: ${name}`);
 if(/\bright\b/.test(name))assert.ok(zh.includes('右'),`Missing right side: ${name}`);
 if(!/\b(left|right)\b/.test(name))assert.ok(!/[左右]/.test(zh),`Invented side: ${name}`);
}
assert.equal(glossary.axis,'樞椎');
assert.equal(glossary['gluteus maximus'],'臀大肌');
assert.equal(glossary['first plantar interosseous of left foot'],'左足第一蹠側骨間肌');
assert.equal(glossary['third plantar interosseous of right foot'],'右足第三蹠側骨間肌');
assert.notEqual(glossary['transverse head of left adductor hallucis'],glossary['transverse head of left adductor pollicis']);
assert.equal(glossary['right coccygeus'],'右尾骨肌');
assert.equal(glossary.nerve,'神經');
assert.equal(glossary['right knee'],'右膝部');
console.log(`Verified ${names.size} Chinese terminology entries: all ${atlas.parts.length} meshes and ${atlas.concepts.length} concepts, including ${targetParts.length} skeletal/muscle/nerve meshes and ${targetConcepts.length} related concepts.`);
