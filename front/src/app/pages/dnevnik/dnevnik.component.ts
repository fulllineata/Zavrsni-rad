import {Component, OnInit} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Chart} from 'chart.js';

@Component({
    selector: 'app-dnevnik',
    templateUrl: './dnevnik.component.html',
    styleUrls: ['./dnevnik.component.css']
})

export class DnevnikComponent implements OnInit {
    public dnevno = [];
    public dnevno7 = [];
    public dnevno30 = [];
    LineChart: any = [];
    dnevnik: any = [];
    dnevnik7: any = [];
    dnevnik30: any = [];
    vrednosti: any = [];
    vrednostiDnevno: any = [];
    vrednosti7: any = [];
    vrednostiNedeljno: any = [];
    vrednosti30: any = [];
    vrednostiMesecno: any = [];
    namirnice: any = [];
    namirniceDnevno: any = [];
    namirnice7: any = [];
    namirniceNedeljno: any = [];
    namirnice30: any = [];
    namirniceMesecno: any = [];

    datum30: any = [];
    datumMesecno: any = [];
    datum: any = [];
    datumDnevno: any = [];
    datum7: any = [];
    datumNedeljno: any = [];

    constructor(private _http: Http) {

    }

    ngOnInit() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('token', localStorage.getItem('token'));

