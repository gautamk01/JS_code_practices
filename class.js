class Man {

    name1 = 'Gautam';
    printname() {
        console.log(this.name1);

    }
}
class femeal extends Man {
    name = 'max';
    printname2() {
        console.log(this.name);

    }
}

const F1 = new femeal();
F1.printname2();
F1.printname();