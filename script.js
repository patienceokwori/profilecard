    const currentTimeElement = document.getElementById('currentTime');
    
    function updateTime() {
        const now = new Date();

        const time = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
         });

         currentTimeElement.textContent = `${time}`;
    }

updateTime();



