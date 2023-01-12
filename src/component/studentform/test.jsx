<div className="container">
  <h3 className="bg-dark text-white p-2">Thông tin sinh viên</h3>
  <div className="row">
    <div className="col-md-6">
      <div className="form-group">
        <label>Mã sinh viên</label>
        <input type="text" className="form-control" placeholder="Nhập MSV" />
      </div>
    </div>
    <div className="col-md-6">
      <div className="form-group">
        <label>Họ tên</label>
        <input type="text" className="form-control" placeholder="Nhập Họ Tên" />
      </div>
    </div>
    <div className="col-md-6">
      <div className="form-group">
        <label>Số điện thoại</label>
        <input type="text" className="form-control" placeholder="Nhập số điện thoại" />
      </div>
    </div>
    <div className="col-md-6">
      <div className="form-group">
        <label>Email</label>
        <input type="text" className="form-control" placeholder="Nhập email" />
      </div>
    </div>
  </div>
  <button className="btn btn-success">Thêm sinh viên +</button>
  <table className="table">
    <thead className="bg-dark text-white">
      <tr>
        <th>Mã SV</th>
        <th>Họ Tên</th>
        <th>Số điện thoại</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>PHẠM MINH HOÀNG</td>
        <td>09351938</td>
        <td>pnlinh6789@gmail.com</td>
        <td><button className="btn btn-default border rounded">Sửa</button></td>
      </tr>
    </tbody>
  </table>
</div>
