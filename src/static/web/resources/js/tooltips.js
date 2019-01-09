var tooltipElements = document.querySelectorAll('.tooltipped');
for (tooltipElementIndex in tooltipElements) {
    new M.Tooltip(tooltipElements[tooltipElementIndex]);
}
