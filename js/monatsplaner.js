$(document).ready(function() {
  $("#datepicker").datepicker({
    changeMonth: true,
    changeYear: true,
    showButtonPanel: true,
    dateFormat: "MM yy",
    onClose: function(dateText, inst) {
      var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
      var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
      $(this).datepicker('setDate', new Date(year, month, 1));
      updateCalendar(new Date(year, month, 1));
    }
  });

  $("#datepicker").focus(function() {
    $(".ui-datepicker-calendar").hide();
    $("#ui-datepicker-div").position({
      my: "center top",
      at: "center bottom",
      of: $(this)
    });
  });

  function updateCalendar(date) {
    const month = date.getMonth();
    const year = date.getFullYear();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let calendarBody = '';
    let day = 1;
    for (let i = 0; i < 6; i++) {
      let row = '<tr>';
      for (let j = 1; j <= 7; j++) {
        if (i === 0 && j < (firstDay === 0 ? 7 : firstDay)) {
          row += '<td></td>';
        } else if (day > daysInMonth) {
          break;
        } else {
          row += `<td class="calDay" data-date="${year}-${month + 1}-${day.toString().padStart(2, '0')}">
                    <span>${day}</span><br>
                    <span class="dienstnummer"></span>
                  </td>`;
          day++;
        }
      }
      row += '</tr>';
      calendarBody += row;
      if (day > daysInMonth) {
        break;
      }
    }
    $('#calendarTable tbody').html(calendarBody);

    const cells = document.querySelectorAll('#calendarTable td[data-date]');
    cells.forEach(cell => {
      cell.addEventListener('click', () => {
        const date = cell.getAttribute('data-date');
        openServiceModal(date);
      });
    });
  }

  updateCalendar(new Date());

  document.getElementById('saveServiceBtn').addEventListener('click', () => {
    const date = document.getElementById('modalDate').textContent;
    const dienstnummer = document.getElementById('dienstnummerInput').value;
    saveServiceData(date, dienstnummer);
  });

  // Modal schließen
  document.getElementById('modalClose').addEventListener('click', () => {
    document.getElementById('serviceModal').style.display = 'none';
  });
});

// Öffnet das Modal und lädt die Dienstnummer für das gegebene Datum
function openServiceModal(date) {
  document.getElementById('modalDate').textContent = date;
  loadServiceData(date)
    .then(data => {
      document.getElementById('dienstnummerInput').value = data ? data.dienstnummer : '';
    })
    .catch(err => console.error(err));
  document.getElementById('serviceModal').style.display = 'block';
}

// Lädt Dienstnummerndaten – hier simuliert mit localStorage
function loadServiceData(date) {
  return new Promise((resolve, reject) => {
    try {
      const storedData = localStorage.getItem('dienstData');
      const dienstData = storedData ? JSON.parse(storedData) : {};
      resolve(dienstData[date]);
    } catch (err) {
      reject(err);
    }
  });
}

// Speichert die Dienstnummer – hier simuliert mit localStorage
function saveServiceData(date, dienstnummer) {
  const storedData = localStorage.getItem('dienstData');
  const dienstData = storedData ? JSON.parse(storedData) : {};
  dienstData[date] = { dienstnummer: dienstnummer };
  localStorage.setItem('dienstData', JSON.stringify(dienstData));

  // Kalenderzelle aktualisieren
  const cellDienst = document.querySelector(`#calendarTable td[data-date="${date}"] .dienstnummer`);
  if (cellDienst) {
    cellDienst.textContent = dienstnummer;
  }

  // Modal schließen
  document.getElementById('serviceModal').style.display = 'none';
}
