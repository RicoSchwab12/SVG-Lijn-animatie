function generateSVG() {
    const svg = "http://www.w3.org/2000/svg";
    const svgArray = document.getElementsByTagName('svg');
    let containerBlocks = document.getElementsByClassName('container__block');

    while (svgArray[0]) svgArray[0].parentNode.removeChild(svgArray[0]);
    for(let i = 0; i < containerBlocks.length; i++) {
        let animatedSVG = document.createElementNS(svg, 'svg');
        let rectangle = document.createElementNS(svg, 'rect');
        
        animatedSVG.setAttribute('height', parseFloat(containerBlocks[i].offsetHeight));
        animatedSVG.setAttribute('width',  parseFloat(containerBlocks[i].offsetWidth));

        rectangle.setAttributeNS(null, 'y', 0);
        rectangle.setAttributeNS(null, 'x', 0);

        rectangle.setAttributeNS(null, 'width', '50');
        rectangle.setAttributeNS(null, 'height', '50');

        rectangle.setAttribute('width',  parseFloat(containerBlocks[i].offsetWidth));
        rectangle.setAttribute('height', parseFloat(containerBlocks[i].offsetHeight));

        rectangle.setAttributeNS(null, 'fill', 'transparent');
        rectangle.setAttributeNS(null, 'stroke', 'transparent');
        
        animatedSVG.appendChild(rectangle);
        containerBlocks[i].appendChild(animatedSVG);
    
        containerBlocks[i].addEventListener('mouseover', () =>  {
            rectangle.setAttributeNS(null, 'stroke', '#ffff00');
        });
        containerBlocks[i].addEventListener('mouseout', () =>  {
            rectangle.setAttributeNS(null, 'stroke', 'transparent');
        });
    }
}

window.onresize = function() {
    generateSVG();
};

generateSVG();