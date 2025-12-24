/**
 * DADOS CHARTS - Olhar Crítico
 * Charts for the Dados page - Fake News analysis from Arquivo.pt
 */

// Common years array for all charts
const YEARS = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

// ==========================================
// CHART 1: Menções Conjuntas por Área/Tópico
// ==========================================

const TOPICS_DATA = {
    years: YEARS,
    areas: {
        saude: {
            label: "Saúde",
            topics: {
                vacina: { label: "Vacina", data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 149, 142, 97, 0, 0, 1, 4, 9, 209, 446, 1187, 808], color: "#00A0E3" },
                covid: { label: "Covid-19", data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 302184], color: "#E31C79" },
                autismo: { label: "Autismo", data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 5, 91, 244, 1303, 785], color: "#00BC8C" },
                hidroxicloroquina: { label: "Hidroxicloroquina", data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 412], color: "#FF7F00" },
                virus: { label: "Vírus", data: [0, 0, 0, 0, 0, 1, 1, 2, 1, 6, 331, 225, 205, 1, 2, 11, 17, 249, 672, 1674, 2424], color: "#E31937" },
                oms: { label: "OMS", data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 3, 7, 10, 0, 1, 6, 9, 103, 293, 1248, 1857], color: "#9B59B6" },
                dieta: { label: "Dieta", data: [0, 0, 0, 0, 0, 0, 2, 1, 1, 25, 29, 24, 22, 2, 6, 19, 28, 269, 379, 1510, 1606], color: "#3498DB" }
            }
        },
        politica: {
            label: "Política",
            topics: {
                eleicoes: { label: "Eleições", data: [0, 0, 0, 0, 0, 0, 1, 2, 4, 86, 24, 23, 62, 3, 29, 128, 125, 1291, 4737, 11105, 5763], color: "#1ABC9C" },
                governo: { label: "Governo", data: [0, 0, 0, 0, 0, 2, 3, 2, 6, 381, 49, 79, 55, 13, 49, 143, 156, 1569, 6516, 16110, 9700], color: "#2ECC71" },
                presidente: { label: "Presidente", data: [0, 0, 0, 0, 0, 3, 4, 2, 4, 226, 60, 94, 67, 7, 33, 128, 141, 1612, 7782, 6424, 11563], color: "#F1C40F" },
                corrupcao: { label: "Corrupção", data: [0, 0, 0, 0, 0, 0, 1, 1, 5, 21, 113, 107, 59, 2, 16, 72, 86, 829, 2025, 3521, 2751], color: "#E74C3C" },
                partido: { label: "Partido", data: [0, 0, 0, 0, 0, 1, 2, 2, 4, 77, 42, 217, 52, 5, 22, 38, 66, 973, 2642, 7099, 3765], color: "#34495E" },
                esquerda: { label: "Esquerda", data: [0, 0, 0, 0, 0, 0, 3, 2, 7, 497, 25, 40, 236, 3, 10, 80, 79, 1140, 2896, 6113, 3414], color: "#E67E22" },
                direita: { label: "Direita", data: [0, 0, 0, 0, 0, 1, 4, 1, 3, 39, 12, 25, 27, 4, 19, 54, 94, 967, 2433, 6500, 2974], color: "#16A085" },
                censura: { label: "Censura", data: [0, 0, 0, 0, 0, 1, 3, 1, 6, 76, 55, 57, 100, 1, 6, 34, 34, 747, 1631, 1720, 1828], color: "#8E44AD" },
                golpe: { label: "Golpe", data: [0, 0, 0, 0, 0, 0, 2, 2, 1, 28, 39, 23, 36, 3, 319, 14, 41, 526, 1402, 2262, 1471], color: "#C0392B" },
                democracia: { label: "Democracia", data: [0, 0, 0, 0, 0, 2, 3, 2, 6, 36, 43, 95, 59, 3, 24, 64, 94, 1203, 3338, 4254, 4736], color: "#7F8C8D" }
            }
        },
        pais: {
            label: "Países",
            topics: {
                brasil: { label: "Brasil", data: [1, 2, 4, 2, 2, 3, 3, 2, 8, 319, 305, 194, 177, 14, 85, 272, 508, 1596, 6168, 19788, 16772], color: "#009C3B" },
                estados_unidos: { label: "Estados Unidos", data: [0, 0, 0, 0, 0, 3, 6, 2, 3, 18369, 26384, 34693, 11394, 14, 35, 315, 841, 113560, 122229, 110543, 157931], color: "#3C3B6E" },
                china: { label: "China", data: [0, 1, 0, 0, 0, 5, 11, 3, 56, 1130, 425, 675, 127, 133, 1479, 2490, 4318, 8131, 10483, 14312, 18647], color: "#DE2910" },
                russia: { label: "Rússia", data: [0, 0, 0, 0, 0, 1, 1, 2, 1, 10, 8, 45, 37, 3, 15, 39, 65, 1222, 2118, 1583, 2535], color: "#D52B1E" },
                portugal: { label: "Portugal", data: [1, 2, 4, 2, 3, 5, 10, 3, 35, 740, 359, 398, 197, 61, 366, 1178, 2222, 5586, 7210, 8378, 36467], color: "#046A38" }
            }
        },
        tecnologia: {
            label: "Tecnologia",
            topics: {
                inteligencia_artificial: { label: "Inteligência Artificial", data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 9, 6, 1, 0, 0, 0, 40, 17014, 37658, 50523, 65828], color: "#FF5733" },
                cinco_g: { label: "5G", data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 2, 5, 0, 2, 5, 9, 16, 130, 890, 4721, 4258], color: "#33FF57" },
                redes_sociais: { label: "Redes Sociais", data: [0, 0, 0, 0, 0, 0, 0, 0, 1, 43, 8646, 131, 42, 7, 75, 676, 980, 133235, 163823, 89385, 150750], color: "#F0FF33" },
                big_data: { label: "Big Data", data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 23, 3, 22, 35, 112, 3201, 30006, 19337, 56964], color: "#F033FF" }
            }
        },
        politicos: {
            label: "Políticos",
            topics: {
                donald_trump: { label: "Donald Trump", data: [0, 0, 0, 0, 0, 0, 0, 0, 1, 91, 22, 36, 2, 1, 29, 2280, 7678, 299780, 184163, 147334, 103336], color: "#FF5733" },
                jair_bolsonaro: { label: "Jair Bolsonaro", data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1161, 3, 24, 0, 0, 1, 0, 0, 8188, 34284, 83800, 80002], color: "#C70039" },
                lula: { label: "Lula", data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1, 21, 4, 0, 0, 0, 5, 3390, 11250, 30025, 23960], color: "#900C3F" },
                vladimir_putin: { label: "Vladimir Putin", data: [0, 0, 0, 0, 0, 2, 0, 0, 3, 119, 24, 48, 12, 6, 73, 3639, 3378, 85168, 68555, 63546, 49826], color: "#1F618D" },
                marcelo_rebelo: { label: "Marcelo Rebelo", data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 82, 53, 0, 15, 43, 57, 221, 25165, 50376, 81272, 69411], color: "#884EA0" }
            }
        }
    }
};

