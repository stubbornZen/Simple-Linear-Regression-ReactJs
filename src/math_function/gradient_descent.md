# Gradient Descent for Linear Regression

This code block implements the **gradient descent algorithm** for training a simple linear regression model. It repeatedly updates the model parameters ($w$ and $b$) using the gradients computed from the cost function, with the goal of minimizing the prediction error.

---

<br>


## 🔍 How It Works

### 📥 Inputs

- `x`: List of input features ($x^{(i)}$)
- `y`: List of target outputs ($y^{(i)}$)
- `alpha`: Learning rate — controls the step size in parameter updates
- `iteration`: Number of update steps (training iterations)

---

### 🔁 Step-by-Step Process

#### 1. ⚙️ Initialization

Set both model parameters to zero:

$$
w = 0, \quad b = 0
$$

---

#### 2. 🔄 Iterate Over Training Steps

Repeat the following for a specified number of `iteration` steps:

##### a. 📉 Compute Gradients

Use the `gradient_func` to compute partial derivatives of the cost function:

$$
\frac{\partial J}{\partial w}, \quad \frac{\partial J}{\partial b}
$$

---

##### b. 🧮 Update Parameters

Use the gradient descent rule to update both parameters:

$$
w = w - \alpha \cdot \frac{\partial J}{\partial w}
$$

$$
b = b - \alpha \cdot \frac{\partial J}{\partial b}
$$

Where:

- $\alpha$ is the **learning rate**
- $\frac{\partial J}{\partial w}$ and $\frac{\partial J}{\partial b}$ are the **gradients**

---

