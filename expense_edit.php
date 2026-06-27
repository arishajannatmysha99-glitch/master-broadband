<div class="container mt-4">

<div class="card shadow">

<div class="card-header bg-warning text-dark">
<h4>Edit Expense</h4>
</div>

<div class="card-body">

<form>

<div class="mb-3">
<label class="form-label">Expense Date</label>
<input type="date" class="form-control" value="2026-06-27">
</div>

<div class="mb-3">
<label class="form-label">Expense Category</label>
<select class="form-select">
<option selected>Office Rent</option>
<option>Electric Bill</option>
<option>Internet Bill</option>
<option>Salary</option>
<option>Equipment Purchase</option>
<option>Maintenance</option>
<option>Transportation</option>
<option>Other</option>
</select>
</div>

<div class="mb-3">
<label class="form-label">Expense Title</label>
<input type="text" class="form-control" value="Monthly Office Rent">
</div>

<div class="mb-3">
<label class="form-label">Amount</label>
<input type="number" class="form-control" value="5000">
</div>

<div class="mb-3">
<label class="form-label">Payment Method</label>
<select class="form-select">
<option selected>Cash</option>
<option>bKash</option>
<option>Nagad</option>
<option>Rocket</option>
<option>Bank Transfer</option>
</select>
</div>

<div class="mb-3">
<label class="form-label">Notes</label>
<textarea class="form-control" rows="4">Monthly Office Rent Paid</textarea>
</div>

<button type="submit" class="btn btn-success">
Update Expense
</button>

<a href="expenses.php" class="btn btn-secondary">
Cancel
</a>

</form>

</div>

</div>

</div>