// ==========================================
// CHART 2: Por Veículo de Notícia
// ==========================================

const VEHICLES_DATA = {
    years: YEARS,
    datasets: {
        all: { label: 'Todas as fontes', data: [1, 4, 0, 14, 35, 58, 24, 19, 117, 48040, 27765, 36942, 11400, 317, 7657, 24202, 36142, 2357823, 480516, 314179, 741697], color: '#FF4040' },
        publico: { label: 'Público', data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 11, 10, 100, 6, 2122, 2194, 1958, 1517], color: '#00A0E3' },
        dn: { label: 'Diário de Notícias', data: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 4020, 12683, 72318, 102133], color: '#0055A4' },
        sic: { label: 'SIC Notícias', data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 434, 1200], color: '#E31C79' },
        rtp: { label: 'RTP', data: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 4, 0, 245, 6196, 4452, 2106], color: '#00BC8C' },
        observador: { label: 'Observador', data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 16, 13377, 25751, 48730, 20316], color: '#FF7F00' },
        cm: { label: 'Correio da Manhã', data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8431, 4805, 3673, 722], color: '#E31937' }
    }
};

// ==========================================
// CHART 3: Teorias da Conspiração
// ==========================================

const THEORIES_DATA = {
    years: YEARS,
    datasets: {
        qanon: { label: 'QAnon', data: [0, 0, 0, 0, 0, 0, 0, 0, 3, 35, 19, 6, 1, 2, 9, 12, 25, 19, 40616, 73747, 141036], color: '#FF4040' },
        illuminati: { label: 'Illuminati', data: [81, 376, 0, 0, 2, 525, 1954, 1535, 6157, 162179, 84740, 100450, 51194, 47012, 351253, 118132, 593972, 217734, 246481, 183752, 169434], color: '#00A0E3' },
        chemtrails: { label: 'Chemtrails', data: [0, 8, 0, 3, 17, 47, 15, 29, 211, 44213, 37060, 22080, 4608, 11623, 123232, 279933, 244270, 132669, 77797, 78281, 80126], color: '#0055A4' },
        reptilianos: { label: 'Reptilianos', data: [0, 7, 29, 0, 0, 14, 22, 129, 186, 3640, 1653, 6925, 3, 3961, 47451, 126661, 59047, 145434, 46992, 53247, 54448], color: '#E31C79' },
        ufo: { label: 'UFO', data: [8, 3150, 3098, 6840, 6732, 15948, 697, 16, 63508, 748962, 136029, 142822, 70623, 50782, 371451, 207678, 930558, 357065, 141565, 549667, 551545], color: '#00BC8C' }
    }
};

