import React from 'react'

export default function NutritionTable({item}) {
  return (
    <div>
        <h2> Nutrition FActs</h2>
        <p className='"servings-number'>{servingsNumber} servings per customer</p>
        <p className='"servings-size'> Serving size {servingSize}</p>

        <table>
            <tbody>
                <tr className='amount-per-serving'>
                    <td>Amount per serving</td>
                    <td> {/*  empty on purpose */}</td>
                </tr>
                <tr className='calories'>
                    <td>Calories</td>
                    <td> {calories}</td>
                </tr>
                <tr className='daily-value'>
                    <td>Amount per serving</td>
                    <td> {/*  empty on purpose */}</td>
                    <td>% Daily Value</td>
                </tr>
                <tr className='bold-row'>
                    <td>Total fat {totalFAtNumber}</td>
                    <td> {totalFAtPercentage}</td>
                </tr>
                <tr className='indented-row'>
                    <td>Saturated fat {saturatedFatNumber} </td>
                    <td> {saturatedFAtPercentage}</td>
                </tr>
                <tr className='normal-row'>
                    <td>Trans fat {transFatNumber}</td>
                    <td> {transFatPercentage}</td>
                </tr>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ad vel natus iste. Provident itaque eligendi ut vel, nobis pariatur necessitatibus quos corrupti quaerat, quisquam distinctio culpa aspernatur magnam vitae!
                </p>
            </tbody>
        </table>

    </div>
  )
}

.bold-row
    td:first-child
        font-weight:bold

    td:last-child
        font-weight:bold

.indented-row
    td:first-child
    font-weight:bold

    td:last-child
    font-weight:bold

