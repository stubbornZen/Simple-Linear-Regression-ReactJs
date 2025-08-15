# R-squared (Coefficient of Determination)

This function computes the R-squared (coefficient of determination), a statistical measure that indicates how well the linear regression model fits the actual data.

---

## R-squared Formula

R-squared is calculated using the formula:

$$
R^2 = 1 - \frac{SS_{\text{res}}}{SS_{\text{tot}}}
$$

Where:

- $( SS_{\text{res}} )$ = _Sum of Squares of Residuals_
- $( SS_{\text{tot}} )$ = _Total Sum of Squares_

### Details of the calculation:

**Total Sum of Squares (_SS_tot_):**

$$
SS_{\text{tot}} = \sum_{i=1}^{n} (y_i - \bar{y})^2
$$

**Sum of Squares of Residuals (_SS_res_):**

$$
SS_{\text{res}} = \sum_{i=1}^{n} (y_i - \hat{y}_i)^2
$$

With:

- $( y_i )$ = Actual Value
- $( \hat{y}_i = w x_i + b )$ = Prediction value from Linear Regression model
- $( \bar{y} )$ = Average of all actual values $( y )$

---

## Interpretation of R² value

- $( R^2 = 1 )$ → Model very accurate
- $( R^2 = 0 )$ → The model performs no better than predicting the mean
- $( R^2 < 0 )$ → The model is worse than simply predicting the mean

---

## Example Usage

```js
import calculateRSquared from "./calculateRSquared";

const x = [1, 2, 3, 4, 5];
const y = [3, 4, 2, 5, 6];

// Assuming the weight w = 0.8 and bias b = 1
const r2 = calculateRSquared(x, y, 0.8, 1);

console.log("R-squared:", r2.toFixed(4));
```