// ==========================================
// CHART CONFIGURATION UTILITIES
// ==========================================

function applyLogScale(dataArray) {
    return dataArray.map(value => value > 0 ? Math.log10(value + 1) : 0);
}

function getChartOptions(title = '') {
    return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: 'white',
                    font: { family: "'Raleway', sans-serif", size: 12 },
                    usePointStyle: true,
                    pointStyle: 'circle',
                    padding: 15
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0,0,0,0.9)',
                titleFont: { family: "'Bebas Neue', sans-serif", size: 14 },
                bodyFont: { family: "'Raleway', sans-serif", size: 12 },
                callbacks: {
                    label: function (context) {
                        return `${context.dataset.label}: ${context.raw.toLocaleString()}`;
                    }
                }
            },
            title: title ? {
                display: true,
                text: title,
                font: { size: 16, family: "'Bebas Neue', sans-serif" },
                color: 'white',
                padding: { bottom: 20 }
            } : { display: false }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'rgba(255,255,255,0.8)',
                    callback: function (value) { return value.toLocaleString(); }
                },
                grid: { color: 'rgba(255,255,255,0.1)' }
            },
            x: {
                ticks: { color: 'rgba(255,255,255,0.8)' },
                grid: { color: 'rgba(255,255,255,0.1)' }
            }
        },
        interaction: { mode: 'nearest', intersect: false }
    };
}

function createDataset(label, data, color) {
    return {
        label: label,
        data: data,
        borderColor: color,
        backgroundColor: color + '30',
        borderWidth: 2,
        pointRadius: 3,
        pointBackgroundColor: color,
        fill: false,
        tension: 0.3
    };
}

// ==========================================
// CHART 1: Topics Chart Initialization
// ==========================================

let topicsChart = null;
let currentArea = 'saude';
let selectedTopics = [];

function initTopicsChart() {
    const canvas = document.getElementById('topicsChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    topicsChart = new Chart(ctx, {
        type: 'line',
        data: { labels: YEARS, datasets: [] },
        options: getChartOptions()
    });

    // Initialize area buttons
    document.querySelectorAll('.area-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            currentArea = this.dataset.area;
            document.querySelectorAll('.area-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderTopicCheckboxes();
        });
    });

    // Initialize with default area
    renderTopicCheckboxes();

    // Apply button
    document.getElementById('applyTopicsBtn')?.addEventListener('click', updateTopicsChart);

    // Scale toggle
    document.querySelectorAll('input[name="topicsScale"]').forEach(radio => {
        radio.addEventListener('change', updateTopicsChart);
    });

    // Add default topics
    selectedTopics = [
        { id: 'donald_trump', area: 'politicos' },
        { id: 'inteligencia_artificial', area: 'tecnologia' }
    ];
    updateTopicsChart();
}

function renderTopicCheckboxes() {
    const container = document.getElementById('topicCheckboxes');
    if (!container) return;

    container.innerHTML = '';
    const topics = TOPICS_DATA.areas[currentArea]?.topics || {};

    for (const [key, topic] of Object.entries(topics)) {
        const isSelected = selectedTopics.some(t => t.id === key && t.area === currentArea);
        const label = document.createElement('label');
        label.className = 'chart-checkbox';
        label.innerHTML = `
            <input type="checkbox" data-topic="${key}" ${isSelected ? 'checked' : ''}>
            <span class="checkbox-color" style="background:${topic.color}"></span>
            <span>${topic.label}</span>
        `;
        container.appendChild(label);

        label.querySelector('input').addEventListener('change', function () {
            if (this.checked) {
                if (!selectedTopics.some(t => t.id === key && t.area === currentArea)) {
                    selectedTopics.push({ id: key, area: currentArea });
                }
            } else {
                selectedTopics = selectedTopics.filter(t => !(t.id === key && t.area === currentArea));
            }
        });
    }
}

