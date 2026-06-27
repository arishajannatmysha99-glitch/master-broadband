<div class="container mt-4">

<div class="card shadow">

<div class="card-header bg-success text-white">
<h4>Add Customer Payment</h4>
</div>

<div class="card-body">

<form>

<div class="mb-3">
<label class="form-label">Customer</label>
<select class="form-select">
<option>Select Customer</option>
<option>MB001 - Md. Rahim</option>
<option>MB002 - Karim</option>
<option>MB003 - Hasan</option>
</select>
</div>

<div class="mb-3">
<label class="form-label">Billing Month</label>
<input type="month" class="form-control">
</div>

<div class="mb-3">
<label class="form-label">Payment Amount</label>
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
<label class="form-label">Transaction ID</label>
<input type="text" class="form-control" placeholder="Optional">
</div>

<div class="mb-3">
<label class="form-label">Remarks</label>
<textarea class="form-control" rows="3" placeholder="Write any notes..."></textarea>
</div>

<button type="submit" class="btn btn-success">
Save Payment
</button>

<a href="billing.php" class="btn btn-secondary">
Cancel
</a>

</form>

</div>

</div>

</div>
