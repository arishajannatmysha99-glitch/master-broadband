<div class="container mt-4">

<div class="card shadow">

<div class="card-header bg-warning text-dark">
<h4>Edit Income</h4>
</div>

<div class="card-body">

<form>

<div class="mb-3">
<label class="form-label">Income Date</label>
<input type="date" class="form-control" value="2026-06-27">
</div>

<div class="mb-3">
<label class="form-label">Income Source</label>
<select class="form-select">
<option selected>Customer Bill Collection</option>
<option>New Connection Charge</option>
<option>Reconnection Charge</option>
<option>Installation Charge</option>
<option>Device Sale</option>
<option>Other Income</option>
</select>
</div>

<div class="mb-3">
<label class="form-label">Description</label>
<input type="text" class="form-control" value="MB001 - June Bill Collection">
</div>

<div class="mb-3">
<label class="form-label">Amount</label>
<input type="number" class="form-control" value="800">
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
<textarea class="form-control" rows="4">June 2026 Bill Collection</textarea>
</div>

<button type="submit" class="btn btn-success">
Update Income
</button>

<a href="income.php" class="btn btn-secondary">
Cancel
</a>

</form>

</div>

</div>

</div>
