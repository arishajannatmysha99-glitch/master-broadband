<div class="container mt-4">

<div class="d-flex justify-content-between align-items-center mb-3">

<h3>Due Collection</h3>

<div>
<input type="text" class="form-control" placeholder="Search Customer">
</div>

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
<th>Due Amount</th>
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
<td class="text-danger"><strong>400 ৳</strong></td>
<td>
<span class="badge bg-danger">
Due
</span>
</td>
<td>
<a href="payment_add.php" class="btn btn-success btn-sm">
Collect
</a>
</td>
</tr>

<tr>
<td>2</td>
<td>MB003</td>
<td>Hasan</td>
<td>30 Mbps</td>
<td>1200 ৳</td>
<td class="text-danger"><strong>1200 ৳</strong></td>
<td>
<span class="badge bg-danger">
Due
</span>
</td>
<td>
<a href="payment_add.php" class="btn btn-success btn-sm">
Collect
</a>
</td>
</tr>

</tbody>

</table>

</div>

<div class="card-footer">

<div class="row">

<div class="col-md-6">
<h5>Total Due Customers : <strong>2</strong></h5>
</div>

<div class="col-md-6 text-end">
<h5>Total Due Amount :
<span class="text-danger">
1600 ৳
</span>
</h5>
</div>

</div>

</div>

</div>

</div>
