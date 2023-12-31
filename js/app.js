// elements-1
const textOne= document.getElementById('text-one');
const fontFamilyOne= document.getElementById('font-family-one');
const directionOne= document.getElementById('direction-one');
const fontSizeOne= document.getElementById('font-size-one');
const fontWeightOne= document.getElementById('font-weight-one');
const lineHeightOne= document.getElementById('line-height-one');
const letterSpacingOne= document.getElementById('letter-spacing-one');
const wordSpacingOne= document.getElementById('word-spacing-one');
const textAlignOne= document.getElementById('text-align-one');
const colorOne= document.getElementById('color-one');
const textShadowOne= document.getElementById('text-shadow-one');
const fontStyleOne= document.getElementById('font-style-one');

// elements-2
const textTwo= document.getElementById('text-two');
const fontFamilyTwo= document.getElementById('font-family-two');
const directionTwo= document.getElementById('direction-two');
const fontSizeTwo= document.getElementById('font-size-two');
const fontWeightTwo= document.getElementById('font-weight-two');
const lineHeightTwo= document.getElementById('line-height-two');
const letterSpacingTwo= document.getElementById('letter-spacing-two');
const wordSpacingTwo= document.getElementById('word-spacing-two');
const textAlignTwo= document.getElementById('text-align-two');
const colorTwo= document.getElementById('color-two');
const textShadowTwo= document.getElementById('text-shadow-two');
const fontStyleTwo= document.getElementById('font-style-two');

// textarea
const textarea= document.getElementsByTagName('textarea');

// set up typography
// section-1
directionOne.addEventListener('keyup', () => {
  textOne.style.direction= directionOne.value;
});

fontFamilyOne.addEventListener("input", async () => {
  const data= await fontFamilyOne.files[0].arrayBuffer();
  font= new FontFace('fontOne', data);
  await font.load();
  document.fonts.add(font);
  textOne.style.fontFamily= 'fontOne';
});

fontSizeOne.addEventListener('keyup', () => {
  textOne.style.fontSize= fontSizeOne.value;
});

fontWeightOne.addEventListener('keyup', () => {
  textOne.style.fontWeight= fontWeightOne.value;
});

lineHeightOne.addEventListener('keyup', () => {
  textOne.style.lineHeight= lineHeightOne.value;
});

letterSpacingOne.addEventListener('keyup', () => {
  textOne.style.letterSpacing= letterSpacingOne.value;
});

wordSpacingOne.addEventListener('keyup', () => {
  textOne.style.wordSpacing= wordSpacingOne.value;
});

textAlignOne.addEventListener('keyup', () => {
  textOne.style.textAlign= textAlignOne.value;
});

colorOne.addEventListener('input', (event) => {
  textOne.style.color= event.target.value;
});

colorOne.addEventListener('change', (event) => {
  textOne.style.color= event.target.value;
});

textShadowOne.addEventListener('keyup', () => {
  textOne.style.textShadow= textShadowOne.value;
});

fontStyleOne.addEventListener('keyup', () => {
  textOne.style.fontStyle= fontStyleOne.value;
});

// section-2
directionTwo.addEventListener('keyup', () => {
  textTwo.style.direction= directionTwo.value;
});

fontFamilyTwo.addEventListener("input", async () => {
  const data= await fontFamilyTwo.files[0].arrayBuffer();
  font= new FontFace('fontTwo', data);
  await font.load();
  document.fonts.add(font);
  textTwo.style.fontFamily= 'fontTwo';
});

fontSizeTwo.addEventListener('keyup', () => {
  textTwo.style.fontSize= fontSizeTwo.value;
});

fontWeightTwo.addEventListener('keyup', () => {
  textTwo.style.fontWeight= fontWeightTwo.value;
});

lineHeightTwo.addEventListener('keyup', () => {
  textTwo.style.lineHeight= lineHeightTwo.value;
});

letterSpacingTwo.addEventListener('keyup', () => {
  textTwo.style.letterSpacing= letterSpacingTwo.value;
});

wordSpacingTwo.addEventListener('keyup', () => {
  textTwo.style.wordSpacing= wordSpacingTwo.value;
});

textAlignTwo.addEventListener('keyup', () => {
  textTwo.style.textAlign= textAlignTwo.value;
});

colorTwo.addEventListener('input', (event) => {
  textTwo.style.color= event.target.value;
});

colorTwo.addEventListener('change', (event) => {
  textTwo.style.color= event.target.value;
});

textShadowTwo.addEventListener('keyup', () => {
  textTwo.style.textShadow= textShadowTwo.value;
});

fontStyleTwo.addEventListener('keyup', () => {
  textTwo.style.fontStyle= fontStyleTwo.value;
});

// set up textarea
function setHeight(val){
  for(let j=0; j<textarea.length; j++){
    textarea[j].style.height= val;
  }
}
for(let i=0; i<textarea.length; i++){
  textarea[i].addEventListener('mousemove', () => {
    setHeight(window.getComputedStyle(textarea[i]).getPropertyValue('height'));
  });
}