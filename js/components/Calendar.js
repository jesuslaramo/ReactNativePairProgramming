import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';

export default class Calendar extends Component{

    weekDays = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

    months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    state = {
        activeDate: new Date(),
    }

    changeMonth = (n) => {
        this.setState(()=>{
            this.state.activeDate.setMonth(
                this.state.activeDate.getMonth() + n
            );
            return this.state;
        });
    }


    generateMatrix(){
        var matrix = [];
        var year = this.state.activeDate.getFullYear();
        var month = this.state.activeDate.getMonth();
        var firstDay = new Date(year, month, 1).getDay();
        var maxDays = this.nDays[month];

        if(month === 1){
            if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
                maxDays += 1;
            }
        }

        var counter = 1;
        for(var row = 0; row < 6; row++){
            matrix[row] = [];
            for(var col = 0; col < 7; col++){
                matrix[row][col] = -1;
                if(row === 0 && col >= firstDay){
                    matrix[row][col] = counter++;
                }else if(row > 0 && counter <= maxDays){
                    matrix[row][col] = counter++;
                }
            }
        }
        return matrix;
    }


    render(){
        var weekDaysRow = this.weekDays.map((day, colIndex) => {
            return(
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 12,
                }}>
                    <Text style={{color: colIndex == 0 || colIndex == 6 ? '#d54b3b' : '#838383'}}>{day}</Text>
                </View>
            )
        });

        var matrix = this.generateMatrix();
        console.log(this.props.information);
        rows = matrix.map((row) => {
            var rowItems = row.map((item, colIndex) => {
                return(
                    <View style={{
                        flex: 1, 
                        borderWidth: .5, 
                        borderColor: '#000000',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingVertical: 4,
                        paddingHorizontal: 4,
                    }}>
                        <View style={{
                            backgroundColor: item == this.state.activeDate.getDate() ? '#d54b3b' : '#ffffff',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'flex-end',
                            height: 22,
                            width: 22,
                            borderRadius: 50,
                        }}>
                            <Text style={{
                                color: item == this.state.activeDate.getDate() ? '#ffffff' : '#d54b3b',
                                fontWeight: 'bold',
                            }}>{item != -1 ? item : ''}</Text>
                        </View>
                    </View>
                )
            });
            return(
                <View style={{
                    height: '16.6666666667%',
                    flexDirection: 'row',
                }}>
                    {rowItems}
                </View>
            )
        });

        return(
            <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#ffffff'}}>
                <Text>{this.months[this.state.activeDate.getMonth()]} - {this.state.activeDate.getFullYear()}</Text>
                <Button onPress={() => this.changeMonth(1)} title="Siguiente mes"/>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    {weekDaysRow}
                </View>
                <View style={{flex: 14}}>
                    {rows}
                </View>
            </View>
        )
    }

}