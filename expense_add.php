<div class="container mt-4">

<div class="card shadow">

<div class="card-header bg-primary text-white">
<h4>Add New Expense</h4>
</div>

<div class="card-body">

<form>

<div class="mb-3">
<label class="form-label">Expense Date</label>
<input type="date" class="form-control">
</div>

<div class="mb-3">
<label class="form-label">Expense Category</label>
<select class="form-select">
<option>Office Rent</option>
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
<input type="text" class="form-control" placeholder="Enter Expense Title">
</div>

<div class="mb-3">
<label class="form-label">Amount</label>
<input type="number" class="form-control" placeholder="Enter Amount">
</div>

<div class="mb-3">
<label class="form-label">Payment Method</label>
<select class="form-select">
<option>Cash</option>
<option>bKash</option>
<option>Nagad</option>
<option>Rocket</option>
<option>Bank Transfer</option>
</select>
</div>

<div class="mb-3">
<label class="form-label">Notes</label>
<textarea class="form-control" rows="4" placeholder="Write Notes"></textarea>
</div>

<button type="submit" class="btn btn-success">
Save Expense
</button>

<a href="expenses.php" class="btn btn-secondary">
Cancel
</a>

</form>

</div>

</div>

</div>
