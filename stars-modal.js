// Stars Deposit Modal Functions

function openStarsDepositModal() {
  document.getElementById('starsDepositModal').style.display = 'flex';
  document.getElementById('customStarsAmount').value = '';
  document.getElementById('starsError').style.display = 'none';
  document.querySelectorAll('.stars-preset-btn').forEach(btn => {
    btn.classList.remove('active');
  });
}

function closeStarsDepositModal() {
  document.getElementById('starsDepositModal').style.display = 'none';
}

function selectStarsAmount(amount) {
  document.getElementById('customStarsAmount').value = amount;
  document.getElementById('starsError').style.display = 'none';
  document.querySelectorAll('.stars-preset-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.closest('.stars-preset-btn').classList.add('active');
}

function validateStarsAmount() {
  const input = document.getElementById('customStarsAmount');
  const error = document.getElementById('starsError');
  const amount = parseInt(input.value);

  if (input.value && amount < 100) {
    error.style.display = 'block';
    return false;
  } else {
    error.style.display = 'none';
    return true;
  }
}

function proceedStarsDeposit() {
  const amount = parseInt(document.getElementById('customStarsAmount').value);

  if (!amount) {
    document.getElementById('starsError').textContent = 'Please enter an amount';
    document.getElementById('starsError').style.display = 'block';
    return;
  }

  if (amount < 100) {
    document.getElementById('starsError').textContent = 'Minimum deposit is 100 Stars';
    document.getElementById('starsError').style.display = 'block';
    return;
  }

  // Here you would integrate with Telegram Stars API
  // Example: window.Telegram.WebApp.openInvoice(invoiceUrl)
  console.log('Depositing', amount, 'Stars');
  alert(`Depositing ${amount} Stars\n\nIn production, this would open Telegram Stars payment.`);
  closeStarsDepositModal();
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('starsDepositModal')?.addEventListener('click', function(e) {
    if (e.target === this) {
      closeStarsDepositModal();
    }
  });
});
