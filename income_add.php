<div class="container mt-4">

<div class="card shadow">

<div class="card-header bg-success text-white">
<h4>Add New Income</h4>
</div>

<div class="card-body">

<form>

<div class="mb-3">
<label class="form-label">Income Date</label>
<input type="date" class="form-control">
</div>

<div class="mb-3">
<label class="form-label">Income Source</label>
<select class="form-select">
<option>Customer Bill Collection</option>
<option>New Connection Charge</option>
<option>Reconnection Charge</option>
<option>Installation Charge</option>
<option>Device Sale</option>
<option>Other Income</option>
</select>
</div>

<div class="mb-3">
<label class="form-label">Description</label>
<input type="text" class="form-control" placeholder="Enter Description">
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
Save Income
</button>

<a href="income.php" class="btn btn-secondary">
Cancel
</a>

</form>

</div>

</div>

</div>