        this._http.get('http://localhost/projects/getDnevnik.php', {headers: headers}).subscribe(
            data => {
                this.dnevnik = JSON.parse(data['_body']).zapisi;
                for (let entry of this.dnevnik) {

                    this.vrednosti.push(entry.vrednost);
                    this.namirnice.push(entry.ime_namirnice);
                }

                const total = this.dnevnik.reduce((sum, item) => sum + item.vrednost, 0);
                this.dnevno = total;
                this.LineChart = new Chart('lineChart', {
                    type: 'pie',
                    data: {
                        labels: this.namirnice,
                        datasets: [{
                            label: 'jedan',
                            data: this.vrednosti,
                            fill: false,
                            lineTension: 0.2,
                            borderColor: 'red',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        title: {
                            text: 'Tablica kalorija',
                            display: true
                        }, scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });
            },

            error => {
                console.log('Error dnevnik.component.ts: \n' + error.toString());
            }
        );

        this._http.get('http://localhost/projects/getDnevnik.php', {headers: headers}).subscribe(
            data => {
                this.dnevnik = JSON.parse(data['_body']).zapisi;
                for (let entry1 of this.dnevnik) {
                    this.vrednostiDnevno.push(entry1.vrednost);
                    this.namirniceDnevno.push(entry1.ime_namirnice);
                    this.datumDnevno.push(entry1.datum);


                }
                const total = this.dnevnik.reduce((sum, item) => sum + item.vrednost, 0);
                this.dnevno = total;
                this.LineChart = new Chart('lineChartDnevno', {
                    type: 'bar',
                    data: {
                        labels: this.datumDnevno,
                        datasets: [{
                            label: 'Broj kalorija',
                            data: this.vrednostiDnevno,
                            fill: false,
                            lineTension: 0.2,
                            borderColor: 'blue',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        title: {
                            text: 'Tablica kalorija',
                            display: true
                        },    scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }}
                });
            },

            error => {
                console.log('Error dnevnik.component.ts: \n' + error.toString());
            }
        );


        this._http.get('http://localhost/projects/getDnevnik7.php', {headers: headers}).subscribe(
            data => {
                this.dnevnik7 = JSON.parse(data['_body']).zapisi;
                for (let entry7 of this.dnevnik7) {
                    this.vrednosti7.push(entry7.vrednost);
                    this.namirnice7.push(entry7.ime_namirnice);
                }
                const total7 = this.dnevnik7.reduce((sum, item) => sum + item.vrednost, 0);
                this.dnevno7 = total7;
                this.LineChart = new Chart('lineChart7', {
                    type: 'pie',
                    data: {
                        labels: this.namirnice7,
                        datasets: [{
                            label: 'jedan',
                            data: this.vrednosti7,
                            fill: false,
                            lineTension: 0.2,
                            borderColor: 'red',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        title: {
                            text: 'Tablica kalorija',
                            display: true
                        },    scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }}
                });
            },

            error => {
                console.log('Error dnevnik.component.ts: \n' + error.toString());
            }
        );

        this._http.get('http://localhost/projects/getDnevnik7.php', {headers: headers}).subscribe(
            data => {
                this.dnevnik7 = JSON.parse(data['_body']).zapisi;
                for (let entry7Nedeljno of this.dnevnik) {

                    this.datumNedeljno.push(entry7Nedeljno.datum);
                    this.vrednostiNedeljno.push(entry7Nedeljno.vrednost);
                    this.namirniceNedeljno.push(entry7Nedeljno.ime_namirnice);


                }

                const total7 = this.dnevnik7.reduce((sum, item) => sum + item.vrednost, 0);
                this.dnevno7 = total7;
                this.LineChart = new Chart('lineChartNedeljno', {
                    type: 'bar',
                    data: {
                        labels: this.datumNedeljno,
                        datasets: [{
                            label: 'Broj kalorija',
                            data: this.vrednostiNedeljno,
                            fill: false,
                            lineTension: 0.2,
                            borderColor: 'blue',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        title: {
                            text: 'Tablica kalorija',
                            display: true
                        },    scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }}
                });
            },

            error => {
                console.log('Error dnevnik.component.ts: \n' + error.toString());
            }
        );

        this._http.get('http://localhost/projects/getDnevnik30.php', {headers: headers}).subscribe(
            data => {
                this.dnevnik30 = JSON.parse(data['_body']).zapisi;
                for (let entry30 of this.dnevnik30) {
                    this.vrednosti30.push(entry30.vrednost);
                    this.namirnice30.push(entry30.ime_namirnice);
                }
                const total30 = this.dnevnik30.reduce((sum, item) => sum + item.vrednost, 0);
                this.dnevno30 = total30;
                this.LineChart = new Chart('lineChart30', {
                    type: 'pie',
                    data: {
                        labels: this.namirnice30,
                        datasets: [{
                            label: 'jedan',
                            data: this.vrednosti30,
                            fill: false,
                            lineTension: 0.2,
                            borderColor: 'red',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        title: {
                            text: 'Tablica kalorija',
                            display: true
                        },    scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }}
                });
            },

            error => {
                console.log('Error dnevnik.component.ts: \n' + error.toString());
            }
        );





        this._http.get('http://localhost/projects/getDnevnik30.php', {headers: headers}).subscribe(
            data => {
                this.dnevnik30 = JSON.parse(data['_body']).zapisi;
                for (let entry30Mesecno of this.dnevnik30) {
                    this.vrednostiMesecno.push(entry30Mesecno.vrednost);
                    this.namirniceMesecno.push(entry30Mesecno.ime_namirnice);
                    this.datumMesecno.push(entry30Mesecno.datum)


                }
                const total30 = this.dnevnik30.reduce((sum, item) => sum + item.vrednost, 0);
                this.dnevno30 = total30;
                this.LineChart = new Chart('lineChartMesecno', {
                    type: 'bar',
                    data: {
                        labels: this.datumMesecno,
                        datasets: [{
                            label: 'Broj kalorija',
                            data: this.vrednostiMesecno,
                            fill: false,
                            lineTension: 0.2,
                            borderColor: 'blue',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        title: {
                            text: 'Tablica kalorija',
                            display: true
                        },    scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }}
                });
            },

            error => {
                console.log('Error dnevnik.component.ts: \n' + error.toString());
            }
        );














    }


    public obirsi_unos(id: number) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('token', localStorage.getItem('token'));
        const data = 'id=' + id;
        this._http.post('http://localhost/projects/obrisi_unos.php', data, {headers: headers}).subscribe(
            response => {
                console.log(response.toString());
                location.reload();
            },
            error => {
                console.log(error.toString());
            }
        );
    }


}
