<div class="container mt-4">

<div class="d-flex justify-content-between align-items-center mb-3">

<h3>Billing Management</h3>

<a href="payment_add.php" class="btn btn-primary">
Add Payment
</a>

</div>

<div class="card shadow">

<div class="card-body">

<table class="table table-bordered table-hover">

<thead class="table-dark">

<tr>
<th>#</th>
<th>Customer ID</th>
<th>Customer Name</th>
<th>Package</th>
<th>Monthly Bill</th>
<th>Due</th>
<th>Status</th>
<th>Action</th>
</tr>

</thead>

<tbody>

<tr>
<td>1</td>
<td>MB001</td>
<td>Md. Rahim</td>
<td>20 Mbps</td>
<td>800 ৳</td>
<td class="text-danger">400 ৳</td>
<td>
<span class="badge bg-warning text-dark">
Due
</span>
</td>
<td>
<a href="payment_add.php" class="btn btn-success btn-sm">
Pay
</a>
</td>
</tr>

<tr>
<td>2</td>
<td>MB002</td>
<td>Karim</td>
<td>30 Mbps</td>
<td>1200 ৳</td>
<td class="text-success">0 ৳</td>
<td>
<span class="badge bg-success">
Paid
</span>
</td>
<td>
<a href="payment_add.php" class="btn btn-primary btn-sm">
View
</a>
</td>
</tr>

</tbody>

</table>

</div>

</div>

</div>
