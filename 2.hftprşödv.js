function userData() {
  var number = Number(prompt('Lütfen bitiş sayısını giriniz'))
  if (number <= 1) {
    return "lütfen 1'den büyük sayı giriniz"
  } else return number
}
function main() {
  var number = userData();
  var sum = 0,
    counter = 0
  var even = 0,
    evenSum = 0,
    evenNumber = 0
  var odd = 0,
    oddSum = 0,
    oddNumber = 0 

  for (let i = 1; i <= number; i = i + 1) {
    if (number === 44) {
      alert(number + ' Yasak sayı verildi Çıkış yapılıyor.')
      break
    }
    if (i === 100) {
      alert('Sayı:' + number + '. 100 fazla hesaplayamam.')
      break;
    }
    if (i === 7) {
      alert('Sayı:' + number + ' dahil edilmiyor.')
      continue
    }
    sum += i

    if (i % 2 == 0) {
      evenSum += i
      even++
      evenNumber = String(evenNumber).concat('-' + i)
    }
    if (i % 2 == 1) {
      oddSum += i
      odd++
      oddNumber = String(oddNumber).concat('-' + i)
    }
  }
  document.write('<br>' + 'verilen Sayı: ' + number)
  document.write('<br>' + 'verilen Sayı Toplamı: ' + sum + '<br>')
  document.write('<br>' + 'çift Sayı adeti: ' + even)
  document.write('<br>' + 'çift Sayı toplamı: ' + evenSum)
  document.write('<br>' + 'çift Sayı nelerdir: ' + evenNumber + '<br>')
  document.write('<br>' + 'tek Sayı adeti: ' + odd)
  document.write('<br>' + 'tek Sayı toplamı: ' + oddSum)
  document.write('<br>' + 'tek Sayı nelerdir: ' + oddNumber)
}
main()