
function openTab(tabName) {
    const tabs = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }
    document.getElementById(tabName).style.display = 'block';

    const activeTabs = document.getElementsByClassName('tab');
    for (let i = 0; i < activeTabs.length; i++) {
        activeTabs[i].classList.remove('active');
    }
    document.querySelector('.tab[onclick="openTab(\'' + tabName + '\')"]').classList.add('active');
}

function redirectToAnalysis() {
    alert("Redirecting to Analysis Page");
    window.location.href = "analysis.html";
    // You can add any additional logic here if needed.
}
