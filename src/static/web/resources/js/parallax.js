var parallaxElements = document.querySelectorAll('.parallax');
for (parallaxElementIndex in parallaxElements) {
    new M.Parallax(parallaxElements[parallaxElementIndex]);
}
