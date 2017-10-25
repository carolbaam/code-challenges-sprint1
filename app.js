function findShortestOfThreeWords(word1,word2,word3){
  var size1=word1.length;
  var size2=word2.length;
  var size3=word3.length;

  if(size1<=size3 && size1<=size3){
    return word1;
  }else if (size2<size1 && size2<=size3) {
    return word2
  } else {
    return word3;
  }

}