function updateTopicsChart() {
    if (!topicsChart) return;

    const scaleType = document.querySelector('input[name="topicsScale"]:checked')?.value || 'linear';
    const datasets = [];

    selectedTopics.forEach(topic => {
        const areaData = TOPICS_DATA.areas[topic.area];
        const topicData = areaData?.topics[topic.id];
        if (!topicData) return;

        let chartData = [...topicData.data];
        if (scaleType === 'logarithmic') chartData = applyLogScale(chartData);

        datasets.push(createDataset(
            `${areaData.label}: ${topicData.label}`,
            chartData,
            topicData.color
        ));
    });

    topicsChart.data.datasets = datasets;
    topicsChart.options.scales.y.type = scaleType;
    topicsChart.update();
}

// ==========================================
// CHART 2: Vehicles Chart Initialization
// ==========================================

let vehiclesChart = null;

function initVehiclesChart() {
    const canvas = document.getElementById('vehiclesChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    vehiclesChart = new Chart(ctx, {
        type: 'line',
        data: { labels: YEARS, datasets: [] },
        options: getChartOptions()
    });

    document.getElementById('applyVehiclesBtn')?.addEventListener('click', updateVehiclesChart);
    document.querySelectorAll('input[name="vehiclesScale"]').forEach(radio => {
        radio.addEventListener('change', updateVehiclesChart);
    });

    updateVehiclesChart();
}

function updateVehiclesChart() {
    if (!vehiclesChart) return;

    const scaleType = document.querySelector('input[name="vehiclesScale"]:checked')?.value || 'linear';
    const selected = Array.from(document.querySelectorAll('#vehicleCheckboxes input:checked'))
        .map(el => el.dataset.vehicle);

    const datasets = [];
    selected.forEach(key => {
        const v = VEHICLES_DATA.datasets[key];
        if (!v) return;
        let chartData = [...v.data];
        if (scaleType === 'logarithmic') chartData = applyLogScale(chartData);
        datasets.push(createDataset(v.label, chartData, v.color));
    });

    vehiclesChart.data.datasets = datasets;
    vehiclesChart.options.scales.y.type = scaleType;
    vehiclesChart.update();
}

// ==========================================
// CHART 3: Theories Chart Initialization
// ==========================================

let theoriesChart = null;

function initTheoriesChart() {
    const canvas = document.getElementById('theoriesChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    theoriesChart = new Chart(ctx, {
        type: 'line',
        data: { labels: YEARS, datasets: [] },
        options: getChartOptions('Menções a Teorias da Conspiração por Ano')
    });

    document.getElementById('applyTheoriesBtn')?.addEventListener('click', updateTheoriesChart);
    document.querySelectorAll('input[name="theoriesScale"]').forEach(radio => {
        radio.addEventListener('change', updateTheoriesChart);
    });

    updateTheoriesChart();
}

function updateTheoriesChart() {
    if (!theoriesChart) return;

    const scaleType = document.querySelector('input[name="theoriesScale"]:checked')?.value || 'linear';
    const selected = Array.from(document.querySelectorAll('#theoryCheckboxes input:checked'))
        .map(el => el.dataset.theory);

    const datasets = [];
    selected.forEach(key => {
        const t = THEORIES_DATA.datasets[key];
        if (!t) return;
        let chartData = [...t.data];
        if (scaleType === 'logarithmic') chartData = applyLogScale(chartData);
        datasets.push(createDataset(t.label, chartData, t.color));
    });

    theoriesChart.data.datasets = datasets;
    theoriesChart.options.scales.y.type = scaleType;
    theoriesChart.update();
}

// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', function () {
    // Only initialize if we're on the dados page
    if (document.getElementById('topicsChart')) initTopicsChart();
    if (document.getElementById('vehiclesChart')) initVehiclesChart();
    if (document.getElementById('theoriesChart')) initTheoriesChart();
});
