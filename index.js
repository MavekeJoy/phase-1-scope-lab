var customerName = 'bob';


function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
  }

function setBestCustomer() {
    bestCustomer = 'not bob';
  }


function overwriteBestCustomer(newBestCustomer) {
    bestCustomer = newBestCustomer;}


   
const leastFavoriteCustomer = 'some initial value';
function changeLeastFavoriteCustomer() {
        try {
          leastFavoriteCustomer = 'new value';
        } catch (e) {
          throw new Error('Assignment to constant variable.');
        }
      }   
